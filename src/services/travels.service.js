import { errors } from "../errors/errors.js";
import { travelRepository } from "../repositories/travels.repository.js";

async function createTravel({ passengerId, flightId }) {
  const existingPassenger = await travelRepository.existingPassenger(
    passengerId
  );
  const existingFlight = await travelRepository.existingFlight(flightId);

  if (existingPassenger.rowCount === 0) throw errors.notFoundPassenger();
  if (existingFlight.rowCount === 0) throw errors.notFoundFlight();

  return travelRepository.createTravel(passengerId, flightId);
}

export const travelService = { createTravel };
