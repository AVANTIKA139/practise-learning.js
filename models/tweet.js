const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema({
  tweet: String,
  tweetphoto: String,
  likes: Number,
  comments: Number,
  tweetedBy: String,
});

const tweetModel = mongoose.Model("tweet", tweetSchema);
module.exports = tweetModel;
