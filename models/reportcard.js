const mongoose = require("mongoose");
const reportcardSchema = new mongoose.Schema({
  physics: Number,
  maths: Number,
  chemistry: Number,
  biology: Number,
  english: Number,
});
const reportcardmodel = mongoose.model("reportcard", reportcardSchema);
module.exports = reportcardmodel;
