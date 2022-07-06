import { Contact } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { MockContext, Context, createMockContext } from '../../config/context';
import { AppointmentQuery } from '../../resolvers/query/appointment';

const appointmentClass = new AppointmentQuery();

describe('Appointment Query Class', () => {

    let mockCtx: MockContext;
    let ctx: Context;
    let contactId = "";

    beforeEach(() => {
        mockCtx = createMockContext();
        ctx = mockCtx as unknown as Context;
    });

    test('should find an appointment by id', async () => {
        const expectAppointment: Appointment = {
            id: '123',
            title: 'Cita inicial',
            date: Date.parse('1879-03-14T00:00:00.000Z')
        };
        mockCtx.prisma.contact.findUnique.mockResolvedValue(expectAppointment);
        const response = appointmentClass.appointmentById(mockCtx, { id: expectAppointment.id });
        await expect(response).resolves.toEqual(expectAppointment);
    })
}