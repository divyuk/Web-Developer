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


// const user = {
//     name : "Jhon",
//     email : "jh@rmail.com",
//     age : 23
// };


// function dis({name,age}){
//     console.log(age);
// }

// dis(user);


// const greet = (name, callback) => {
//     console.log(`Hello, ${name}!`);
//     callback && callback();
//   };
  
//   greet("Alice", greet("Bob", greet("Charlie")));
  









// setTimeout(()=>{
//     document.body.style.backgroundColor = 'red'
//     setTimeout(()=>{
//         document.body.style.backgroundColor = 'orange'
//     setTimeout(()=>{
//         document.body.style.backgroundColor = 'green'

//     }, 1000 )
//     },1000)
// },1000)


// const delayColor = (color, delay , doNext)=>{
//     setTimeout(()=>{
//         document.body.style.backgroundColor=color
//         doNext && doNext();
//     },delay)

// }

// delayColor('red' , 1000 , ()=>{
//     delayColor('green' , 1000 , ()=>{
//         delayColor('yellow' , 1000)
//     })
// });


// const myData = (url)=>{
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//             resolve();
//             console.log("Here is data");
//         },2000)
//     })
// }


// data = myData("Abds");

// data.then(()=>{
//     console.log("It works")
// })





const delayColor = (color , delay)=>{
return new Promise((resolve , reject)=>{
    setTimeout(()=>{
    resolve();
    document.body.style.backgroundColor=color;
    },delay)})

}


// delayColor('red' , 1000)
// .then(()=>delayColor('orange' , 1000))
// .then(()=>delayColor('purple' , 1000))



// async function rainbow(){
//     await delayColor('red' , 1000);
//     await delayColor('orange' , 1000);
//     await delayColor('blue' , 1000);
    
// }

// rainbow()