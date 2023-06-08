# React

# Intrduction

React is front end library of javascript which helps in making website faster. It uses the concept of Components to assemble a smaller chunks of the same into big chunk.

We write direct HTML code inside Javascript file and React uses JSX (Javascript Extension) and Babel to internally transforms into JS code. 

- JSX → allows  HTML | Markup to directly written inside JS.
- Babel transforms it into JS Code.

On the highest level sits App Components.

And then we have other Components. To call The Component we use JXS style ⇒  <AnotherComponent/>

```jsx
import "./styles.css";

function AnotherComponent(){
  return <p> This is react Component written by JSX</p>
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <AnotherComponent/>
    </div>
  );
}
```

Individual Component are written in different file.

## JSX

1. Need to have a closing tag.
2. You can only return a single element from component function. Hence its advisable to **wrap** it in div or some tag

```jsx
export default function AnotherComponent() {
  return( 
    <div>
    <h1> JSX </h1>
  <p> This is react Component written by JSX</p>
  </div>  # Wrapped in single div block
  );
}
```

But this is bad everytime you dont want **wrapper** element you still need to put. Therfore use React Fragments. <> ……</>

```jsx
export default function AnotherComponent() {
  return( 
    <>
    <h1> JSX </h1>
  <p> This is react Component written by JSX</p>
  </>
  );
}
```

---

 {…} If something written in this will be treated as Javascript object.

```jsx
export default function AnotherComponent() {
  const data = "This is good!!";
  return (
    <div>
      <h1> JSX </h1>
      <p> This is react Component written by JSX.{data}</p>
    </div>
  );
}
```

---

We do the styling using css. We write the style for each component in separate css file. And wherever we want we import it. Since class is reserved keyword in JS we use className to give the simlar meaning to html element.

```jsx
import "./AnotherComponent.css"
export default function AnotherComponent() {
  const data = "This is good!!";
  return (
    <div>
      <h1> JSX </h1>
      <p className="para"> This is react Component written by JSX.{data}</p>
    </div>
  );
}
```

---