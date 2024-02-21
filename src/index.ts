// src/index.js
import express, { Express } from "express";
import dotenv from "dotenv";
import profileSurfaceRoutes from './routes/profileSurfaceRoutes';
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
app.use('/api/v1/calculate-profile-surface', profileSurfaceRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
