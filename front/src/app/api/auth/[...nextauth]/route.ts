import { getUser } from "app/service/addUser";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const handler: NextAuthOptions = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ user: { id, name, email, image } }) {
      if (!email) return false;

      await getUser({
        id,
        name: name || "",
        email,
        image,
        username: email?.split("@")[0] || "",
      });
      return true;
    },

    async session({ session }) {
      const user = session?.user;

      if (user) {
        session.user = {
          ...user,
          username: user.email?.split("@")[0] || "",
        };
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
});

export { handler as GET, handler as POST };
