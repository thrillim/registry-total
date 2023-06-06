/* This code creates a new user in the database when a POST request is made to the /api/signup endpoint. */

import { prisma } from '../client';
import * as bcrypt from 'bcrypt';

/* Defines the structure of the request body. */
interface RequestBody {
  accUsername: string;
  accPassword: string;
  accRole: string;
  accStatus: string;
  RegistCenterCode: string;
}

/* If the method is not POST, a 405 Method Not Allowed response is automatically returned. */
export async function POST(request: Request) {
  'use server';
  try {
    // Parse the JSON body
    const body = await request.json();

    // Trim whitespace
    body.accUsername = body.accUsername.trim();
    body.accPassword = body.accPassword.trim();
    body.accRole = body.accRole.trim();
    body.accStatus = body.accStatus.trim();
    body.RegistCenterCode = body.RegistCenterCode.trim();

    // Validate the required fields
    if (
      !body.accUsername ||
      !body.accPassword ||
      !body.accRole ||
      !body.accStatus ||
      !body.RegistCenterCode
    ) {
      return new Response(
        JSON.stringify({ message: 'Missing required field(s)' }),
        { status: 400 }
      );
    }

    // Validate the username length
    if (body.accUsername.length > 255) {
      return new Response(
        JSON.stringify({
          message: 'Username must be less than 255 characters',
        }),
        { status: 400 }
      );
    }

    // Username must start with a letter and contain only letters, numbers and underscores
    if (!body.accUsername.match(/^[a-zA-Z][a-zA-Z0-9_]*$/)) {
      return new Response(
        JSON.stringify({
          message:
            'Username must start with a letter and contain only letters, numbers and underscores',
        }),
        { status: 400 }
      );
    }

    // Validate the password length
    if (body.accPassword.length > 255) {
      return new Response(
        JSON.stringify({
          message: 'Password must be less than 255 characters',
        }),
        { status: 400 }
      );
    }

    // Validate the password length and strength using a regex
    // Source: https://uibakery.io/regex-library/password
    if (
      !body.accPassword.match(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
      )
    ) {
      return new Response(
        JSON.stringify({
          message:
            'Password must be at least 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character',
        }),
        { status: 400 }
      );
    }

    // Validate the role
    if (body.accRole !== 'Admin' && body.accRole !== 'User') {
      return new Response(
        JSON.stringify({ message: 'Role must be either Admin or User' }),
        { status: 400 }
      );
    }

    // Validate the status
    if (body.accStatus !== 'Validate' && body.accStatus !== 'Invalidate') {
      return new Response(
        JSON.stringify({
          message: 'Status must be either Validate or Invalidate',
        }),
        { status: 400 }
      );
    }

    // Find the RegistCenterId from the RegistCenterCode
    const registCenter = await prisma.registCenter.findMany({
      where: { centerCode: body.RegistCenterCode },
    });

    if (registCenter.length > 0) {
      // Create a user in the database
      const user = await prisma.account.create({
        data: {
          accUsername: body.accUsername,
          accPassword: await bcrypt.hash(body.accPassword, 10),
          accTemptPassword: body.accPassword,
          accRole: body.accRole,
          accStatus: body.accStatus,
          RegistCenterId: registCenter[0].centerId,
        },
      });

      // Remove the password from the response
      const { accPassword, accTemptPassword, ...userWithoutPassword } = user;

      // Return the user without the password
      return new Response(JSON.stringify(userWithoutPassword), { status: 200 });
    } else {
      return new Response(
        JSON.stringify(
          { message: 'RegistCenterCode not found' },
          { status: 400 }
        )
      );
    }

    // // Create a user in the database
    // const user = await prisma.user.create({
    //   data: {
    //     name: body.name,
    //     email: body.email,
    //     password: await bcrypt.hash(body.password, 10),
    //     phone: body.phone,
    //     career: body.career,
    //     address: body.address,
    //     destination: body.destination,
    //     beginTime: formatDatetime(body.beginTime),
    //     endTime: formatDatetime(body.endTime),
    //     gender: body.gender,
    //     role: body.role,
    //     Plate: body.Plate,
    //     Color: body.Color,
    //     Brand: body.Brand,
    //     Capacity: +body.Capacity,
    //   },
    // });
  } catch (err: any) {
    // Handle errors thrown by Prisma
    if (err.code === 'P2002') {
      return new Response(
        JSON.stringify({
          message: 'This username is already in use by another account',
        }),
        { status: 400 }
      );
    }
    return new Response(JSON.stringify({ message: err.message }));
  }
}
