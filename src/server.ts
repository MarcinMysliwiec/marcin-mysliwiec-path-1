import profileSurfaceRoutes from '@routers/profileSurfaceRoutes';
import express, { Request, Response } from 'express';
import app from "./index";

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to set Content-Type header to application/json
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
});

// Custom error handler middleware
app.use((err: Error, req: Request, res: Response) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message || 'Internal Server Error' });
});


app.use('/api/v1/calculate-profile-surface', profileSurfaceRoutes);

/*
  ===============================================================
 Importing the port set on the .env, if the port number is not set on .env or the port is being used by another server
running on the local macchine we are asking the app to use 3000 as the port number 
  ===============================================================
*/
const PORT = process.env.PORT || 3000

//Listing to the app and running it on PORT 5000
app.listen(PORT, async () => {
   console.log(`listning on port ${PORT}`)
})

export default app;
