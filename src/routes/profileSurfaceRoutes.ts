import express from 'express';
import {
    calculateProfileSurface
} from "../controllers/profileSurfaceController";

const router = express.Router();

router.post('/', calculateProfileSurface);

export default router;