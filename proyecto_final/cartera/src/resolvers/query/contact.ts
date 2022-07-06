import 'reflect-metadata'
import {
    Resolver,
    Query,
    Ctx,
    InputType,
    Field,
    Arg,
    FieldResolver,
    Root,
} from 'type-graphql'
import { Appointment, Contact } from '../../db/entities'
import { Context } from '../../config/context'

@Resolver(of => Contact)
export class ContactQuery {

    @FieldResolver()
    async appointments(
        @Root() contact: Contact,
        @Ctx() ctx: Context
    ): Promise<Appointment[]> {
        return await ctx.prisma.contact
            .findUnique({ where: { id: contact.id, }, })
            .appointments();
    }

    @Query(() => [Contact])
    async allContact(
        @Ctx() ctx: Context
    ) {
        return ctx.prisma.contact.findMany()
    }

    @Query(() => Contact)
    async contactById(
        @Ctx() ctx: Context,
        @Arg('contactId') id: string,
    ) {
        return ctx.prisma.contact.findUnique({
            where: { id },
            include: { appointments: true }
        });
    }
}