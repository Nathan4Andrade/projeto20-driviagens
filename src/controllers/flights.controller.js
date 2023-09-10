import httpStatus from "http-status";
import { errors } from "../errors/errors.js";
import { flightService } from "../services/flights.service.js";

async function registerFlight(req, res) {
  if (!req.body) throw errors.incompleteData();
  await flightService.createFlight(req.body);
  res.sendStatus(httpStatus.CREATED);
}

async function getFlights(req, res) {
  try {
    //await
    res.status(200).send("getFlights");
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}

export const flightsController = { registerFlight, getFlights };
