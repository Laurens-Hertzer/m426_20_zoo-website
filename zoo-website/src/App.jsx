import {useState} from 'react'
import websitelogo from './assets/favicon.png'
import './App.css'
import Menu from './Menu'
import Home from "./components/Home.jsx";
import Tickets from "./components/Tickets.jsx";
import Impressum from "./components/Impressum.jsx";

function App() {

    return (
        <>
            <header>
                <Menu/>
            </header>
            <div>
                <Tickets/>
                <Home/>
                <Impressum/>
            </div>
        </>
    )
}

export default App
