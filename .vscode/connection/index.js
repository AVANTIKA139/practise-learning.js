const express = require("express");
//const mongoose = require("mongoose");
const app = express();

const { connectDatabase } = require("./mongo");

//const connectDatabase = () => {
//   try {
//     mongoose.connect("mongodb://127.0.0.1:27017").then(() => {
//       console.log("database connected");
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

const a = connectDatabase();
console.log(a);
const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server is running at port", PORT);
});
