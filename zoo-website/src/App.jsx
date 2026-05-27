import {useState} from 'react'
import websitelogo from './assets/favicon.png'
import './App.css'
import '../src/css/zoo-zuerich-design.css'
import Menu from './components/Menu.jsx'
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
