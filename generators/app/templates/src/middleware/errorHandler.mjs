// eslint-disable-next-line no-unused-vars
const errorHandler = (err,_req,res,next) => {
  res.status(err.code).send({message: err.message})
}
export default errorHandler;