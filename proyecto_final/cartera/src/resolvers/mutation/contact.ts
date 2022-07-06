import 'reflect-metadata'
import {
    Resolver,
    Query,
    Ctx,
    InputType,
    Field,
    Mutation,
    Arg,
    FieldResolver,
    Root,
    Int
} from 'type-graphql'
import { Prisma } from '@prisma/client';
import { Contact } from '../../db/entities'
import { Context } from '../../config/context'
import { ContactCreateInput } from './inputs';

@Resolver(Contact)
export class ContactMutation {

    @Mutation((returns) => Contact)
    async createContact(
        @Arg('data') data: ContactCreateInput,
        @Ctx() ctx: Context
    ): Promise<Contact> {
        return ctx.prisma.contact.create({
            data: {
                fullname: data.fullname,
            }
        })
    }

    // deletaDate

    @Mutation((returns) => Contact, { nullable: true })
    async deleteContact(
        @Arg('id', (type) => Int) id: string,
        @Ctx() ctx: Context
    ) {
        return ctx.prisma.contact.delete({
            where: { id, },
        })
    }
}
