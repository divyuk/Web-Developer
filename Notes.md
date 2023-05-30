## Adding Javascript to Websites

1. Directly under the tag.
    e.g. `<body onload="alert('hello')">`
2. Down under body `<script src = "./index.js"  charset="utf-8">script`

## Selecting HTML elements

1. document.getElementsByTagName("p");
2. document.getElementById("intro");
3. document.getElementsByClassName("intro");
4. document.querySelector("p.intro");
5. document.querySelectorAll("p.intro");

## Separation of the concern | style and script
We want the style to be managed by css. Therefore we add class when we want to apply particular style to be implemented.

`document.querySelector("h1").classList.add("newstyle")`

## To change HTML code

document.querySelector("h1").innerHTML = "Hey"
Remember this givves literally whats there inside the h1 tag

if you want only text then
document.querySelector("h1").textContent

## Manipulating the HTML Attribute

document.querySelector("a").attributes
document.querySelector("a").getAtribute("href")
document.querySelector("a").setAtribute("href" , "www.facebook.com")

## DOM Manipulation with Event Listener

```
// mouse click
var buttonArray = document.querySelectorAll("button")
for(let i = 0; i <buttonArray.length; i++ ){
    var perform = buttonArray[i].addEventListener("click" , function (){
    let key = this.innerHTML; 
    console.log(key);
    makeSound(key);
});
}

// keypress

document.addEventListener("keypress" , function(key){
    makeSound(key.key);

```

## Callback
```
function anotherEventListener(typeofevent , callback){
    
    var eventThat={
        eventType : "keypress",
        key:'p'
    };

    if(eventThat.eventType == typeofevent)
        callback(eventThat);
}

anotherEventListener("keypress", function(event){
    console.log(event);
});
```

Flow:

when the the key pressed anotherEventListener() is called and it creates the object of evenThat and if evenr that created is equal to the typeofevent we were looking callback function is triggered which is function(event) console logging the eventThat object.