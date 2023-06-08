## 1. Data types

JavaScript has 8 Datatypes
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined - Empty value | Just declared not initalized.
6. Null
7. Symbol
8. Object
9. BigInt

The object data type can contain:

1. An object
2. An array
3. A date


## 2. Variables creation

The variable can be created by 
let | var | const.

1. let -> if you want to mutant the variable,declare. Blocked scope
2. const -> constant variable, must be initialized.
3. var - > old way to define variable. Function scoped. With if / else / loops the var behaves like global scope.

To Create variable use `var`. Use camelcase for syntatics.

var foo = 1; // declared properly (locally)

bar = 2; // implied global

window.baz = 3; // global via window object

## 3. String 
Conacatenation is possible

* mystring.length - to count the number of characters.
* mystring.slice(start,end) - returns the string [start,end)
* mystring.toUpperCase()

### Template Strings

use this ``

Also you can use this for `` for regular strings.
You can use this for `` multi line strings.

```
let myvar = 4;
let dis = ` hello ${myvar}` 
```

## 4. Type conversion and Coercion

Conversion : Done by programmer.
Coercion : Done by JS.

* Number() : To convert string to number.
* String() : To convert number to string.

There are 5 falsy values:
0, '', NaN, null, undefined

## 5. Operator

== and === (strict equality)

'18'==18  returns true because  of Coercion.
'18' ===18 return false . Advised to use this.


## 6.  Arrays.

* arr.length
* arr.includes(3)
 
## 7. Functions

```
function myfun(){
    ..
    ..
    ..
}
```

```
const creature = "Common Sea Dragon";
 
function scubaDive(){
    const creature = "Spanish Dancer"; //A type of sea slug
    console.log(creature);
}
 
scubaDive(); // O/P : Spanish Dancer
```

Lexical Scope:
If you have inner function inside a outer function/grand outer function then the inner function has access to variables declared inside the outer functions.

#### 1. Function Expression

const add = function(x,y){
    return x+y;
}
add(3,4)

#### 2. Higher Order Function

Functions that operate on with other functions.
They can accept function as arguments.


```
function callTwice(func){
    func();
    func();
}

function basic(){
    console.log("I am just a Function");
}

callTwice(basic);

```

Now with this you can even return a function.
```
function ranger(min , max){
    return function(num){
        return num>=min && num<=max;
    }
}

const ischild = ranger(0,18);
isChild(6) // o/p : true
```
##### Function as object

```
const myMath={
    PI : 3.149,
    square : function(num){
        return num*num;
    }

    // You can also do like this

    cube(num){
        return num**3;
    }
}

myMath.square(3) or myMath["square"](4)
```
 In JavaScript, when using an arrow function with curly braces, you need to explicitly add a return statement to return a value. However, if you omit the curly braces, the function implicitly returns the expression following the arrow (=>) symbol.

#### 3. Array Methods

1. forEach
```
let numbers= [1,2,3,4,5,6,7,8,9];

numbers.forEach(function(element){
    console.log(element);
})

```

2.map

```
let numbers= [1,2,3,4,5,6,7,8,9];

const double = numbers.map(function(element){
        return element *element;
})

output -> double = [1,4,9,16,25,36,49,64,81]
```

3. Arrow Functions

Arrow Function are used to write function expression easier.

```
const add = function(x,y){
    return x+y;
}


//ARROW

const add = (x,y) =>{
    return x+y;
}
add(3,4);


const printie = ()=>{
    console.log("Hi there");
}


// If you have one args you can remove the paranthesis.

const display = x =>{
    return x+1;
}



// We can do Implicit return with arrow functions. ONLY one single expression is there. One Liner

const even = num =>(
    num%2==0
);

even(4) // return true;

OR

const even = num => num%2===0; 

```

4. setTimeout and setInterval
```
console.log("Hello")
setTimeout(function(){
    console.log("Hi there")
},3000);

console.log("Bye")
```

```
Output of above
Hello
Bye
//after 3 seconds
Hi there
```

```
setInterval(()=>{
    console.log(Math.random()*6)
},2000);

// Every 2 seconds a random number is diplayed.
```

5. Filter

```
let numbers= [1,2,3,4,5,6,7,8,9];

const odd = numbers.filter(e=> e%2!=0 );

console.log(odd); // [ 1, 3, 5, 7, 9 ]

```

6. Some and Every

Returns boolean if condition satisfies

```
const say = numbers.every(x => x%2==0)
console.log(say); // false

in case of some return true.
```

7. Reduce

```
let numbers= [1,2,3,4,5,6,7,8,9];
const final = numbers.reduce(function(acc,curr){
    return acc+curr
} , 0);

console.log(final); 


```

this keyword behaves differently in arrow function compared to regular function.



