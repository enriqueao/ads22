import 'reflect-metadata';
import {
    Resolver,
    Query,
    Ctx,
    InputType,
    Field,
} from 'type-graphql'
import { Post } from '../../../db/entities'
import { Context } from '../../../config/context'

@Resolver(Post)
export class PostQuery {

    @Query(() => [Post])
    async allPosts(@Ctx() ctx: Context) {
        return ctx.prisma.post.findMany()
    }
    
}
