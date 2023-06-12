/* This code creates a new user in the database when a POST request is made to the /api/signup endpoint. */
import { getServerSession } from 'next-auth';
import { authOptions } from '../../api/auth/[...nextauth]/route';

import { prisma } from '../client';
import from from '../../../.next/server/app/signIn/page';

/* Defines the structure of the request body. */
interface RequestBody {
  RegistCenterId: string;
  carId: string;
  step1: boolean;
  step2: boolean;
  step3: boolean;
  step4: boolean;
  step5: boolean;
}

/* If the method is not POST, a 405 Method Not Allowed response is automatically returned. */
export async function POST(request: Request) {
  'use server';
  const session = await getServerSession(authOptions);
  if (session.user.accRole !== 'User') {
    return new Response(JSON.stringify({ message: 'You do not have right' }), {
      status: 401,
    });
  } else {
    try {
      // Parse the JSON body
      const body = await request.json();

      // Validate that the request body contains the required fields
      if (Number(body.RegistCenterId) === NaN || Number(body.carId) === NaN) {
        return new Response(
          JSON.stringify({
            message: 'Missing required field(s)',
          }),
          { status: 400 }
        );
      }

      // Check if RegistCenterId is valid
      const center = await prisma.registCenter.findUnique({
        where: {
          centerId: Number(body.RegistCenterId),
        },
      });

      if (!center) {
        return new Response(
          JSON.stringify({ message: 'Invalid RegistCenterId' }),
          { status: 400 }
        );
      }

      // Check if carId is valid
      const car = await prisma.car.findUnique({
        where: {
          carId: Number(body.carId),
        },
      });

      if (!car) {
        return new Response(JSON.stringify({ message: 'Invalid carId' }), {
          status: 400,
        });
      }

      // Check if type of step1, step2, step3, step4, step5 is boolean
      if (
        typeof body.step1 !== 'boolean' ||
        typeof body.step2 !== 'boolean' ||
        typeof body.step3 !== 'boolean' ||
        typeof body.step4 !== 'boolean' ||
        typeof body.step5 !== 'boolean'
      ) {
        return new Response(
          JSON.stringify({
            message: 'Invalid type of step1, step2, step3, step4, step5',
          }),
          { status: 400 }
        );
      }

      let statusInput = 'Thất bại';
      let noteInput = '';
      let periodNameCode = '';
      let periodValue = 0;
      const date = new Date();
      const age = date.getFullYear() - car.namSx;

      let isFirstRegist = true;
      // Check if car is first regist
      const registStatus = await prisma.registStatus.findMany({
        where: {
          carId: Number(body.carId),
          status: 'Thành công',
        },
      });
      if (registStatus.length > 0) {
        isFirstRegist = false;
      }

      if (body.step1 && body.step2 && body.step3 && body.step4 && body.step5) {
        statusInput = 'Thành công';
        if (car.kinhDoanh) {
          periodNameCode += 'allcom';
          if (car.caiTao) {
            periodNameCode += 'reno';
          } else {
            if (age <= 5) {
              periodNameCode += 'to5';
            } else {
              periodNameCode += 'over5';
            }
          }
        } else {
          switch (car.loai) {
            case 'Ô tô con':
              periodNameCode += 'to9';
              periodNameCode += 'nocom';
              if (age <= 7) {
                periodNameCode += 'to7';
              } else if (age <= 20) {
                periodNameCode += 'over7to20';
              } else {
                periodNameCode += 'over20';
              }
              break;
            case 'Ô tô tải':
              periodNameCode += 'specialcar';
              if (age <= 7) {
                periodNameCode += 'to7';
              } else {
                periodNameCode += 'over7';
              }
              break;
          }
        }
        const period = await prisma.validPeriod.findMany({
          where: {
            periodNameCode: periodNameCode,
          },
        });
        if (period.length === 0) {
          console.log('wrong periodNameCode');
        } else {
          if (isFirstRegist && period[0].firstPeriod !== 0) {
            periodValue = period[0].firstPeriod;
          } else {
            periodValue = period[0].fromSecondPeriod;
          }
        }
      } else {
        noteInput += 'Công đoạn';
        if (!body.step1) {
          noteInput += ' 1';
        }
        if (!body.step2) {
          noteInput += ' 2';
        }
        if (!body.step3) {
          noteInput += ' 3';
        }
        if (!body.step4) {
          noteInput += ' 4';
        }
        if (!body.step5) {
          noteInput += ' 5';
        }
      }

      let validUntil = new Date();
      if (periodValue === 0) {
        // Set validUntil to the end of that day (23:59:59)
        validUntil.setHours(23, 59, 59);
      } else {
        // Increase validUntil by periodValue month(s)
        validUntil.setMonth(validUntil.getMonth() + periodValue);
      }

      // Create a registStatus in the database
      const newRegistStatus = await prisma.registStatus.create({
        data: {
          RegistCenterId: Number(body.RegistCenterId),
          carId: Number(body.carId),
          status: statusInput,
          statusCreatedAt: new Date(),
          statusValidUntil: validUntil,
          statusNote: noteInput,
        },
      });

      // Return the user without the password
      return new Response(JSON.stringify(newRegistStatus), {
        status: 200,
      });
    } catch (err: any) {
      return new Response(JSON.stringify({ message: err.message }));
    }
  }
}
