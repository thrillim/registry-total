import { getServerSession } from 'next-auth';
import { authOptions } from '../../../api/auth/[...nextauth]/route';
import { prisma } from '../../client';

export async function GET(
  request: Request,
  { params }: { params: { centerId: string } }
) {
  const session = await getServerSession(authOptions);
  if (session.user.accRole === 'Admin' || session.user.RegistCenterId === Number(params.centerId)) {
    try {
      // get all regist status
      const registStatus = await prisma.registStatus.findMany({
        where: {
          RegistCenterId: Number(params.centerId),
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
        // sort by statusCreatedAt
        orderBy: {
          statusCreatedAt: 'asc',
        },
      });
      return new Response(JSON.stringify(registStatus), { status: 200 });
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
