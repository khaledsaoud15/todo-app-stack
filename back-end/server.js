const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const todoRouter = require("./controllers/todo.controller");

app.use(cors());
dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 4000;

app.use("/", todoRouter);

app.listen(port, () => {
  console.log("server is running " + port);
});
