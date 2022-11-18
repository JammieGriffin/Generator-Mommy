import express from "express";
import cors from "cors";
import {PORT} from "./const.mjs";
import { useRoutes } from "./src/router/index.mjs";
import { errorHandler } from "./src/middleware/errorHandler.mjs";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin:"*"
  })
);
useRoutes(app);

app.use(errorHandler)
app.listen(PORT,() => {
  console.log("app is running at " + PORT);
})