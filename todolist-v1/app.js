const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

let items  = [];

app.get("/" , function(req , res){
    
    var options = { 
        weekday: 'long', 
        month: 'long', 
        day: 'numeric' 
    };
    var today  = new Date();
    datePrint = today.toLocaleDateString("en-US", options)
    res.render('list', {dayoftheweek : datePrint, newItems : items} );

});

app.post("/" , function(req, res){
    let item = req.body.list1;
    items.push(item);
    res.redirect("/");
});

app.listen(3000, function(req, res){
    console.log("Server started on 3000!");
});