// auth.ts

import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import User from "../models/User";
import bcrypt from "bcryptjs";
import connectDB from "./mongodb";

interface IUser {
  email: string;
  password: string;
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",

      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentials) {
        try {
          await connectDB();

          const email = credentials?.email as string;
          const password = credentials?.password as string;

          if (!email || !password) {
            throw new Error("Email and password required");
          }


          // Find user
           const user = await User.findOne({ email });

          if (!user) {
            throw new Error("User not found");
          }

          // Compare password
          const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
          );

          if (!isPasswordCorrect) {
            throw new Error("Invalid password");
          }

          return {
            id: user._id.toString(),
            name: user.name,
            email: user.email,
          };
        } catch (error) {
          console.log("AUTH ERROR:", error);
          return null;
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/admin",
  },
  secret: process.env.NEXTAUTH_SECRET,
});