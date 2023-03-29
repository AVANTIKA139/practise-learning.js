const express = require("express");
//const mongoose = require("mongoose");
const app = express();

const { connectDatabase } = require("./main/connection/mongo");
const SWIGGY_MODEL = require("./models/swiggy");
app.use(express.json());
app.post("/api/swiggydata", async (req, res) => {
  try {
    const newobject = {
      dishes: req.body.Dishname,
      restaurentstoexplore: req.body.Restaurentname,
      prices: req.body.Totalprice,
      cuisine: req.body.Cuisine,
      signinwiththisnumber: req.body.Signinwiththisnumber,
    };
    const swiggydata = new SWIGGY_MODEL(newobject);
    await swiggydata.save();

    return res.json({ success: true, message: "data saved successfully" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: error.messaage });
  }
});

//const connectDatabase = () => {
//   try {
//     mongoose.connect("mongodb://127.0.0.1:27017").then(() => {
//       console.log("database connected");
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// as we know that in acollection in a mongoDB collection , we store similar documents i.e. documects(objects) have same key value//
//  so before storing any document in collection  we need to descirbe those fields which are been used in that collection
// this process is called modelling.
// for one collection, a one model is made in the server, inside models folder
// models folder contain all    the models (for different collection)
const PORT = 5000;
const a = connectDatabase();
console.log(a);

app.listen(PORT, async () => {
  console.log("Server is running at port", PORT);
});
