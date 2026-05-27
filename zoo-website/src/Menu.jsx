import { useState } from "react"
import { HashRouter, Route, Routes, Link } from "react-router-dom"
import "./Menu.css"
import ZooImg from './assets/Zoo.png'
import DataProtection from "./components/DataProtection.jsx"

export default function Menu() {
    const [open, setOpen] = useState(false)

    const closeMenu = () => setOpen(false)

    return (
        <HashRouter>
            {/*<img src={ZooImg} alt="Zoo" />*/}
            <Link to="/"><img src={ZooImg} alt="Zoo"/></Link>
            <nav className="nav">

                <button
                    className="burger"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>

                <ul className={`menu ${open ? "open" : ""}`}>
                    <li><Link to="/" onClick={closeMenu}>Home Page</Link></li>
                    <li><Link to="/Tickets" onClick={closeMenu}>Tickets bestellen</Link></li>
                    <li><Link to="/News" onClick={closeMenu}>Zoo News</Link></li>
                    <li><Link to="/Impressum" onClick={closeMenu}>Impressum</Link></li>
                    <li><Link to="/Datenschutz" onClick={closeMenu}>Datenschutz</Link></li>
                </ul>
            </nav>

            <Routes>
                {/* Routes kommen hier rein */}
                <Route path="/Datenschutz" element={<DataProtection />} />
            </Routes>
        </HashRouter>
    )
}