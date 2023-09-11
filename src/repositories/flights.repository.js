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

async function selectFlightsByOrigin(origin) {
  return db.query(
    `SELECT flights."id" AS "id", "originCity"."name" AS "origin", "destinationCity"."name" AS "destination", flights."date", TO_CHAR(flights."date", 'DD-MM-YYYY') AS "date" 
      FROM flights
      JOIN cities AS "originCity" ON "originCity".id = flights.origin
      JOIN cities AS "destinationCity" ON "destinationCity".id = flights.destination
      WHERE "originCity"."name" = $1;`,
    [origin]
  );
}

async function selectFlightsByDestination(destination) {
  return db.query(
    `SELECT flights."id" AS "id", "originCity"."name" AS "origin", "destinationCity"."name" AS "destination", flights."date", TO_CHAR(flights."date", 'DD-MM-YYYY') AS "date" 
    FROM flights
    JOIN cities AS "originCity" ON "originCity".id = flights.origin
    JOIN cities AS "destinationCity" ON "destinationCity".id = flights.destination
    WHERE "destinationCity"."name" = $1;`,
    [destination]
  );
}

async function selectFlightsByDate(biggerDate, smallerDate) {
  return db.query(
    `SELECT flights."id" AS "id", "originCity" ."name" AS "origin", "destinationCity"."name" AS "destination", flights."date", TO_CHAR(flights."date", 'DD-MM-YYYY') AS "formatted_date" 
    FROM flights
    JOIN cities AS  "originCity"  ON  "originCity".id = flights.origin
    JOIN cities AS "destinationCity" ON "destinationCity".id = flights.destination
    WHERE flights."date" BETWEEN $1 AND $2;`,
    [smallerDate, biggerDate]
  );
}

async function selectFlightsByAllParams(
  origin,
  destination,
  smallerDate,
  biggerDate
) {
  return db.query(
    `SELECT flights."id" AS "id", "originCity"."name" AS "origin", "destinationCity"."name" AS "destination", flights."date", TO_CHAR(flights."date", 'DD-MM-YYYY') AS "formatted_date" 
    FROM flights
    JOIN cities AS "originCity" ON "originCity".id = flights.origin
    JOIN cities AS "destinationCity" ON "destinationCity".id = flights.destination
    WHERE "originCity"."name" = $1 AND "destinationCity"."name" = $2 AND flights."date" BETWEEN $3 AND $4;`,
    [origin, destination, smallerDate, biggerDate]
  );
}

async function selectFlights() {
  return db.query(`
    SELECT flights."id" AS "id", "originCity"."name" AS "origin", "destinationCity"."name" AS "destination", flights."date", TO_CHAR(flights."date", 'DD-MM-YYYY') AS "formatted_date" 
    FROM flights
    JOIN cities AS "originCity" ON "originCity".id = flights.origin
    JOIN cities AS "destinationCity" ON "destinationCity".id = flights.destination;
    `);
}

export const flightRepository = {
  findCities,
  createFlight,
  selectFlightsByOrigin,
  selectFlightsByDestination,
  selectFlightsByDate,
  selectFlightsByAllParams,
  selectFlights,
};
