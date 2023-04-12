import { RouteConf } from "../types";
import type { Express } from "express";
import exampleApi from "./example.api";
const RouteConfs: RouteConf[] = [exampleApi];

export const useRoutes = (app: Express) => {
  RouteConfs.forEach((conf) => {
    app.use(conf.path, conf.routers);
  });
};
