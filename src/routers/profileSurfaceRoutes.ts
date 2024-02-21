import express from 'express';
import {
    calculateProfileSurface
} from "@controllers/profile-surface-controller";

const router = express.Router();

router.post('/', calculateProfileSurface);

export default router;