const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

// middle ware
app.use("/images", express.static(path.join(__dirname, "./images/")));
app.use(express.json());
app.use(cors());

// my routes
const routeProducts = require("./routes/Product");

// connect to db
mongoose
  .connect(
    "mongodb+srv://hassanprogrammer:hassan1234@hassan-shop.ema8e.mongodb.net/grocery-shop?retryWrites=true&w=majority"
  )
  .then(() => console.log("db running"))
  .catch((err) => console.log(err.message));

// use the routes
app.use("/api/product", routeProducts);

// server
const PORT = process.env.PORt || 5000;
app.listen(PORT, () => console.log("server is running on port " + PORT));
