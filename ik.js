const express = require("express");
const app = express();

app.use(express.json());

app.post("/api/submituser", (req, res) => {});
app.post("/api/login", (req, res) => {
  try {
    let originalPassword = "avantikatiwari18";

    let enteredPassword = "req.body.password";
    if (originalPassword === enteredPassword) {
      return res
        .status(200)
        .json({ success: true, message: "logged in successfully" });
    } else {
      return res
        .status(401)
        .json({ succes: false, message: "please check your password" });
    }

    // console.log(req.body);
    // console.log(req.body.name);
    // console.log(req.body.branch);
    // console.log(req.body.batch);
    // console.log(req.body.lastname);

    // const newobject ={
    //     username : req.body.name,
    //     userbatch : req.body.batch,
    //     userbranch: req.body.branch,
    //     userlastname: req.body.lastname,
    // };
    // console.log(newobject);

    // return res.json({success:true, message: "testing submit api"})
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
