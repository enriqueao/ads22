import { Contact } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { MockContext, Context, createMockContext } from '../../config/context';
import { ContactQuery } from '../../resolvers/query/contact';

const userClass = new ContactQuery();

describe('Contact Query Class', () => {

    let mockCtx: MockContext;
    let ctx: Context;
    let userId = "";

    beforeEach(() => {
        mockCtx = createMockContext();
        ctx = mockCtx as unknown as Context;
    });

    test('should find a contact by id', async () => {
        const expectContact: Contact = {
            id: faker.database.mongodbObjectId(),
            fullname: faker.internet.fullname(),
        };
        mockCtx.prisma.contact.findUnique.mockResolvedValue(expectContact);
        const response = userClass.contactById(mockCtx, { id: expectContact.id });
        await expect(response).resolves.toEqual(expectContact);
    })
}