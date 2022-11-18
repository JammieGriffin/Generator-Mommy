export const errorCode = {
  SQLERR: 3306
}
/**
 * @description 错误处理中间件
 * @param  err  错误信息
 * @param  _req 
 * @param  res 
 */
export const errorHandler = (err, _req, res) => {
  let code = 500;
  const errorInfo = err.message.split(":");
  const errorResp = {
    message:"未知错误",
    errMsg:errorInfo[1]
  }
  switch (Number(errorInfo[0])){
    case errorCode.SQLERR:
      errorResp.message = "执行sql语句出现错误"
      break;
    default:
      break;
  }
  res.status(code).send(errorResp)
}


/**
 * @description 捕获 sql 执行错误
 * @param message sql报错信息
 */
export const catchSQLError = (message) => {
  return new Error(`${errorCode.SQLERR}:${message}`);
}