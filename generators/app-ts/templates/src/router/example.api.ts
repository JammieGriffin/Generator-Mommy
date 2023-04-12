import express, { NextFunction, Request, Response } from "express";
import { RouteConf } from "../types";
import { getUser } from "../events/example";
import { usePool } from "../sql";

const router = express.Router();
const pool = usePool();
const exampleApi: RouteConf = {
  path: "/",
  routers: [
    router.post(
      "/getUser",
      async (req: Request, res: Response, next: NextFunction) => {
        const { userId } = req.query;
        const [err, message, data] = await getUser(userId);
        if (err) {
          next(err);
        }
        res.send({ message, data });
      }
    ),
  ],
};

export default exampleApi;
