import { db } from "../database/database.connection.js";

async function findCities(origin, destination) {
  return db.query(`SELECT * FROM cities WHERE "id" = $1 OR "id" = $2;`, [
    origin,
    destination,
  ]);
}

async function createFlight(origin, destination, date) {
  return db.query(
    `INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3);`,
    [origin, destination, date]
  );
}

export const flightRepository = { findCities, createFlight };
