const express = require("express");
const app = express();

app.use(express.json());


app.post("/api/newsdata" , (req, res) => {
    try{

        console.log(req.body);
        
        const newsdata ={
           latestnewstitle : req.body.newstitle,
            trendingnewscategory : req.body.newscategory,
            originalnewsdescription: req.body. newsdescription,
            newsdate: req.body.newsdate,
            updatedsource: req.body.source,
           recentviews: req.body.views,
        };
        console.log(newsdata);
        
        
        
        
        
            return res.status(200).json({ success: true, message: "corect news"});

       
        
        
    } catch(error) {
        return res.status(400).json({ success: false, error:error.message })
    }

});


const PORT  = 8000
app.listen(PORT, () => {
    console.log('Server is running at port ${PORT}');
});         