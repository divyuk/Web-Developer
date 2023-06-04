const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/' , function(request , response){
    response.sendFile(__dirname + '/index.html');
});

// Route handler
app.post('/', (req, res) => {
    const weight = parseFloat(req.body.n1);
    const height = parseFloat(req.body.n2);
  
    // Calculating BMI
    const bmi = weight / (height * height);
  
    res.send(`Your BMI is: ${bmi.toFixed(2)}`);
  });

app.listen(3000 ,function(){
    console.log("Server started on port 3000!")
});