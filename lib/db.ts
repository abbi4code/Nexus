import { PrismaClient } from "@prisma/client";

//jsut not to create prisma client on every hot reload
//creating a global this variable

declare global{
    var prisma: PrismaClient | undefined
}

export const db = globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV !== "production") globalThis.prisma = db