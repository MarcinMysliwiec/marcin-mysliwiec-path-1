// src/index.js
import * as dotenv from 'dotenv'
import express from 'express'
import validateEnv from '@utils/validate-env'

dotenv.config()

validateEnv();

const app = express();

export default app;
