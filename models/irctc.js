const mongoose = require("mongoose");

const irctcSchema = new mongoose.Schema({
  modeoftransportation: String,
  fooddelivery: Boolean,
  departuredate: Number,
  from: String,
  to: String,
  search: String,
});

const irctcmodel = mongoose.model("irctc", irctcSchema);
module.exports = irctcmodel;
