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
      // get all regist status
      const registStatus = await prisma.registStatus.findMany({
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
        }
      });
      return new Response(JSON.stringify(registStatus), { status: 200 });
    } catch (error: any) {
      return new Response(JSON.stringify({ message: error.message }), {
        status: 500,
      });
    }
  }
}
