import { getServerSession } from 'next-auth';
import { authOptions } from '../../api/auth/[...nextauth]/route';
import { prisma } from '../client';

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  if (session.user.accRole !== 'Admin') {
    return new Response(JSON.stringify({ message: 'You do not have right' }), {
      status: 401,
    });
  } else {
    try {
      // get today time
      const today = new Date();
      const limit = 30; // days
      today.setDate(today.getDate() + limit);

      // get ALL the success regist status of a car that is going to expire in 30 days of all regist centers
      const registStatus = await prisma.registStatus.findMany({
        where: {
          status: 'Thành công',
          statusValidUntil: {
            lte: today, // less than or equal
          },
        },
        include: {
          RegistCenter: {
            select: {
              centerCode: true,
              centerProvince: true,
            },
          },
          CarInfo: {
            select: {
              bienSo: true,
              loai: true,
            },
          },
        },
        // order by statusValidUntil from latest to oldest
        orderBy: {
          statusValidUntil: 'desc',
        },
      });

      // if one bienSo exist in more than one registStatus => keep the one with the latest statusValidUntil
      let uniqueRegistStatus = [];
      let uniquePlate = [];
      registStatus.forEach((item) => {
        if (!uniquePlate.includes(item.CarInfo.bienSo)) {
          uniqueRegistStatus.push(item);
          uniquePlate.push(item.CarInfo.bienSo);
        }
        // sorted in the query above so no need to eliminate duplicate here
        // else {
        //   const index = uniquePlate.indexOf(item.CarInfo.bienSo);
        //   if (
        //     uniqueRegistStatus[index].statusValidUntil <
        //     item.statusValidUntil
        //   ) {
        //     uniqueRegistStatus[index] = item;
        //   }
        // }
      });

      // get real value of today
      today.setDate(today.getDate() - limit);
      // add expiredStatus to registStatus
      if (uniqueRegistStatus.length) {
        uniqueRegistStatus.forEach((item) => {
          // if today is after statusValidUntil => set expiredStatus to "Hết hạn"
          if (today > item.statusValidUntil) {
            item.expiredStatus = 'Hết hạn';
          } else {
            item.expiredStatus = 'Sắp hết hạn';
          }
        });
      }
      return new Response(JSON.stringify(uniqueRegistStatus), { status: 200 });
    } catch (error: any) {
      return new Response(JSON.stringify({ message: error.message }), {
        status: 500,
      });
    }
  }
}
