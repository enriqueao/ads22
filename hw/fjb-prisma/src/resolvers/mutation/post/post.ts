import 'reflect-metadata';
import {
    Resolver,
    Query,
    Ctx,
    InputType,
    Field,
    Mutation,
    Arg,
} from 'type-graphql'
import { User } from '../../../db/entities'
import { Post } from '../../../db/entities'
import { Context } from '../../../config/context'


@InputType()
class PostCreateInput {
    @Field()
    title: string;

    @Field()
    content: string;

    @Field()
    published: boolean;

    @Field()
    authorId: number;
}


@Resolver(Post)
export class PostMutation {

    @Mutation((returns) => Post)
    async signupUser(
        @Arg('data') data: PostCreateInput,
        @Ctx() ctx: Context
    ): Promise<Post> {
        return ctx.prisma.post.create({
            data: {
                title: data.title,
                name: data.content,
                published: data.published,
                authorId: data.authorId,
                viewCount: data.viewCount
            }
        })
    }
    
}