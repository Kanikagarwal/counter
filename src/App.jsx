import { useState } from 'react'
import "./App.css";
function App() {
  //let counter = 5;
  let[counter,setCount] = useState(()=>{
    let val = prompt("Enter the content value");
    return parseInt(val)||0;
  });
  
  let addValue = ()=>{
    if(counter>0 && counter<20){
      setCount(counter+1);
    }
    
  }

  let decreaseValue = ()=>{
    if(counter>0 && counter<=20){
      setCount(counter-1);

    }
  }
  return (
    <>
      <h1>Hey Everyone!! Let's play...</h1>
      <div>
    
      <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWNjYnJtNW9ydGJsc25kcGxwZG1yZXowbTdjcGR0d2thN3Vpa3N6bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/olr5oi9bxPVeV30Yye/giphy.webp" alt="" />
      </div>
      <h2>Content value: {counter}</h2>
      <button onClick={addValue}>+</button>
      <br />
      <button onClick={decreaseValue}>-</button>
    </>
  )
}

export default App
