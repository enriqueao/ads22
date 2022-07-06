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
import { Note, Appointment } from '../../db/entities';
import { Context } from '../../config/context';

@Resolver(Note)
export class NoteQuery {

    @FieldResolver()
    appointment(
        @Root() note: Note,
        @Ctx() ctx: Context
    ): Promise<Appointment | null> {
        return ctx.prisma.note
            .findUnique({
                where: { id: note.id, },
            })
            .appoinment()
    }

    @Query((returns) => Note, { nullable: true })
    async notesByAppointmentId(
        @Arg('appointmentId') appointmentId: string,
        @Ctx() ctx: Context
    ) {
        return ctx.prisma.note.findMany({
            where: { appointmentId },
        });
    }
}