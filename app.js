const mongoose = require("mongoose");


mongoose.connect('mongodb://127.0.0.1:27017/peopleDb');


const personSchema = new mongoose.Schema({
    name: {
     type :   String,
     required : [true, "Give the name"]
    },
    age: Number,
  });
   
  //create a MODEL
  const Person = mongoose.model('Person', personSchema);
   
  //create a DOCUMENT
  const person = new Person({
    name: "Div",
    age: 24
  });
   

  
  const person2 = new Person({
      name: "Raju12",
      age: 20
  })
  const person3 = new Person({
      name: "Bheem",
      age: 23
  })
  const person4 = new Person({
      age: 23
  })

//   Person.insertMany([person2 , person3]);
Person.insertMany([person4]);

  //Save it
//   person.save();


Person.find()
    .then(function (p) {
        mongoose.connection.close();
        console.log(p);
    })
    .catch(function (err) {
        console.log(err);
});