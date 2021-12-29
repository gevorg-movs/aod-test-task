import { Request, Response } from "express";
import AuthService from "./auth.service";

export const register = async (req: Request, res: Response) => {
  try {
    const response = await AuthService.register(req.body);

    return res.status(201).json(response);
  } catch (e: any) {
    return res.status(500).json({
      message: e.message,
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const response = await AuthService.login(req.body);

    return res.status(200).json(response);
  } catch (e: any) {
    return res.status(500).json({
      message: e.message,
    });
  }
};

export const verify = async (req: Request, res: Response) => {
  try {
    const authorizationHeader = req.header("Authorization");

    if (!authorizationHeader) {
      return;
    }

    const accessToken = authorizationHeader.split(" ")[1];

    const user = await AuthService.verify(accessToken);

    return res.status(200).json({ user });
  } catch (e: any) {
    return res.status(500).json({
      message: e.message,
    });
  }
};