const express = require("express");
const app = express();

app.use(express.json());

app.post("/api/submituser",(req, res) => {
    try{
        // console.log(req.body);
        // console.log(req.body.name);
        // console.log(req.body.branch);
        // console.log(req.body.batch);
        // console.log(req.body.lastname);

        const newobject ={
            username : req.body.name,
            userbatch : req.body.batch,
            userbranch: req.body.branch,
            userlastname: req.body.lastname,
        };
        console.log(newobject);

        return res.json({success:true, message: "testing submit api"})

    } catch(error) {
        return res.status(400).json({ success: false, error:error.message })
    }

});


const PORT = 8000
app.listen(PORT, () => {
    console.log('Server is running at port ${PORT}');
});         