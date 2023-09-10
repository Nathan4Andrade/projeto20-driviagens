import { errors } from "../errors/errors.js";
import { cityRepository } from "../repositories/cities.repository.js";

async function createCity({ name }) {
  const existingCity = await cityRepository.findCity(name);
  if (existingCity.rowCount > 0) throw errors.conflictCity(name);

  const city = await cityRepository.createCity(name);
  return city;
}

export const cityService = { createCity };
