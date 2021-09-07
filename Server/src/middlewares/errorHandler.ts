import { NextFunction, Request, Response } from "express";

export default (
  err: { code: number | 400; message: string },
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(err.code || 400).send({err:true,message:err.message.replace(/firebase:/gi,'').trimStart()});
};
