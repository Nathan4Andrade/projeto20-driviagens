import dayjs from "dayjs";
import { errors } from "../errors/errors.js";
import { flightRepository } from "../repositories/flights.repository.js";
import { formatDate } from "../utils/formatDate.js";

async function createFlight({ origin, destination, date }) {
  const todayDate = dayjs().format("DD-MM-YYYY");
  const currentDate = formatDate(todayDate);
  const requestedDate = formatDate(date);

  if (requestedDate <= currentDate) throw errors.invalidDate(todayDate);

  if (origin === destination) throw errors.conflictCities();

  const existingCities = await flightRepository.findCities(origin, destination);
  if (existingCities.rowCount <= 1) throw errors.notFoundCities();

  return flightRepository.createFlight(origin, destination, date);
}

export const flightService = { createFlight };
