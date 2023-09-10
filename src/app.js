import express from "express";
import cors from "cors";
import router from "./routes/index.routes.js";
import errorHandlingMiddleware from "./middlewares/errorMiddleware.js";

import "express-async-errors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandlingMiddleware);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
