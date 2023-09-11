function incompleteData() {
  return {
    type: "notFound",
    message: "Dados não são suficientes",
  };
}

function incompleteDates() {
  return {
    type: "unprocessableEntityDate",
    message:
      "Os parâmetros bigger-date e smaller-date devem ser passados juntos.",
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

function manyResults() {
  return {
    type: "manyResults",
    message: "Muitos resultados",
  };
}

function invalidFormatDate(date) {
  return {
    type: "invalidFormatDate",
    message: "As datas devem estar no formato DD-MM-AAAA.",
  };
}

function inconsistentDates() {
  return {
    type: "inconsistentDates",
    message: `A bigger-date deve ser maior ou igual à smaller-date.`,
  };
}

export const errors = {
  incompleteData,
  incompleteDates,
  invalidSchema,
  conflictCity,
  conflictCities,
  invalidDate,
  invalidFormatDate,
  inconsistentDates,
  notFoundCities,
  notFoundPassenger,
  notFoundFlight,
  manyResults,
};
