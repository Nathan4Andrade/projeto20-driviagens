import httpStatus from "http-status";
import { travelService } from "../services/travels.service.js";
import { errors } from "../errors/errors.js";

export async function postTravel(req, res) {
  const { passengerId, flightId } = req.body;

  if (!passengerId || !flightId) throw errors.incompleteData();

  await travelService.createTravel({ passengerId, flightId });

  res.sendStatus(httpStatus.CREATED);
}
