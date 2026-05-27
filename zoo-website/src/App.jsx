import {useState} from 'react'
import websitelogo from '../public/favicon.png'
import './App.css'
import Home from "./components/Home.jsx";
import Impressum from "./components/Impressum.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <Home/>
            <Impressum/>
        </div>
    )
}

export default App
