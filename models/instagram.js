const mongoose = require("mongoose");

const instagramSchema = new mongoose.Schema({
  followers: String,
  following: String,
  likes: Number,
  story: String,
  messages: String,
});

const instagrammodel = mongoose.model("instagram", instagramSchema);
module.exports = instagrammodel;
