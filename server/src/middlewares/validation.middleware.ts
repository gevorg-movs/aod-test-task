import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export default (req: Request, res: Response, next: NextFunction) => {
  try {
    validationResult(req).throw();
    next();
  } catch (err: any) {
    return res.status(422).json({
      errors: err.mapped(),
    });
  }
};
