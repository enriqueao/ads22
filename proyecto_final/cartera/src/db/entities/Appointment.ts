import 'reflect-metadata';
import { ObjectType, Field, ID } from 'type-graphql';
import { Contact } from './Contact';

@ObjectType()
export class Appointment {
    @Field((type) => ID)
    id: string
    
    @Field()
    title: string

    @Field((type) => Date, { nullable: false })
    date: Date

    @Field((type) => String, { nullable: true })
    description?: string | null

    @Field((type) => Contact, { nullable: true })
    contact?: Contact | null

    @Field()
    status: string
}