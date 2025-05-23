import express, { Router } from "express";
import mongoose from "mongoose";

import cors from "cors";
import router from "./routeHandler/todoHandler.js";
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use("/todo", router);
const port = 5000;

// database connection with mongoose

mongoose
  .connect("mongodb://localhost/todos")
  .then(() => console.log("connection successed"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World ");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
