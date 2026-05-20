import { HashRouter, Route, Routes, Link } from "react-router-dom";
import "./Menu.css"

export default function Menu(){


    return(
        <>
            <HashRouter>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home Page</Link>
                            <Link to="/Tickets">Tickets bestellen</Link>
                            <Link to="/News">Zoo News</Link>
                            <Link to="/Impressum">Impressum</Link>
                            <Link to="/Datenschutz">Datenschutz</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    {// <Route path="/" element={<HomePage />} />
                        //<Route path="/Tickets" element={<Tickets />}
                        //<Route path="/News" element={<News />}
                        //<Route path="/Tickets" element={<Impressum />}
                        //<Route path="/Datenschutz" element={<Datenschutz />}
                    }
                </Routes>
            </HashRouter>
        </>
    )
}
