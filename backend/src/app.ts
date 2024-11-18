require("dotenv").config();

import express, { Request, Response, NextFunction } from "express";
import logger from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

// create express app
const app = express();

// middleware
app.use(logger("dev")); // add automated logger
app.use(cors()); // add cors
app.use(express.json()); // parse incoming requrest body, req.body
app.use(cookieParser()); // parse request cookies, req.cookies
app.use(express.urlencoded({ extended: false }));

// Routes
// const taskRouter = require('./routes/taskRouter');
// app.use('/task', taskRouter)

// Global Error Handler
app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    status: 500,
    message: "Error processing request",
  };
  // Override default error
  const errorObj = Object.assign(defaultErr, err);

  console.log("Global Error Handler:", errorObj);

  // respond to client
  res.status(errorObj.status).json({ error: errorObj.message });
});

module.exports = app;
