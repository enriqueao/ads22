import { Contact } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { MockContext, Context, createMockContext } from '../../config/context';
import { NoteQuery } from '../../resolvers/query/note';

const noteClass = new NoteQuery();

describe('Note Query Class', () => {

    let mockCtx: MockContext;
    let ctx: Context;
    let contactId = "";

    beforeEach(() => {
        mockCtx = createMockContext();
        ctx = mockCtx as unknown as Context;
    });

    test('should find a note by appointment id', async () => {
        const expectNote: Note = {
            id: '123',
            body: 'Más información´',
        };
        mockCtx.prisma.contact.findUnique.mockResolvedValue(expectNote);
        const response = noteClass.contactById(mockCtx, { id: expectNote.id });
        await expect(response).resolves.toEqual(expectNote);
    })
}