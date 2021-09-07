import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

// Environment variable configuration
dotenv.config();

import "./src/firebase/config/index";
import { routeV1 } from "./src/routes";
import { error } from "./src/middlewares";

const CorsOptions = {
  origin: process.env.ORGINS,
  credentials: true,
  optionSuccessStatus: 200,
};

// App initilization
const app = express();

// Json parser used
app.use(express.json({ limit: "5mb" }));

// Cross Orgin Policy used
app.use(cors(CorsOptions));

// Routes used
app.use("/api/v1", routeV1);

// Error handler use
app.use(error);

// Initial request
app.get("/", (req: Request, res: Response) => {
  res.send("Fundraiser API started");
});

// Server listen
app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
