import * as env from "dotenv";
import express from "express";
import { init } from "./src/sql/initDB";
import { useRoutes } from "./src/router/index.api";
import cors from "cors";
import errorHandler from "./src/middleware/errorHandler";
env.config({ path: "./.env.dev" });

const initDB = async () => {
  for (let index = 0; index < 5; index++) {
    const res = await init();
    if (!res) {
      console.log("数据库初始化完成");
      break;
    }
  }
};
initDB();

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));
useRoutes(app);
app.use(errorHandler)
app.listen(process.env.SERVICE_PORT, () => {
  console.log("app listening on port " + process.env.SERVICE_PORT);
});
