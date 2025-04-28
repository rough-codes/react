import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [counter, setCounter]= useState(10)

  //let counter = 15

  const addValue = () => {
    if(counter<=19){
      console.log("clicked", Math.random());
    setCounter(counter + 1)
    //counter = counter + 1 ;
    }
   
  }

  const removeValue = () => {
     if(counter > 0){
      setCounter(counter - 1);
      console.log("clicked", Math.random());
     }
     
  }
  
  return (
    <>
        <h1>my react</h1>
        <h2>counter value: {counter}</h2>
        
        <button
        onClick={addValue}
        >Add value {counter}</button>
        <br/>
        <button
        onClick={removeValue}>Remove value {counter}</button>
        <p>footer: {counter} </p>
    </>
  )
}

export default App
