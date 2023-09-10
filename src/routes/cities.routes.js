import { Router } from "express";
import { citiesController } from "../controllers/cities.controller.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { citySchema } from "../schemas/citySchema.js";

const citiesRouter = Router();

citiesRouter.post(
  "/cities",
  validateSchema(citySchema),
  citiesController.registerCity
);

export default citiesRouter;
