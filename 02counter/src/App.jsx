import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
let [count, setCount] = useState(0);
const increment = () => {
  if(count<=20){
    setCount(count + 1);
  }
};
const decrement = () => {
  if(count>=0){
    setCount(count - 1);
  }
};
  return (
    <>
     <h1>Counter</h1>
     <h2>Counter value : {count}</h2>
      <button onClick={increment}>Increment : {count}</button>
      <br/>
      <button onClick={decrement}>Decrement : {count}</button>
    </>
  )
}

export default App
