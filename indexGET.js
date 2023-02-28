const express = require("express");
const app = express();
app.get("/chats", (req, res) => {
    return res.json({message : "chats have been delivered successfully"})
});

app.get("/notification", (req, res) => {
    return res.json({message : "you got a notification"})
});

app.get("/user", (req,res) => {
    return res.json({message : "users data fetched"})
});

app.get("/posts", (req,res) => {
    return res.json({message : "newer posts are shown"})
});

app.get("/news", (req,res) => {
    return res.json({message : "news data is fetched"})
});



app.get("/subjects", 
(req, res) => {
    let arr = [
        "maths",
        "science",
        "english",
        "computer"

    ];
    if(arr.length >=4){
        return res.json({ data: arr, success : true});
    }
    else{
        return res.json({ error: "data is less than 4" , success : false });
    }
});




// app.get("/posts", (req,res) => {
//     return res.json({message : "newer posts are shown"})
// });

//         return res.json({})
//     }

app.get("/information" , (req, res) => {
    let arr = [
        {
         Name: "avantika tiwari",
         rollnumber : "2021041023",
         college : "MMMUT",
         file :{
            hometown: "varanasi",
            state : "U.P",
         }
        
        },

        {
            Name : "harshita mishra",
            rollnumber : "2021041029",
            college: "MMMUT",
            file: {
                hometown : "lucknow",
                state : "U.P",
            }
        },

        {
            Name: "astha",
            rollnumber: "2021041021",
            college: "MMMUT",
            file: {
                hometown: "chhapra",
                state: "U.P",
            }
           
        },
    ];
    if(arr.length >= 2) {
        return res.json({data : arr, code : 18 });
        
    }
    else{
        return res.status(405).json({ error : "data is less than 2", code: 13});
    }
});
app.get("/trycatch", (req,res) => {
    try {
        let students = [
            { name: "avantika", batch: "25"},
        ];
        return res.json({data : arr, code : 18 });

       

    }
    catch(error) {
        return res.status(400).json({success: false, error: error. message                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    })
}
});

app.get("/api/user/:fid", (req,res) => {
    try{
        let userid = parseInt(req.params.fid);
        let githubusers = [
            {
                id: 1 , name : "avantika", batch: 25, branch : "ece", location: "varanasi"
            },
            {
                id: 2, name : "rani singh", batch : 25, branch : "ece", location : "chandauli" 
            },
            {
                id: 3, name : "sania bansotra", batch : 25, branch : "cse", location : "jammu"
            },
            {
                id: 4, name : "harshita mishra", batch : 25, branch : "ece", location: "lucknow"
            },
            {
                id: 5, name : "astha", batch : 25, branch: "ece", location: "chhapra"
            },
            {
                id: 6, name : "srijal", batch: 25, branch: "ece", location: "gorakhpur"
            },
            {
                id: 7, name : "megha mathur", batch: 25, branch : "ece", location : "bhopal"
            },
            {
                id: 8, name: "princi kardam", batch: 25, branch: "ee", location: "meerut"
            },
            {
                id:9, name: "shreyansh", batch: 25, branch: "ece", location:"gorakhpur"
            }
        ];
        const user = githubusers.find((v) => {
            return v.id === userid;
        });
        if(user) {
            return res.json({ success: true,data : user});

        }
        else{
            return res.json({ success: false, error: "user eith this id not found"});




        }

        
    }
    catch(error){
        return res.status(400).json({ success: false,error : error.message});

    }
});

  


app.listen(8000, () => {
    console.log("Server is running at Port 8000");
});         