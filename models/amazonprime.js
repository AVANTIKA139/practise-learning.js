const mongoose = require("mongoose");

const amazonprimeSchema = new mongoose.Schema({
  genre: String,
  search: String,
  duration: Number,
  signinwiththisnumber: Boolean,
});
const amazonprimemodel = mongoose.model("amazonprime", amazonprimeSchema);
module.exports = amazonprimemodel;
