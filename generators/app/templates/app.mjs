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

// 错误处理中间件要在 useRoutes() 之后启用
app.use(errorHandler)

app.use(errorHandler)
app.listen(PORT,() => {
  console.log("app is running at " + PORT);
})