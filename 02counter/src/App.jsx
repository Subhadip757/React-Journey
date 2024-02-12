import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
  let message = ''

  if(counter < 0){
    counter = 0
    message = 'Value cant be less than 0'
  }

  // let counter  = 5

  const addvalue = ()=>{
    // counter = counter + 1
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
  }
  const reomveValue = ()=>{
    setCounter(counter - 1)
  }
  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter Value: {counter}</h2>
    <button onClick={addvalue}> Add value {counter}</button>
    <br />
    <br />
    <button onClick={reomveValue}> decrease value {counter}</button>
    <h2>{message}</h2>
    </>
  )
}

export default App
