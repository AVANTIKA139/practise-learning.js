const express = require("express");
const app = express();

const { connectDatabase } = require("./main/connection/mongo");
const STUDENTID_MODEL = require("./models/studentid");
app.use(express.json());
app.post("/api/studentid", async (req, res) => {
  try {
    console.log(req.body);
    const newobject = {
      name: req.body.name,
      rollno: req.body.rollno,
      branch: req.body.branch,
      dob: req.body.dob,
      address: req.body.address,
    };
    console.log(newobject);

    const studentiddata = new STUDENTID_MODEL(newobject);
    await studentiddata.save();

    return res.json({ success: true, message: "data saved successfully" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: error.messaage });
  }
});

app.get("/api/studentid", async (req, res) => {
  try {
    const studentidData = await studentidmodel.find();
    return res.json({ success: true, data: userData });
  } catch (error) {
    return res.status(401).json({ success: false, error: error.message });
  }
});

const PORT = 5000;
const a = connectDatabase();
console.log(a);

app.listen(PORT, async () => {
  console.log("Server is running at port", PORT);
});
