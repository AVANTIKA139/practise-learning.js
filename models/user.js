const mongoose = require("mongoose");
// outline,blueprint, model, how should your document looks inside your collection

const userSchema = new mongoose.Schema({
  name: String,
  rollNo: Number,
  Branch: String,
  age: Number,
  isFresher: Boolean,
});

const usermodel = mongoose.model("user", userSchema);
module.exports = usermodel;