## 8. New JS Features

#### 1. Default params
```
function(a,b=1){

}
```

#### 2. Spread

```
a1 = Math.max(1,3,65);
console.log(a1)//NaN

Hence use spread.....

a =Math.max(...numbers);
console.log(a);


We can do a copy also using spread.
const arr1 = [1,3,5];
const arr2 = [4,6,8];
const combine = [..arr1 ...arr2] // [1,3,5,4,6,8]


console.log([..."hello"]) //[ 'h', 'e', 'l', 'l', 'o' ]


Simalarly we can do this for objects


{...[2,3,4]} // 0:2,1:3,2:4
```

#### 3. REST and Arguments

```
function s(){
    console.log(arguments);
}

s(1,3); // [Arguments] { '0': 1, '1': 3 }



REST -> makes the arguments behave like array

function s(...nums){
    return nums.reduce((a,c)=> a+c);
}

console.log(s(1,3)); // 4
```


#### 4. Destructuring

```
const names = ["div" , "liv" , "jiv" , "giv"];


const [gold,silver] = names;

console.log(gold); //div


Simalrly we can do it for objects

const user = {
    name : "Jhon",
    email : "jh@rmail.com
    }

const {name} = user // This name should be same as key in the object but if you want different variable

const {name: name2} = user //
Now name2 will be used as variable.



Destructuring Params

function dis({name,age}){
    console.log(age);
}

dis(user); // 23



```

```
Destructuring Example:
const user = {
    name : "Div",
    age : 24,
    work : "Developer"
}

function doing({name}){
    console.log(name);
}

doing(user) // Div
```


## 9. JS Is Single threaded

Javascript is Single threaded!!
So it means it only execute one line of code at a given time.

```
console.log("Hello")
setTimeout(function(){
    console.log("Hi there")
},3000);

console.log("Bye")
```

In case of above code -> setTimeout is a Web API function, meaning when JS sees this function it gives to browser and says to remind me after 3sec and it goes to execute the next line. Browser counts 3 seconds and when its over it hands over to JS to execute it.



## 10. Callback 
It is a function which is passed as an argument and is executed when certain operation finishes or asynchronous operation completes. It allows to define behaviour that should happen after certain task
completes.

```
function fetchData(url , callback){

    setTimeout(()=>{
        callback("this is your data");
    },2000)
}


function displayData(d){
    console.log("DATA...!!!  ---> ", d );
}


fetchData("https://something.com", displayData);
```

## 11. Callback Hell

It refers to problem when there is nesting of callbacks and it really becomes confusing.

```
setTimeout(()=>{
    document.body.style.backgroundColor = 'red'
    setTimeout(()=>{
        document.body.style.backgroundColor = 'orange'
    setTimeout(()=>{
        document.body.style.backgroundColor = 'green'

    }, 1000 )
    },1000)
},1000)
```

```
const delayColor = (color, delay , doNext)=>{
    setTimeout(()=>{
        document.body.style.backgroundColor=color
        doNext && doNext();
    },delay)

}

delayColor('red' , 1000 , ()=>{
    delayColor('green' , 1000 , ()=>{
        delayColor('yellow' , 1000)
    })
});
```

```
Not a example of callback hell
const greet = (name, callback) => {
    console.log(`Hello, ${name}!`);
    callback && callback();
  };
  
  greet("Alice", greet("Bob", greet("Charlie")));
```
Therefore promises comes in picture.

## 11. Promises

It is an object representing eventual completion or failure of an asynchronous operation.

Promise have 3 values
1. Pending
2. Reslved
3. Rejected

So the Promise object which we have, we attach callback to it according the value they recieve using then and catch method.


```
const fakeRequest = (url) =>{
    return new Promise((resolve , reject) =>{
        setTimeout(()=>{
            reject("Rejecting");
        },2000)
    });
};


fakeRequest("/hero/1")
    .then(()=>{
        console.log("Resolved");
    })
    .catch((e)=>{
        console.log("Eroor->" , e)
    })

```



```
const delayColor = (color , delay)=>{
return new Promise((resolve , reject)=>{
    setTimeout(()=>{
    resolve();
    document.body.style.backgroundColor=color;
    },delay)})

}


delayColor('red' , 1000)
.then(()=>delayColor('orange' , 1000))
.then(()=>delayColor('purple' , 1000))
```

## 12. Async and Await

These keywords helps us to write
clean Promises.

```
async myfun(){
    ..
    ..
}

const login = async(user,psd)=>{

}

```

await keyword waits for the promise to get resolved before going forward.


```
async function rainbow(){
    await delayColor('red' , 1000);
    await delayColor('orange' , 1000);
    await delayColor('blue' , 1000);
    
}

rainbow()

```

If a promise is rejected use try catch block!
