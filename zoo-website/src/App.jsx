import { useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'
import Menu from './Menu'

function App() {

  return (
    <>
            <Menu />
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
