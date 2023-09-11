import httpStatus from "http-status";
import { passengerService } from "../services/passengers.service.js";
import { errors } from "../errors/errors.js";

async function registerPassenger(req, res) {
  if (!req.body) throw errors.incompleteData();
  await passengerService.createPassenger(req.body);
  res.sendStatus(httpStatus.CREATED);
}

async function getPassengerTravels(req, res) {
  const { name } = req.query;

  if (!req.body) throw errors.incompleteData();
  const travels = await passengerService.selectPassengerTravels(name);
  res.status(200).send(travels);
}

export const passengerController = { registerPassenger, getPassengerTravels };
