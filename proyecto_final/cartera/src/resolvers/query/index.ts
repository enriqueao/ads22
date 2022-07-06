import { NonEmptyArray } from 'type-graphql'
import { ContactQuery } from './contact'
import { AppointmentQuery } from './appointment'
import { NoteQuery } from './note'

export const queries: NonEmptyArray<Function> = [
    ContactQuery,
    AppointmentQuery,
    NoteQuery
]