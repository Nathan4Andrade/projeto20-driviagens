import { passengerRepository } from "../repositories/passengers.repository.js";

function createPassenger(body) {
  return passengerRepository.createPassenger(body);
}

export const passengerService = { cre1atePassenger };
