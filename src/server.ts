import { app } from "./app";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const port = 4000;
const database = process.env.DATABASE_CONNECTION;


database
  ? mongoose
      .connect(database)
      .then(() => {
        console.log("mongodb is connected");
      })
      .catch((error) => {
        console.log("mongodb is not connected");
      })
  : console.log("connection string missing");

app.listen(port, () => {
  console.log("Server has started");
});
