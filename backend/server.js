const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const exerciseRouter = require("./routes/exercise");
const userRouter = require("./routes/users");
require("dotenv").config();
//create a express server
const app = express();
//set up the port
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established");
});
//use the routes file
app.use("/exercises", exerciseRouter);
app.use("/users", userRouter);

app.listen(port, () => {
  console.log("Server is running..");
});
