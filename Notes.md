Jquery is javascript library to faster the process of development.
e.g.

    ```
    document.querySelector("h1")

    jquery("h1") or $("h1") // selects all h1
    ```

```
$("h1").css("color" , yellow); // changes to color yellow
console.log($("h1").css("color")); // prints the current color
```

Since there should be sepration of concern
hence 
$("h1").addClass("big-title"); // where big-title is the class which we add to change which is defined in css.


Manipulating text with jquery
```
$("h1").text("Bye")
$("h1").html(<em>hi</em>)
```

Manipulating attribute

$("a").attr("href" , "https://google.com")


Adding event Listener
```
$("h1").click(function(){
    $("h1").css("color" , "purple")
})
```
