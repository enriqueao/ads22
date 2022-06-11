import 'reflect-metadata';
import { ObjectType, Field, ID } from 'type-graphql';
import { User } from './User';
import { Comment } from './Comment';

@ObjectType()
export class Reaction   {
    @Field((type) => ID)
    id: string

    @Field((type) => User)
    user: User

    @Field((type) => Date)
    createdAt: Date

    @Field((type) => Date)
    updatedAt: Date
}

