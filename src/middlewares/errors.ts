import { NextFunction, Request, Response } from "express";

/**
 * Error handler middleware.
 * @param {Error} err - The error object.
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @param {NextFunction} next - Express next function.
 * @returns {void}
 */
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
  console.error(err);
  res.status(500).send({ errors: [{ message: "Something went wrong" }] });
};
