import { useState } from 'react'
import './App.css'

function App() {
  // let count = 15;

  let [count, setCount] = useState(15)

  let addValue = () =>{
    if(count < 20){
      setCount(count+1);
    }
  }
  let removeValue = () =>{
    if(count > 0){
      setCount(count-1);
    }
  }

  return (
    <>
      <h1>Choubey or React</h1>
      <h2>Counter: {count}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
