const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  name1: String,
  age1: Number,
  gender1: String,
  preference1: String,
  name2: String,
  age2: Number,
  gender2: String,
  preference2: String,
});
const ticketmodel = mongoose.model("ticket", ticketSchema);
module.exports = ticketmodel;
