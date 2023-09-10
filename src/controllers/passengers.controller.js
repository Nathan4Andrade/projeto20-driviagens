import httpStatus from "http-status";
import { passengerService } from "../services/passengerService.js";
import { errors } from "../errors/errors.js";

export async function registerPassenger(req, res) {
  if (!req.body) throw errors.incompleteData();
  await passengerService.createPassenger(req.body);
  res.sendStatus(httpStatus.CREATED);
}

export async function getPassengerTravels(req, res) {
  try {
    await //função
    res.status(200).send("getPassenger");
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export const passengerController = { registerPassenger, getPassengerTravels };
