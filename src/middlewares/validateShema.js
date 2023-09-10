import { errors } from "../errors/errors.js";

export function validateSchema(schema) {
  return (req, res, next) => {
    const validation = schema.validate(req.body, { abortEarly: false });

    if (validation.error) {
      const errors = validation.error.details.map((detail) => detail.message);
      throw errors.invalidSchema(errors);
    }
    next();
  };
}
