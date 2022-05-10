import 'reflect-metadata';
import {
    Resolver,
    Query,
    Ctx,
    InputType,
    Field,
} from 'type-graphql'
import { Reaction } from '../../../db/entities'
import { Context } from '../../../config/context'

@Resolver(Reaction)
export class ReactionQuery {

    @Query(() => [Reaction])
    async allReactions(@Ctx() ctx: Context) {
        return ctx.prisma.reaction.findMany()
    }
    
}