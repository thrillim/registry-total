// import { getServerSession } from 'next-auth';
// import { authOptions } from '../../../api/auth/[...nextauth]/route';
import { prisma } from '../../client';

export async function GET(
  request: Request,
  { params }: { params: { statusId: string } }
) {
  // const session = await getServerSession(authOptions);
  // if (session) {
  try {
    // get all regist status
    const registStatus = await prisma.registStatus.findUnique({
      where: {
        statusId: Number(params.statusId),
      },
      include: {
        CarInfo: true,
      },
    });
    return new Response(JSON.stringify(registStatus), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
  // } else {
  //   return new Response(JSON.stringify({ message: 'You do not have right' }), {
  //     status: 401,
  //   });
  // }
}
