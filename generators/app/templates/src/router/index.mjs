const RoutesConf = [];

export const useRoutes = (app) => {
  RoutesConf.forEach((conf) => { 
    app.use(conf.path,conf.router)
  })
}