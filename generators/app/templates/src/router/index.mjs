import exampleApi from "./example.mjs";
const RoutesConf = [exampleApi];

export const useRoutes = (app) => {
  RoutesConf.forEach((conf) => {
    app.use(conf.path, conf.routers)
  })
}