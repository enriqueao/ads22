import 'reflect-metadata';
import { ObjectType, Field, ID } from 'type-graphql';
import { User } from './User';
import { Post } from './Post';

@ObjectType()
export class Comment   {
    @Field((type) => ID)
    id: string

    @Field()
    content: string

    @Field((type) => User)
    author: User

    @Field((type) => Post)
    post: Post

    @Field((type) => Date)
    createdAt: Date

    @Field((type) => Date)
    updatedAt: Date
}