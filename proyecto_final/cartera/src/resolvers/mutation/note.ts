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
import { Note } from '../../db/entities'
import { Context } from '../../config/context'
import { NoteCreateInput } from './inputs'

@Resolver(Note)
export class NoteMutation {

    @Mutation((returns) => Note)
    async createNote(
        @Arg('data') data: NoteCreateInput,
        @Arg('appointmentId') appointmentId: string,
        @Ctx() ctx: Context,
    ) {
        return ctx.prisma.note.create({
            data: {
                body: data.body,
                appoinment: {
                    connect: { id: appointmentId },
                },
            },
        })
    }

    @Mutation((returns) => Note, { nullable: true })
    async deleteNote(
        @Arg('id', (type) => Int) id: string,
        @Ctx() ctx: Context
    ) {
        return ctx.prisma.note.delete({
            where: { id, },
        })
    }
  }