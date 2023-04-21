const express = require("express");
const app = express();

const { connectDatabase } = require("./main/connection/mongo");
const REPORTCARD_MODEL = require("./models/reportcard");
app.use(express.json());
app.post("/api/reportcard", async (req, res) => {
  try {
    console.log(req.body);
    const newobject = {
      physics: req.body.physics,
      maths: req.body.maths,
      chemistry: req.body.chemistry,
      biology: req.body.biology,
      english: req.body.english,
    };
    console.log(newobject);

    const reportcarddata = new REPORTCARD_MODEL(newobject);
    await reportcarddata.save();

    return res.json({ success: true, message: "data saved successfully" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: error.messaage });
  }
});
app.get("/api/reportcard", async (req, res) => {
  try {
    const userdata = await REPORTCARD_MODEL.find();
    return res.json({ success: true, data: userdata });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: error.message });
  }
});
const PORT = 5000;
const a = connectDatabase();
console.log(a);

app.listen(PORT, async () => {
  console.log("Server is running at port", PORT);
});
