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

async function selectFlights(origin, destination, biggerDate, smallerDate) {
  if (origin && !destination && !biggerDate && !smallerDate) {
    const flights = await flightRepository.selectFlightsByOrigin(origin);
    return flights.rows;
  }
  if (!origin && destination && !biggerDate && !smallerDate) {
    const flights = await flightRepository.selectFlightsByDestination(
      destination
    );
    return flights.rows;
  }
  if ((!biggerDate && smallerDate) || (biggerDate && !smallerDate))
    throw errors.incompleteData();

  if (biggerDate && smallerDate) {
    const isFormattedBiggerDate = formatDate(biggerDate);
    const isFormattedSmallerDate = formatDate(smallerDate);

    if (!isFormattedBiggerDate || !isFormattedSmallerDate)
      throw errors.invalidFormatDate();

    const biggerDateDesconverted = desconvertDate(biggerDate);
    const smallerDateDesconverted = desconvertDate(smallerDate);

    if (smallerDateDesconverted > biggerDateDesconverted)
      throw errors.inconsistentDates();
  }

  if (!origin && !destination && biggerDate && smallerDate) {
    const flights = await flightRepository.selectFlightsByDate(
      biggerDate,
      smallerDate
    );
    return flights.rows;
  }

  if (origin && destination && biggerDate && smallerDate) {
    const flights = await flightRepository.selectFlightsByAllParams(
      origin,
      destination,
      smallerDate,
      biggerDate
    );
    return flights.rows;
  }

  if (!origin && !destination && !biggerDate && !smallerDate) {
    const flights = await flightRepository.selectFlights();
    return flights.rows;
  }
}

export const flightService = { createFlight };
