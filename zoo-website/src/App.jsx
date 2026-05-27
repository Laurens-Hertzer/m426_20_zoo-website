import {useState} from 'react'
import websitelogo from '../public/favicon.png'
import './App.css'
import Home from "./components/Home.jsx";
import Tickets from "./components/Tickets.jsx";
import Impressum from "./components/Impressum.jsx";

function App() {

    return (
        <div>
            <Tickets/>
            <Home/>
            <Impressum/>
        </div>
    )
}

export default App
