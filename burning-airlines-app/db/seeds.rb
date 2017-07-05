# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Airplane.destroy_all
a1 = Airplane.create name: "757", rows: 20, columns: 4
a2 = Airplane.create name: "747", rows: 40, columns: 6

Flight.destroy_all
f1 = Flight.create flight_no: 23, origin: "Sydney", destination: "Melbourne", date: "2017-07-12"
f2 = Flight.create flight_no: 24, origin: "Sydney", destination: "Washington", date: "2017-07-17"

Reservation.destroy_all
r1 = Reservation.create flight_id: 1, user_id: 1, seat_row: 12, seat_column: 4
r2 = Reservation.create flight_id: 2, user_id: 2, seat_row: 10, seat_column: 3

User.destroy_all
u1 = User.create admin: true, username: "Pauly", password_digest: "chicken"
u2 = User.create admin: false, username: "Jane", password_digest: "chicken"

u1.reservations << r1
u2.reservations << r2

a1.flights << f1
a2.flights << f2

f1.reservations << r1
f2.reservations << r2
