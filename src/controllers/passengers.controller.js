import httpStatus from "http-status";
import { passengerService } from "../services/passengers.service.js";
import { errors } from "../errors/errors.js";

async function registerPassenger(req, res) {
  if (!req.body) throw errors.incompleteData();
  await passengerService.createPassenger(req.body);
  res.sendStatus(httpStatus.CREATED);
}

async function getPassengerTravels(req, res) {
  try {
    //await
    res.status(200).send("getPassenger");
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}

export const passengerController = { registerPassenger, getPassengerTravels };
