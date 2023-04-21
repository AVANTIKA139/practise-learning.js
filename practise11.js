const express = require("express");
const app = express();

const { connectDatabase } = require("./main/connection/mongo");
const TICKET_MODEL = require("./models/ticket");
app.use(express.json());
app.post("/api/ticket", async (req, res) => {
  try {
    console.log(req.body);
    const newobject = {
      name1: req.body.name1,
      age1: req.body.age1,
      gender1: req.body.gender1,
      preference1: req.body.preference1,
      name2: req.body.name2,
      age2: req.body.age2,
      gender2: req.body.gender2,
      preference2: req.body.preference2,
    };

    console.log(newobject);

    const ticketdata = new TICKET_MODEL(newobject);
    await ticketdata.save();

    return res.json({ success: true, message: "data saved successfully" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: error.messaage });
  }
});

app.get("/api/ticket", async (req, res) => {
  try {
    const ticketData = await ticketmodel.find();
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
