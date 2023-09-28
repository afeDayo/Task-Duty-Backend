require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

const taskRouter = require("./routes/taskRouter");
const notFound = require("./middlewares/notFound");


app.use(express.json()); //allows access to the req.body in our app

app.use("/api/task", taskRouter);

app.use(notFound);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DataBase Connected");
    app.listen(port, () => {
      console.log(`Server running on PORT ${port}`);
    });
  } catch (error) {
    console.log(error);
    console.log("Unable to connected");
  }
};

start();
