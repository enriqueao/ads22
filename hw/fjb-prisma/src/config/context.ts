import { PrismaClient } from "@prisma/client";
import { User } from "../db/entities"; 
import { Post } from "../db/entities";
import { Reaction } from "../db/entities";

export const prisma = new PrismaClient();

export interface Context {
    prisma: PrismaClient;
    userId?: string;
    jwt?: string;
    user?: User;
    post?: Post;
    reaction?: Reaction;
}

export const context: Context = {
    prisma
}

