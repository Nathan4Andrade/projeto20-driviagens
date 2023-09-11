import { Router } from "express";
import { passengerController } from "../controllers/passengers.controller.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { passengerSchema } from "../schemas/passengerSchema.js";

const passengersRouter = Router();

passengersRouter.post(
  "/passengers",
  validateSchema(passengerSchema),
  passengerController.registerPassenger
);
passengersRouter.get(
  "/passengers/travels",
  passengerController.getPassengerTravels
);

export default passengersRouter;
