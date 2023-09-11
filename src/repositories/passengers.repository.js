import { db } from "../database/database.connection.js";

async function createPassenger(body) {
  const { firstName, lastName } = body;

  return db.query(
    `INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2);`,
    [firstName, lastName]
  );
}

async function selectPassengerTravels() {
  return db.query(`SELECT passengers."firstName" || ' ' || passengers."lastName" AS passenger, CAST(COUNT(travels."passengerId") AS INTEGER) AS travels
      FROM passengers
      LEFT JOIN travels ON passenger.id = travels."passengerId"
      GROUP BY passenger
      ORDER BY ravels DESC LIMIT 10;`);
}

async function selectPassengerTravelsbyName(name) {
  return db.query(
    `SELECT passengers."firstName" || ' ' || passengers."lastName" AS passenger, CAST(COUNT(travels."passengerId") AS INTEGER) AS travels
      FROM passengers
      LEFT JOIN travels ON passengers.id = travels."passengerId"
      WHERE passengers."firstName" || ' ' || passengers."lastName" ILIKE $1
      GROUP BY passenger
      ORDER BY travels DESC LIMIT 10;`,
    [`%${name}%`]
  );
}

export const passengerRepository = {
  createPassenger,
  selectPassengerTravels,
  selectPassengerTravelsbyName,
};
