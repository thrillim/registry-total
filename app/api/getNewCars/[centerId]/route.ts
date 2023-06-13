import { getServerSession } from 'next-auth';
import { authOptions } from '../../../api/auth/[...nextauth]/route';
import { prisma } from '../../client';

export async function GET(
  request: Request,
  { params }: { params: { centerId: string } }
) {
  const session = await getServerSession(authOptions);
  if (
    session.user.accRole === 'Admin' ||
    session.user.RegistCenterId === Number(params.centerId)
  ) {
    try {
      // find the province of this center
      const center = await prisma.registCenter.findUnique({
        where: {
          centerId: Number(params.centerId),
        },
        select: {
          centerProvince: true,
        },
      });

      // find the number of active center in this province
      const numOfActiveCenter = await prisma.registCenter.count({
        where: {
          centerProvince: center.centerProvince,
          centerStatus: true,
        },
      });

      // find the number of new cars in this province
      const numOfNewCars = await prisma.car.count({
        where: {
          // this car Id is not in registStatus
          NOT: {
            RegistStatus: {
              some: {
                status: 'Thành công',
              },
            },
          },
          // this car owner is in this province
          owner: {
            ownerAddress: center.centerProvince,
          },
        },
      });

      return new Response(
        JSON.stringify({
          province: center.centerProvince,
          activeCenter: numOfActiveCenter,
          newCars: numOfNewCars,
        }),
        { status: 200 }
      );
    } catch (error: any) {
      return new Response(JSON.stringify({ message: error.message }), {
        status: 500,
      });
    }
  } else {
    return new Response(JSON.stringify({ message: 'You do not have right' }), {
      status: 401,
    });
  }
}
