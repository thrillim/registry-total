/* This code creates a new user in the database when a POST request is made to the /api/signup endpoint. */
import { getServerSession } from 'next-auth';
import { authOptions } from '../../api/auth/[...nextauth]/route';

import { prisma } from '../client';
import * as bcrypt from 'bcrypt';

/* Defines the structure of the request body. */
interface RequestBody {
  centerCode: string;
  centerName: string;
  centerAddress: string;
  centerHotline: string;
  centerEmail: string;
  centerManager: string;
  centerStatus: string;
  centerProvince: string;
}

/* If the method is not POST, a 405 Method Not Allowed response is automatically returned. */
export async function POST(request: Request) {
  'use server';
  const session = await getServerSession(authOptions);
  if (session.user.accRole !== 'Admin') {
    return new Response(JSON.stringify({ message: 'You do not have right' }), {
      status: 401,
    });
  } else {
    try {
      // Parse the JSON body
      const body = await request.json();

      // Trim whitespace
      body.centerCode = body.centerCode.trim();
      body.centerName = body.centerName.trim();
      body.centerAddress = body.centerAddress.trim();
      body.centerHotline = body.centerHotline.trim();
      body.centerEmail = body.centerEmail.trim();
      body.centerManager = body.centerManager.trim();
      body.centerProvince = body.centerProvince.trim();

      // Validate the required fields
      if (
        !body.centerCode ||
        !body.centerName ||
        !body.centerAddress ||
        !body.centerHotline ||
        !body.centerEmail ||
        !body.centerManager ||
        !body.centerProvince
      ) {
        return new Response(
          JSON.stringify({ message: 'Missing required field(s)' }),
          { status: 400 }
        );
      }

      // Validate the username length
      if (body.centerCode.length > 255) {
        return new Response(
          JSON.stringify({
            message: 'centerCode must be less than 255 characters',
          }),
          { status: 400 }
        );
      }

      // Username must start with a letter and contain only letters, numbers and underscores
      if (!body.centerCode.match(/^[a-zA-Z0-9][a-zA-Z0-9_]*$/)) {
        return new Response(
          JSON.stringify({
            message:
              'centerCode must start with a letter or number and contain only letters, numbers and underscores',
          }),
          { status: 400 }
        );
      }

      // Validate the centerEmail
      if (body.centerEmail.length > 255) {
        return new Response(
          JSON.stringify({
            message: 'centerEmail must be less than 255 characters',
          }),
          { status: 400 }
        );
      }

      // Source: https://uibakery.io/regex-library/email
      if (
        !body.centerEmail.match(
          /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
        )
      ) {
        return new Response(JSON.stringify({ message: 'Invalid email' }), {
          status: 400,
        });
      }

      // Validate the status
      if (typeof body.centerStatus !== 'boolean') {
        return new Response(
          JSON.stringify({
            message: 'Status must be boolean type',
          }),
          { status: 400 }
        );
      }

      // Create a user in the database
      const center = await prisma.registCenter.create({
        data: {
          centerCode: body.centerCode,
          centerName: body.centerName,
          centerAddress: body.centerAddress,
          centerHotline: body.centerHotline,
          centerEmail: body.centerEmail,
          centerManager: body.centerManager,
          centerProvince: body.centerProvince,
          centerStatus: body.centerStatus,
        },
      });

      // Return the user without the password
      return new Response(JSON.stringify(center), {
        status: 200,
      });
    } catch (err: any) {
      // Handle errors thrown by Prisma
      if (err.code === 'P2002') {
        return new Response(
          JSON.stringify({
            message: 'This centerCode is already in use',
          }),
          { status: 400 }
        );
      }
      return new Response(JSON.stringify({ message: err.message }));
    }
  }
}
