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
      console.log(today)
      // get all regist status
      const registStatus = await prisma.registStatus.findMany({
        where: {
          status: "Thành công",
          statusValidUntil: {
            lte: today, // less than or equal
          }
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
      });
      // get real value of today
      today.setDate(today.getDate() - limit);
      // add expiredStatus to registStatus
      if (registStatus.length) {
        registStatus.forEach((item) => {
          // if today is after statusValidUntil => set expiredStatus to "Hết hạn"
          if (today > item.statusValidUntil) {
            item.expiredStatus = "Hết hạn";
          } else {
            item.expiredStatus = "Sắp hết hạn";
          }
        })
      }
      return new Response(JSON.stringify(registStatus), { status: 200 });
    } catch (error: any) {
      return new Response(JSON.stringify({ message: error.message }), {
        status: 500,
      });
    }
  }
}
