const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cost: { type: Number, required: true },
  description: { type: String, required: true },
  imageSrc: { type: String, required: true },
  categories: { type: String, required: true },
  ratings: { type: String, required: true },
},{timestamps:true});

module.exports = mongoose.model("products", productSchema);
