const mongoose = require("mongoose");

const instagramSchema = new mongoose.Schema({
  followers: Number,
  following: Number,
  likes: Number,
  story: String,
  messages: Number,
});

const instagrammodel = mongoose.model("instagram", instagramSchema);
module.exports = instagrammodel;
