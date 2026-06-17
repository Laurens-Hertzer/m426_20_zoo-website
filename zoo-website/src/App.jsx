import {useState} from 'react'
import websitelogo from './assets/favicon.png'
import './App.css'
import '../src/css/zoo-zuerich-design.css'
import Menu from './components/Menu.jsx'
import Home from "./components/Home.jsx";
import Tickets from "./components/Tickets.jsx";
import Impressum from "./components/Impressum.jsx";
import Shop from "./components/Shop.jsx";

function App() {

    return (
        <>
            <header>
                <Menu/>
            </header>
            <div>
                <Home/>
                <Tickets/>
                <Shop/>
                <Impressum/>
            </div>
        </>
    )
}

export default App
