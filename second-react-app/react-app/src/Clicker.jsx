function mybuttonfun(){
    alert("This is clicked!")
}
function handleForms(event) {
    event.preventDefault(); // Prevents form submission
    const formElement = event.target; // Access the form element
  
    // Access the value of an input field by its name
    const inputValue = formElement.inputName.value;
  
    console.log("This is " , inputValue);
    alert("Form submitted");
  }
export default function Clicker(){
    return(
        <>
        <button onClick={mybuttonfun}>Click</button>
        <form >
            <button onSubmit={handleForms}> Submit </button>
        </form>
        </>
    )
}