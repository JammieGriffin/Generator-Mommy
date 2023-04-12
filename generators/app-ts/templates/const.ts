import { PoolOptions } from "mysql2/typings/mysql";

export const useMysqlConf = (): PoolOptions => {
  if (process.env.npm_lifecycle_event === "dev") {
    return {
      host: "localhost",
      port: 3306,
      user: "root",
      password: "your_password",
      database: "your_database",
    };
  } else {
    // 非开发环境的 mysql2 配置
    return {};
  }
};
