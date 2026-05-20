import { useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

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
