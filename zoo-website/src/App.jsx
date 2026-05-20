import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Home from "./components/Home.jsx";
import Tickets from "./components/Tickets.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Tickets/>
  )
}

export default App
