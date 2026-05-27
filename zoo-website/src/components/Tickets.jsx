import { useState } from "react"
import '../css/Tickets.css'                        // NEU

export default function Tickets() {
    const [n_people, setN_people] = useState(1)
    const [day, setDay] = useState(10)
    const [price, setPrice] = useState(0)

    function calculate_price() {
        setPrice(n_people * 10 + parseInt(day))
    }

    return (
        <div className="ticket-form">          {/* NEU: wrapper */}
            <h1>Tickets</h1>
            <form>
                <p>Anzahl Menschen / Tag</p>
                <div className="selects-row"> {/* NEU: flex-Zeile */}
                    <select onChange={(e) => setN_people(e.target.value)} id="n_people" size='5'>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <select onChange={(e) => setDay(e.target.value)} id="day" size='5'> {/* id-Duplikat fix */}
                        <option value={10}>Montag</option>
                        <option value={10}>Dienstag</option>
                        <option value={10}>Mittwoch</option>
                        <option value={10}>Donnerstag</option>
                        <option value={20}>Freitag/Samstag/Sonntag</option>
                    </select>
                </div>
            </form>
            <label htmlFor="first_name">Vorname:</label>   {/* DE: "First Name" → "Vorname" */}
            <input id="first_name"/>
            <label htmlFor="last_name">Nachname:</label>   {/* DE: "Last Name" → "Nachname" */}
            <input id="last_name"/>
            <input value={price} disabled/>
            <button onClick={() => calculate_price()} type="button" className="btn btn--primary">
                Preis berechnen
            </button>
        </div>
    )
}