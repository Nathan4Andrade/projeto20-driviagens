import { errors } from "../errors/errors.js";
import { passengerRepository } from "../repositories/passengers.repository.js";

function createPassenger(body) {
  return passengerRepository.createPassenger(body);
}

async function selectPassengerTravels(name) {
  if (!name) {
    const travels = await passengerRepository.selectPassengerTravels();
    if (travels.length >= 10) throw manyResultsError();
    return travels.rows;
  } else {
    const travels = await passengerRepository.selectPassengerTravelsbyName(
      name
    );
    if (travels.length >= 10) throw errors.manyResults();
    return travels.rows;
  }
}

export const passengerService = { createPassenger, selectPassengerTravels };
