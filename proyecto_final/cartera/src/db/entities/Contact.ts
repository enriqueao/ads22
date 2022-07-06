import 'reflect-metadata';
import { ObjectType, Field, ID } from 'type-graphql';
import { Appointment } from './Appointment';

@ObjectType()
export class Contact {
    @Field((type) => ID)
    id: string

    @Field((type) => String, { nullable: true })
    fullname: string | null

    @Field((type) => String, { nullable: true })
    job?: string | null

    @Field((type) => Date, { nullable: true })
    birthdate?: Date | null

    @Field((type) => Appointment)
    appointments?: Appointment[]
}