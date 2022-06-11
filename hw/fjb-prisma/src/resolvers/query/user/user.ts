import 'reflect-metadata';
import {
    Resolver,
    Query,
    Ctx,
    InputType,
    Field,
} from 'type-graphql'
import { User } from '../../../db/entities'
import { Context } from '../../../config/context'

@Resolver(User)
export class UserQuery {

    @Query(() => [User])
    async allUsers(
        @Ctx() ctx: Context
    ) {
        return ctx.prisma.user.findMany()
    }

    @Query(() => User)
    async userById(
        @Ctx() ctx: Context,
        params: { userId: string }
    ) {
        return ctx.prisma.user.findUnique({
            where: { id: params.userId }
        })
    }    

    @Query(() => String)
    async userNameEmail(
        @Ctx() ctx: Context,
        params: { userId: string }
    ) {
        const user =  await ctx.prisma.user.findUnique({
            where: { id: params.userId }
        });

        if(!user){
            throw new Error(`user not found with id ${params.userId}`)
        }

        return `${user.name}-${user.email}`
    }  
}
