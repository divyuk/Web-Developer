const express = require("express");
const app = express();
const port = 3000

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

app.get("/" , function(req, res){
    res.sendFile(__dirname + "/signup.html");
})


app.post("/" , function(req, res){
    const e = req.body.em;
    const p = req.body.pass;

    console.log(p);
});

app.listen(port, function(req , res){
    console.log("Server is running on port 3000");
});