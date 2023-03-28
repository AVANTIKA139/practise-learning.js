const mongoose = require("mongoose");

const swiggySchema = new mongoose.Schema({
  dishes: String,
  restaurentstoexplore: String,
  prices: Number,
  cuisins: String,
  signinwiththisnumber: Boolean,
});
const swiggymodel = mongoose.swiggy("swiggy", swiggySchema);
module.exports = swiggymodel;
