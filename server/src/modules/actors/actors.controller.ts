import { Request, Response } from "express";
import ActorsService from "./actors.service";

export const getAllActors = async (req: Request, res: Response) => {
  try {
    const actors = await ActorsService.getAll();

    return res.json({
      actors,
    });
  } catch (e: any) {
    return res.status(500).json({
      message: e.message,
    });
  }
};

export const showActor = async (req: Request, res: Response) => {
  try {
    const actor = await ActorsService.show(req.params.actorId);

    return res.json({
      actor,
    });
  } catch (e: any) {
    return res.status(500).json({
      message: e.message,
    });
  }
};