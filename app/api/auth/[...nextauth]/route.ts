import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // 'credentials' is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'avalidusername',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const res = await fetch('http://localhost:3000/api/signin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password,
          }),
        });

        const user = await res.json();

        if (user.accId) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null or false then the credentials will be rejected
          throw new Error('Wrong username or password');
        }
      },
    }),
  ],
  pages: {
    signIn: '/signIn',
  },
  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      return { ...token, ...user };
    },

    async session({ session, token }: { session: any; token: any }) {
      session.user = token as any;
      return session;
    },
  },
};

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };
