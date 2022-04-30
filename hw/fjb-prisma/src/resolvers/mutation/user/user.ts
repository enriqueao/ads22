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
import { Context } from '../../../config/context'

@InputType()
class UserCreateInput {
    @Field()
    email: string;

    @Field()
    name: string;
}


@Resolver(User)
export class UserMutation {

    @Mutation((returns) => User)
    async signupUser(
        @Arg('data') data: UserCreateInput,
        @Ctx() ctx: Context
    ): Promise<User> {
        return ctx.prisma.user.create({
            data: {
                email: data.email,
                name: data.name
            }
        })
    }
}
