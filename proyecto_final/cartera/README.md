# AsistenteInteligente: Aplicación Web para cartera de clientes

## Descripción

AsistenteInteligente es una aplicación que permite a un usuario llevar el registro de sus contactos y las citas que tiene con ellos, además permite añadir notas a cada cita.

### Entidades de dominio
Las entidades consideradas para la fase de MVP son:

* Contact
* Appointment
* Note
* Attachment *

### Mutations:

* El usuario puede crear un contacto
* El usuario puede eliminar un contact
* El usuario puede crear una cita relacionada a un contacto
* El usuario puede marcar como cancelada una cita
* El usuario puede eliminar una cita
* El usuaior puede crear una nota relacionada a una cita
* El usuaior puede eliminar la nota de una cita

### Queries:

* El usuario puede obtener las citas de un contacto
* El usuario puede consultar todos los contactos en su cartera
* El usuario puede obtener los datos de un sólo contacto
* El usuario puede consultar los detalles de un contacto a través de una cita
* El usuario puede consultar los detalles de una cita
* El usuario puede consultar todas sus citas activas
* El usuario puede consultar todas las citas relacionadas a un contacto
* El usuario puede consultar el detalle de una cita a través de una nota
* El usuario puede consultar todas las notas que han sido creadas para una cita

### Diagrama

   ┌────────────┐         ┌────────────┐        ┌───────────────┐
   │ Contact    │         │Appointment │        │Note           │
   │            │         │            │        │               │
   │ id         │         │id          │        │id             │
   │ fullname   │         │title       │        │body           |
   │ birthdate  ├────────►│date        ├───────►┤appointmentId  │
   │ job        │         │description │        │               │
   │            │         │contactId   │        │               │
   │            │         │status      │        │               │
   └────────────┘         └────────────┘        └───────────────┘

