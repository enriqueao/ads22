import { NonEmptyArray } from 'type-graphql'
import { ContactMutation } from './contact'
import { AppointmentMutation } from './appointment'
import { NoteMutation } from './note'

export const mutations: NonEmptyArray<Function> = [
    ContactMutation,
    AppointmentMutation,
    NoteMutation
]