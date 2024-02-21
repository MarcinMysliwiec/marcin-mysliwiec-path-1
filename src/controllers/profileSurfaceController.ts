import { Request, Response } from "express";

export const calculateProfileSurface = (req: Request, res: Response) => {
  console.log(">>> req: ", req);
  res.send("Hello World");
};
