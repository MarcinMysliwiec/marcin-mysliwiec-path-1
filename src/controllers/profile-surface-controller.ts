import { Request, Response } from "express";
import { calculateWaterFields } from "@services/water-service";

/**
 * Calculates the profile surface based on the provided profile array.
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @returns {Response} - Express response object.
 */
export const calculateProfileSurface = (req: Request, res: Response): Response => {
  const profile: number[] = req.body.profile;

  if (!profile || !Array.isArray(profile)) {
      return res.status(400).json({ error: 'Invalid profile array' });
  }

  const waterFields: number = calculateWaterFields(profile);
  return res.json({ waterFields });
};
