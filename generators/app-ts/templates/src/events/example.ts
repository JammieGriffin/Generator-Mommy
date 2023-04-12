import { usePool, useSqlStament } from "../sql";
import { SQLError } from "../types";
import { exec, sqlErr } from "../utils/index.util";

type EventResp<T = any> = Promise<
  [err?: SQLError | null, message?: string, data?: T]
>;

const pool = usePool();
const sql = useSqlStament();

interface User {
  userName: string;
  account: string;
  password: string;
}

export const getUser = async (userId: string): EventResp<User> => {
  const [err, result] = await exec(pool.execute(sql.getUser, [userId]));
  if (err) {
    return [sqlErr(err.message, "error location")];
  }
  return [null, result[0]];
};
