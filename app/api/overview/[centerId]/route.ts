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
      // count the number of successful RegistStatus in the previous month
      // from 1st of last month to 1st of this month
      // if the current month is January, then the previous month is December of the previous year

      function getPreviousMonthAndYear() {
        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();
        let previousMonth = currentMonth - 1;
        let previousYear = currentYear;
        if (previousMonth === -1) {
          previousMonth = 11;
          previousYear--;
        }
        return { month: previousMonth, year: previousYear };
      }

      const previousMonth = await prisma.registStatus.count({
        where: {
          status: 'Thành công',
          RegistCenterId: Number(params.centerId),
          statusCreatedAt: {
            gte: new Date(
              getPreviousMonthAndYear().year,
              getPreviousMonthAndYear().month,
              1
            ),
            lt: new Date(
              getPreviousMonthAndYear().year,
              getPreviousMonthAndYear().month + 1,
              1
            ),
          },
        },
      });

      // count the number of successful RegistStatus in the previous quarter
      // 1st quarter: from 1st of January to 1st of April
      // 2nd quarter: from 1st of April to 1st of July
      // 3rd quarter: from 1st of July to 1st of October
      // 4th quarter: from 1st of October to 1st of January
      // from 1st of last quarter to 1st of this quarter

      // get previous quarter and year of the current date
      function getPreviousQuarterAndYear() {
        const currentQuarter = Math.floor((new Date().getMonth() + 3) / 3);
        const currentYear = new Date().getFullYear();
        let previousQuarter = currentQuarter - 1;
        let previousYear = currentYear;
        if (previousQuarter === 0) {
          previousQuarter = 4;
          previousYear--;
        }
        return { quarter: previousQuarter, year: previousYear };
      }

      const previousQuarter = await prisma.registStatus.count({
        where: {
          status: 'Thành công',
          statusCreatedAt: {
            gte: new Date(
              getPreviousQuarterAndYear().year,
              (getPreviousQuarterAndYear().quarter - 1) * 3,
              1
            ),
            lt: new Date(
              getPreviousQuarterAndYear().year,
              getPreviousQuarterAndYear().quarter * 3,
              1
            ),
          },
        },
      });

      // count the number of successful RegistStatus from the beginning of the year to the current date
      // from 1st of January to current date
      const currentYear = await prisma.registStatus.count({
        where: {
          status: 'Thành công',
          statusCreatedAt: {
            gte: new Date(new Date().getFullYear(), 0, 1),
            lt: new Date(),
          },
        },
      });

      const overview = {
        previousMonth,
        previousQuarter,
        currentYear,
      };

      return new Response(JSON.stringify(overview), { status: 200 });
    } catch (error: any) {
      return new Response(JSON.stringify({ message: error.message }), {
        status: 500,
      });
    }
  } else {
    return new Response(JSON.stringify({ message: 'Unauthorized' }), {
      status: 401,
    });
  }
}
