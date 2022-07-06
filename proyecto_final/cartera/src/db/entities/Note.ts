import 'reflect-metadata';
import { ObjectType, Field, ID } from 'type-graphql';
import { Appointment } from './Appointment';

@ObjectType()
export class Note {
    @Field((type) => ID)
    id: string

    @Field((type) => String, { nullable: true })
    body: string | null

    @Field((type) => Appointment)
    appointment: Appointment
}