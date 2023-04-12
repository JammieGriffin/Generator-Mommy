import { exec } from "../utils/index.util";
import { usePool, useSqlStament } from ".";
const pool = usePool();
const sql = useSqlStament();
export const init = async () => {
  
  const { createDB, createTables } = sql.initDB;
  const conn = await pool.getConnection();
  let isRollback = false;
  conn.beginTransaction();
  const [createDBErr, _res] = await exec(conn.execute(createDB));
  if (createDBErr) {
    conn.rollback();
    isRollback = true;
  }
  await Promise.all(
    Object.keys(createTables).map(async (k: string) => {
      const [err, _res] = await exec(conn.execute(createTables[k]));
      if (err) {
        conn.rollback();
        isRollback = true;
      }
    })
  );
  conn.commit();
  conn.release();
  return isRollback;
};
