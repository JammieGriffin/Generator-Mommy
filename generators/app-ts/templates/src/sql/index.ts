import mysql from "mysql2";
import { useMysqlConf } from "../../const";
const mysqlConf = useMysqlConf();
export const usePool = () => {
  const pool = mysql.createPool(mysqlConf);
  return pool.promise();
};
export const useSqlStament = (): { [key: string]: any } => {
  return {
    getUser: "select * from `user` where user_id = ?",
    initDB: {
      createDB: ``,
      createTables: {},
    },
  };
};
