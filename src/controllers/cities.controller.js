import httpStatus from "http-status";
import { cityService } from "../services/cities.service.js";

async function registerCity(req, res) {
  if (!req.body) throw incompleteDataError();
  await cityService.createCity(req.body);
  res.sendStatus(httpStatus.CREATED);
}

export const citiesController = { registerCity };
