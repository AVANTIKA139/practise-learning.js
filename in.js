const express = require("express");
const app = express();

app.use(express.json());

app.post("/api/biodata", (req, res) => {
  try {
    console.log(req.body);

    const biodata = {
      FullName: req.body.Name,
      CorrectBirthdate: req.body.Birthdate,
      CorrespondenceAddress: req.body.Address,
      PersonalPhonenumber: req.body.Phonenumber,
      Hobbies: req.body.Hobbies,
      linkedinid: req.body.linkedinid,
      githubid: req.body.githubid,
      email: req.body.email,
    };
    console.log(biodata);

    return res.status(200).json({ success: true, message: "corect biodata" });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log("Server is running at port ${PORT}");
});
