import 'reflect-metadata'
import { ID } from 'type-graphql';
import {
    Resolver,
    Query,
    Ctx,
    InputType,
    Field,
    Mutation,
    Arg,
} from 'type-graphql'

@InputType()
export class ContactCreateInput {
    @Field()
    fullname: string;

    @Field({nullable: true})
    job: string;
}

@InputType()
export class AppointmentCreateInput {
    @Field()
    title: string

    @Field()
    date: string

    @Field()
    status: string
}

@InputType()
export class NoteCreateInput {
    @Field()
    body: string
}