import express, { Router, Request, Response } from 'express';
import { calculateProfileSurface } from "@controllers/profile-surface-controller";

const router: Router = express.Router();

/**
 * POST endpoint to calculate profile surface.
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @returns {void}
 */
router.post('/', (req: Request, res: Response): void => {
    calculateProfileSurface(req, res);
});

export default router;
