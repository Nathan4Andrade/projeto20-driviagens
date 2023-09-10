import httpStatus from "http-status";

export default function errorHandlingMiddleware(error, req, res, next) {
  if (error.type === "notFound") {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
  }

  if (error.type === "unprocessableEntity") {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
  }

  if (error.type === "conflictCity") {
    return res.status(httpStatus.CONFLICT).send(error.message);
  }

  if (error.type === "conflictCities") {
    return res.status(httpStatus.CONFLICT).send(error.message);
  }

  if (error.type === "notFoundCities") {
    return res.status(httpStatus.NOT_FOUND).send(error.message);
  }

  if (error.type === "invalidDate") {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
  }

  if (error.type === "notFoundPassenger") {
    return res.status(httpStatus.NOT_FOUND).send(error.message);
  }

  if (error.type === "notFoundFlight") {
    return res.status(httpStatus.NOT_FOUND).send(error.message);
  }

  return res.sendStatus(500);
}
