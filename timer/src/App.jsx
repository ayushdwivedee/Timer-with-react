import { useState,useEffect } from 'react'
import './App.css'
import timer from './components/Timer'
import Timer from './components/Timer'
function App() {
   const [showTimer,setShowtimer]=useState(true)

   function toggleTimer(){
    setShowtimer(!showTimer)
   }

  return (
    <>
            {showTimer ?<Timer/>:"Click below 👇 Button to activate your Timer "}
            <br />
           <button onClick={toggleTimer}>Show or Hide Timer</button> 
    </>
  )
}

export default App
