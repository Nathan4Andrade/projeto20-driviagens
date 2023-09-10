import { db } from "../database/database.connection.js";

async function createPassenger(body) {
  const { firstName, lastName } = body;

  return db.query(
    `INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2);`,
    [firstName, lastName]
  );
}

export const passengerRepository = { createPassenger };
