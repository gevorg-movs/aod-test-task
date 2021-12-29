import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "config";
import { JwtPayload } from "../modules/auth/auth.types";

export default (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = { message: "Unauthenticated" };
    const authorizationHeader = req.header("Authorization");

    if (!authorizationHeader) {
      return res.status(401).json(response);
    }

    let accessToken = authorizationHeader.split(" ")[1];

    const user = jwt.verify(
      accessToken,
      config.get("jwt.secret")
    ) as JwtPayload;

    if (!accessToken) {
      return res.status(401).json(response);
    }

    req.body.currentUser = user;

    next();
  } catch (e: any) {
    return res.status(500).json({ message: "Invalid access token" });
  }
};