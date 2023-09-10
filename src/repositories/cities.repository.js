import { db } from "../database/database.connection.js";

async function findCity(name) {
  return db.query(`SELECT * FROM cities WHERE "name" = $1;`, [name]);
}

async function createCity(name) {
  return db.query(`INSERT INTO cities (name) VALUES ($1);`, [name]);
}

export const cityRepository = { findCity, createCity };
