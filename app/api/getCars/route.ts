import { getServerSession } from 'next-auth';
import { authOptions } from '../../api/auth/[...nextauth]/route';
import { prisma } from '../client';

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response(JSON.stringify({ message: 'Unauthorized' }), {
      status: 401,
    });
  } else {
    try {
      const cars = await prisma.car.findMany({
        select: {
          carId: true,
          bienSo: true,
          owner: {
            select: {
              ownerName: true,
              ownerAddress: true,
            },
          },
          loai: true,
          nhanHieu: true,
        },
      });
      return new Response(JSON.stringify(cars), { status: 200 });
    } catch (error: any) {
      return new Response(JSON.stringify({ message: error.message }), {
        status: 500,
      });
    }
  }
}
