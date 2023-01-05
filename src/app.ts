import bodyParser from "body-parser";
import express from "express";
import { router } from "./routes/routes";
export const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.use("/api", router);
