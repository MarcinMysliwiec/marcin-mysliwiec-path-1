import profileSurfaceRoutes from '@routers/profileSurfaceRoutes';
import express, { Application } from 'express';
import { errorHandler } from "@middlewares/errors";
import * as dotenv from 'dotenv'
import validateEnv from '@utils/validate-env'

dotenv.config()

validateEnv();

const app: Application = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to set Content-Type header to application/json
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
});

// Error handling
app.use(errorHandler);

// Route for calculating profile surface
app.use('/api/v1/calculate-profile-surface', profileSurfaceRoutes);

/**
 * Express server instance.
 * @type {Application}
 */
export const server: Application = app;
