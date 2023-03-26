const express = require("express");
const app = express();

app.use(express.json());

app.post("/api/submituser", (req, res) => {});
app.post("/api/logininstagram", (req, res) => {
  try {
    let originalpassword = "Webies123@#";
    let enteredpassword = req.body.password;
    console.log(req.body);
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req.body.email)) {
      if (originalpassword === enteredpassword) {
        return res.json({ success: true, message: "logged in successfully" });
      } else {
        return res.json({
          succes: false,
          message: "please check your password",
        });
      }
    } else {
      return res.status(400).json({
        success: false,
        message: "please enter the email id in a proper format",
      });
    }
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log("Server is running at port ${PORT}");
});
