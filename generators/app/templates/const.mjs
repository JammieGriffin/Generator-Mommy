import mysql from 'mysql2';

export const PORT = 3000;

const mysqlConf = {
  host: 'localhost', // 数据库地址
  port: 3306, // mysql服务端口
  user: 'root', // 用户名
  password: 'my pwd', // 密码
  database: 'my db' // 数据库名称
}

export const db = mysql.createConnection(mysqlConf)

