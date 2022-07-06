import 'reflect-metadata'
import {
    Resolver,
    Query,
    Arg,
    Ctx,
    FieldResolver,
    Root,
    Int,
} from 'type-graphql'
import { Appointment, Contact } from '../../db/entities';
import { Context } from '../../config/context';

@Resolver(Appointment)
export class AppointmentQuery {

    @FieldResolver()
    contact(
        @Root() appointment: Appointment,
        @Ctx() ctx: Context
    ): Promise<Contact | null> {
        return ctx.prisma.appointment
            .findUnique({
                where: { id: appointment.id, },
            })
            .contact()
    }

    @Query((returns) => Appointment, { nullable: true })
    async appointmentById(
        @Arg('id') id: string,
        @Ctx() ctx: Context
    ) {
        return ctx.prisma.appointment.findUnique({
            where: { id },
        });
    }

    @Query((returns) => [Appointment])
    async allActiveAppointments(
        @Arg('skip', (type) => Int, { nullable: true }) skip: number,
        @Arg('take', (type) => Int, { nullable: true }) take: number,
        @Ctx() ctx: Context,
    ) {
        return ctx.prisma.appointment.findMany({
            where: {
                status: 'active',
            },
            take: take || undefined,
            skip: skip || undefined,
        });
    }

    @Query((returns) => Appointment, { nullable: true })
    async appointmentsByContactId(
        @Arg('contactId') contactId: string,
        @Ctx() ctx: Context
    ) {
        return ctx.prisma.appointment.findMany({
            where: { contactId },
        });
    }
}