import { Contact } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { MockContext, Context, createMockContext } from '../../config/context';
import { ContactQuery } from '../../resolvers/query/contact';

const contactClass = new ContactQuery();

describe('Contact Query Class', () => {

    let mockCtx: MockContext;
    let ctx: Context;
    let contactId = "";

    beforeEach(() => {
        mockCtx = createMockContext();
        ctx = mockCtx as unknown as Context;
    });

    test('should find a contact by id', async () => {
        const expectContact: Contact = {
            id: '123',
            fullname: 'Albert Einstein',
            birthdate: Date.parse('1879-03-14T00:00:00.000Z'),
            job: 'Physicist',
        };
        mockCtx.prisma.contact.findUnique.mockResolvedValue(expectContact);
        const response = contactClass.contactById(mockCtx, { id: expectContact.id });
        await expect(response).resolves.toEqual(expectContact);
    })
}