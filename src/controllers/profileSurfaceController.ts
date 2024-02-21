import { Request, Response } from "express";
import { calculateWaterFields } from "@services/waterService";

export const calculateProfileSurface = (req: Request, res: Response) => {
  console.log(">>> req: ", req.body);
  const profile: number[] = req.body.profile;

  if (!profile || !Array.isArray(profile)) {
      return res.status(400).json({ error: 'Invalid profile array' });
  }

  const waterFields = calculateWaterFields(profile); // Use the service function
  return res.json({ waterFields });
};
