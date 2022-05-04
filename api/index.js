const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");

// middle ware
app.use("/images", express.static(path.join(__dirname, "./images/")));
app.use(express.json());
app.use(cors());
dotenv.config();

// my routes
const routeProducts = require("./routes/Product");

// connect to db
mongoose
  .connect(process.env.URL_MONGO)
  .then(() => console.log("db running"))
  .catch((err) => console.log(err.message));

// use the routes
app.use("/api/product", routeProducts);

// server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("server is running on port " + PORT));
