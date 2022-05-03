const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String },
    categoires: { type: String },
    imgProduct: { type: String },
    calories: { type: String },
    price: { type: Number },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("product", productSchema);
