import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      accId: number;
      accUsername: string;
      accRole: string;
      accStatus: string;
      RegistCenterId: number;
    };
  }
}
