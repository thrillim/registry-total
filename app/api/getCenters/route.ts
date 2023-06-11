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
      const carPaltes = await prisma.registCenter.findMany({
        select: {
          centerCode: true,
          centerName: true,
          centerProvince: true,
          centerAddress: true,
          centerHotline: true,
          centerEmail: true,
          centerStatus: true,
          centerManager: true,
        },
        skip: 1, // not return the first element: "admin"
      });
      // If carStatus is true, change to "Hoạt động", else "Dừng hoạt động"
      carPaltes.forEach((carPalte) => {
        carPalte.centerStatus = carPalte.centerStatus
          ? 'Hoạt động'
          : 'Dừng hoạt động';
      });

      return new Response(JSON.stringify(carPaltes), { status: 200 });
    } catch (error: any) {
      return new Response(JSON.stringify({ message: error.message }), {
        status: 500,
      });
    }
  }
}
