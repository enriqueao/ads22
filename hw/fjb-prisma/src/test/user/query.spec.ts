import { User } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { MockContext, Context, createMockContext } from "../../config/context";
import { UserQuery } from "../../resolvers/query/user/user";

const userClass = new UserQuery();
const spyUserClass = jest.spyOn(userClass, 'userNameEmail');

describe('User Query Class', () => {

    let mockCtx: MockContext;
    let ctx: Context;
    let userId = "";

    beforeEach(()=>{
        mockCtx = createMockContext();
        ctx = mockCtx as unknown as Context;
    });

    test('should find a user by id', async () => {
        const expectUser: User = {
            id: faker.database.mongodbObjectId(),
            email: faker.internet.email(),
            name: faker.name.findName(),
            createdAt: new Date(),
            updatedAt: new Date()
        };

        mockCtx.prisma.user.findUnique.mockResolvedValue(expectUser);
        const response = userClass.userById(mockCtx, { userId: ""} );
        await expect(response).resolves.toEqual(expectUser);
    })

    test('given an userId When user exist The return a userName with email', async () => {
        const expectUser: User = {
            id: faker.database.mongodbObjectId(),
            email: faker.internet.email(),
            name: faker.name.findName(),
            createdAt: new Date(),
            updatedAt: new Date()
        };
        const expectResponse = `${expectUser.name}-${expectUser.email}`;
        mockCtx.prisma.user.findUnique.mockResolvedValue(expectUser);
        const response = userClass.userNameEmail(mockCtx, { userId: expectUser.id } );
        expect(spyUserClass).toBeCalledTimes(1);
        await expect(response).resolves.toEqual(expectResponse);
    });

    test('should find a user by id', async () => {
        const expectedErrorMsg = `user not found with id ${userId}`
        mockCtx.prisma.user.findUnique.mockResolvedValue(null);
        const response = userClass.userNameEmail(mockCtx, { userId } );
        expect(response).rejects.toThrow(expectedErrorMsg);
    });

})