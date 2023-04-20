const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
  moviename: String,
  genre: String,

  actorname: String,
  actressname: String,
});
const moviesmodel = mongoose.model("movies", moviesSchema);
module.exports = moviesmodel;
