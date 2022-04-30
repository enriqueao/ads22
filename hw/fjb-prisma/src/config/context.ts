import { PrismaClient } from "@prisma/client";
import { User } from "../db/entities"; 

export const prisma = new PrismaClient();

export interface Context {
    prisma: PrismaClient;
    userId?: string;
    jwt?: string;
    user?: User;
}

export const context: Context = {
    prisma
}

