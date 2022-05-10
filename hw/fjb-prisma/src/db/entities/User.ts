import 'reflect-metadata';
import { ObjectType, Field, ID } from 'type-graphql';
import { IsEmail } from 'class-validator';

@ObjectType()
export class User {
    @Field((type) => ID)
    id?: string;

    @Field()
    @IsEmail()
    email: string;
    
    @Field((type) => String, { nullable: true })
    name?: string | null

    @Field((type) => String)
    avatar?: string
}