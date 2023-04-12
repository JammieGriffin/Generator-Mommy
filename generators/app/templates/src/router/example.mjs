import express from "express";
import { execSQL } from "../utils/index.mjs";
import { usePool } from "../../const.mjs";
const router = express.Router();
const pool = usePool();
const exampleApi = {
  path: "/example",
  routers: [
    router.get("/user", async (req, res, next) => {
      const { userId } = req.query;
      const [err, result, _fields] = await execSQL(pool.execute("select * from `user` where `user_id` = ?", [userId]))
      if (err) {
        next({ message: err.message, code: 500 });
      }
      res.send({ data: result });
    })
  ]
}

export default exampleApi;