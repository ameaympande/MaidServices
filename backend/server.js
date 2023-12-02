const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 3000;
const mongoUrl = process.env.MONGO_URL;

// All routes
const authRoutes = require("./routes/authRoutes")
const userRoutes = require("./routes/User")

app.use(express.json());
const corsOpts = {
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOpts));

mongoose.set("strictQuery", false);
mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("connected to MongoDB");

  
    app.use("/",authRoutes );
    app.use("/", userRoutes );

   

    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
