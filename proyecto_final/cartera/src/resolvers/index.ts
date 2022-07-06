import { ContactMutation } from './mutation/contact'
import { AppointmentMutation } from './mutation/appointment'
import { NoteMutation } from './mutation/note'

export const resolvers = [
    ContactMutation,
    AppointmentMutation,
    NoteMutation,
]