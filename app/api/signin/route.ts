import { prisma } from '../client';
import * as bcrypt from 'bcrypt';
import { signJwtAccessToken } from '../../../lib/jwt';

/* Defines the structure of the request body. */
interface RequestBody {
  username: string;
  password: string;
}

export async function POST(request: Request) {
  'use server';
  try {
    const body = await request.json();
    if (!body.username || !body.password) {
      return new Response(
        JSON.stringify({ message: 'Missing username or password' }),
        { status: 400 }
      );
    }
    if (body.username.length > 255) {
      return new Response(
        JSON.stringify({
          message: 'Username must be less than 255 characters',
        }),
        { status: 400 }
      );
    }
    const user = await prisma.account.findUnique({
      where: {
        accUsername: body.username,
      },
    });

    if (!user) {
      return new Response(JSON.stringify({ message: 'User not found' }), {
        status: 404,
      });
    }

    if (!(await bcrypt.compare(body.password, user.accPassword))) {
      return new Response(
        JSON.stringify({ message: 'Incorrect username or password' }),
        { status: 401 }
      );
    }

    const { accPassword, accTemptPassword, ...userWithoutPassword } = user;
    // return new Response(JSON.stringify(userWithoutPassword), { status: 200 });

    const accesstoken = signJwtAccessToken(userWithoutPassword);
    const res = {
      ...userWithoutPassword,
      accesstoken,
    };

    return new Response(JSON.stringify(res), { status: 200 });
  } catch (err: any) {
    return new Response(JSON.stringify({ message: err.message }), {
      status: 500,
    });
  }
}
