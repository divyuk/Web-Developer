// console.log("Hello")
// setTimeout(function(){
//     console.log("Hi there")
// },3000);

// console.log("Bye")



// setInterval(()=>{
//     console.log(Math.random()*6)
// },2000);


let numbers= [1,2,3,4,5,6,7,8,9];

// const odd = numbers.filter(e=> e%2!=0 );

// console.log(odd);



// const say = numbers.every(x => x%2==0)
// console.log(say);

// const final = numbers.reduce(function(acc,curr){
//     return acc+curr
// });

// console.log(final)\



// a =Math.max(...numbers);
// console.log(a);

// const ar = ["hello"]
// console.log(..."hello")


// function s(...nums){
//     return nums.reduce((a,c)=> a+c);
// }

// console.log(s(1,3));

// const names = ["div" , "liv" , "jiv" , "giv"];


// const [gold,silver] = names;

// console.log(gold);


const user = {
    name : "Jhon",
    email : "jh@rmail.com",
    age : 23
};


function dis({name,age}){
    console.log(age);
}

dis(user);