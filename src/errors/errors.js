function incompleteData() {
  return {
    type: "notFound",
    message: "Dados não são suficientes",
  };
}

function invalidSchema(errors) {
  return {
    type: "unprocessableEntity",
    message: errors[0],
  };
}

function conflictCity(city) {
  return {
    type: "conflictCity",
    message: `A cidade ${city} já está cadastrada!`,
  };
}

function conflictCities(city) {
  return {
    type: "conflictCities",
    message: `As cidades de origem e de destino devem ter "id" diferentes.`,
  };
}

function invalidDate(date) {
  return {
    type: "invalidDate",
    message: `A data do voo deve ser posterior à data atual (${date}).`,
  };
}

function notFoundCities() {
  return {
    type: "notFoundCities",
    message: `Insira o "id" de cidades existentes.`,
  };
}
function notFoundPassenger() {
  return {
    type: "notFoundPassenger",
    message: `Insira o "id" de um passageiro existente.`,
  };
}

function notFoundFlight() {
  return {
    type: "notFoundFlight",
    message: `Insira o "id" de voo existente.`,
  };
}

export const errors = {
  incompleteData,
  invalidSchema,
  conflictCity,
  conflictCities,
  invalidDate,
  notFoundCities,
  notFoundPassenger,
  notFoundFlight,
};
