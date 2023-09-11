import { Router } from "express";
import { postTravel } from "../controllers/travels.controller.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { travelSchema } from "../schemas/travelSchema.js";

const travelsRouter = Router();

travelsRouter.post("/travels", validateSchema(travelSchema), postTravel);

export default travelsRouter;
