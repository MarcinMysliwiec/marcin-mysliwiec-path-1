// src/index.js
import * as dotenv from 'dotenv'
import express from 'express'
import validateEnv from '@utils/validateEnv'

//App Varaibles 
dotenv.config()

validateEnv();

//intializing the express app 
const app = express();

module.exports = app
