const mongoose = require("mongoose");

const studentidSchema = new mongoose.Schema({
  name: String,
  rollno: Number,
  branch: String,
  dob: Number,
  address: String,
});
const studentidmodel = mongoose.model("studentid", studentidSchema);
module.exports = studentidmodel;
