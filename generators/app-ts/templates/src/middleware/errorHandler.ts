const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  res.status(err.code).send({ message: err.message, site: err.site });
};

export default errorHandler;
