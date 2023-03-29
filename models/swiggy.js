const mongoose = require("mongoose");

const swiggySchema = new mongoose.Schema({
  dishes: String,
  restaurentstoexplore: String,
  prices: Number,
  cuisine: String,
  signinwiththisnumber: Boolean,
});
const swiggymodel = mongoose.model("swiggy", swiggySchema);
module.exports = swiggymodel;
