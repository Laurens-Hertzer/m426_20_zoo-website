import React, {useState} from "react"
import {HashRouter, Route, Routes, Link} from "react-router-dom"
import ZooImg from "../assets/favicon.png"
import DataProtection from "./DataProtection.jsx"
import Impressum from "./Impressum.jsx"
import Tickets from "./Tickets.jsx"
import News from "./News.jsx";
import NewsStoryDetail from "./NewsStoryDetail.jsx";
import Home from "./Home.jsx";
import Map from "./Map.jsx";
import Shop from "./Shop.jsx";
import Registration from "./Registration.jsx";
import ZooReviews from "../components/ZooReviews.jsx";


export default function Menu() {

    const [open, setOpen] = useState(false)
    const closeMenu = () => setOpen(false)

    return (
        <HashRouter>
            <header className="site-header">
                <Link to="/" className="logo-link">
                    <img src={ZooImg} alt="Zoo"/>
                </Link>
                <nav className="nav">
                    <button className="burger" onClick={() => setOpen(!open)}>☰</button>
                    <ul className={`menu ${open ? "open" : ""}`}>
                        <li><Link to="/" onClick={closeMenu}>Home Page</Link></li>
                        <li><Link to="/Tickets" onClick={closeMenu}>Tickets bestellen</Link></li>
                        <li><Link to="/News" onClick={closeMenu}>News</Link></li>
                        <li><Link to="/Impressum" onClick={closeMenu}>Impressum</Link></li>
                        <li><Link to="/Datenschutz" onClick={closeMenu}>Datenschutz</Link></li>
                        <li><Link to="/Karte" onClick={closeMenu}>Karte</Link></li>
                        <li><Link to="/Shop" onClick={closeMenu}>Souvenirs Shop</Link></li>
                        <li><Link to="/Registration" onClick={closeMenu}>Registration</Link></li>
                        <li><Link to="/ZooReviews" onClick={closeMenu}>Reviews</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Datenschutz" element={<DataProtection/>}/>
                    <Route path="/Shop" element={<Shop/>}/>
                    <Route path="/Registration" element={<Registration/>}/>
                    <Route path="/Impressum" element={<Impressum/>}/>
                    <Route path="/Tickets" element={<Tickets/>}/>
                    <Route path="/News" element={<News/>}/>
                    <Route path="/News/:storyId" element={<NewsStoryDetail/>}/>
                    <Route path="ZooReviews" element={<ZooReviews/>}/>
                    <Route path="/Karte" element={<Map />} />
                </Routes>
            </main>
        </HashRouter>
    )
}