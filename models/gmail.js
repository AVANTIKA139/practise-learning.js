const mongoose = require("mongoose");

const gmailSchema = new mongoose.Schema({
  searchinmails: String,
  alllabels: String,
  wanttoaddanotheraccount: Boolean,
});

const gmailmodel = mongoose.model("gmail", gmailSchema);
module.exports = gmailmodel;
