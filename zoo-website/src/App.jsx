import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="welcome_body">
        <span className="welcome_text">
          Zubi schegani
        </span>
        <img className="welcome_image" src={heroImg} />

      </div>
    </>
  )
}

export default App
