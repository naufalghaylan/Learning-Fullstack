import cors from "cors";
import express from "express";
import morgan from "morgan";
import path from "path";

import { env } from "./config/env";
import { errorHandler, notFoundHandler } from "./middlewares/error.middleware";
import { apiRouter } from "./routes";

export const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static(path.resolve(env.UPLOAD_DIR)));
app.use("/api", apiRouter);

app.use(notFoundHandler);
app.use(errorHandler);
