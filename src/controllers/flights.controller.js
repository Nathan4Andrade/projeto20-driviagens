import httpStatus from "http-status";
import { errors } from "../errors/errors.js";
import { flightService } from "../services/flights.service.js";

async function registerFlight(req, res) {
  const { origin, destination, date } = req.body;

  if (!origin || !destination || !date) throw errors.incompleteData()();
  if (origin === destination) throw errors.conflictCities();

  await flightService.createFlight({ origin, destination, date });

  res.sendStatus(httpStatus.CREATED);
}

async function getFlights(req, res) {
  const { origin, destination } = req.query;
  const smallerDate = req.query["smaller-date"];
  const biggerDate = req.query["bigger-date"];

  const flights = await flightService.selectFlights(
    origin,
    destination,
    biggerDate,
    smallerDate
  );
  res.status(200).send(flights);
}

export const flightsController = { registerFlight, getFlights };
