import GoogleProviders from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import prisma from "./prisma"


export const authOptions = {
    providers: [
      GoogleProviders({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
    ],
    adapter: PrismaAdapter(prisma),
  }