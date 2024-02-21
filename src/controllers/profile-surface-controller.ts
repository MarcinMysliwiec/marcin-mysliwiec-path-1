import { Request, Response } from "express";
import { calculateWaterFields } from "@services/water-service";

export const calculateProfileSurface = (req: Request, res: Response) => {
  const profile: number[] = req.body.profile;

  if (!profile || !Array.isArray(profile)) {
      return res.status(400).json({ error: 'Invalid profile array' });
  }

  const waterFields = calculateWaterFields(profile);
  return res.json({ waterFields });
};
