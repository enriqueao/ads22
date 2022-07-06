import 'reflect-metadata'
import {
    Resolver,
    Query,
    Ctx,
    InputType,
    Field,
    Mutation,
    Arg,
    Int,
} from 'type-graphql'
import { Appointment } from '../../db/entities'
import { Context } from '../../config/context'
import { AppointmentCreateInput } from './inputs'

@Resolver(Appointment)
export class AppointmentMutation {

    @Mutation((returns) => Appointment)
    async createAppointment(
        @Arg('data') data: AppointmentCreateInput,
        @Arg('contactId') contactId: string,
        @Ctx() ctx: Context,
    ) {
        return ctx.prisma.appointment.create({
            data: {
                title: data.title,
                date: data.date,
                status: data.status,
                contact: {
                    connect: { id: contactId },
                },
            },
        })
    }

    @Mutation((returns) => Appointment, { nullable: true })
    async cancelAppointmentbyId(
        @Arg('id', (type) => Int) id: string,
        @Ctx() ctx: Context,
    ) {
        return ctx.prisma.appointment.update({
            where: { id: id || undefined },
            data: {
                status: 'cancelled',
            },
        })
    }

    @Mutation((returns) => Appointment, { nullable: true })
    async deleteAppointment(
        @Arg('id', (type) => Int) id: string,
        @Ctx() ctx: Context
    ) {
        return ctx.prisma.appointment.delete({
            where: { id, },
        })
    }
}