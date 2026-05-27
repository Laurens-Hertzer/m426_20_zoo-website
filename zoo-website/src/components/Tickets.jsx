import {useState} from "react";

export default function Tickets() {
    const [n_people, setN_people] = useState(1)
    const [n_kinder, setN_kinder] = useState(0)
    const [day, setDay] = useState(10)
    const [selected_day, setSelected_day] = useState("")
    const [price, setPrice] = useState(0)
    const [zeigeBeleg, setZeigeBeleg] = useState(false);

    const [first_name, setFirst_name] = useState("")
    const [last_name, setLast_name] = useState("")

    function calculate_price() {
        setPrice((n_people * 10 - (n_kinder * 5)) + parseInt(day))
        if (document.querySelector(".n_personen").hidden === true) {
            setPrice(n_people * 8 + parseInt(day))
        }
    }

    function gruppen_berechnung(e) {
        if (e.target.checked) {
            document.querySelector(".n_personen").hidden = true
            let group_n_input = document.createElement("input")
            group_n_input.type = "number"
            group_n_input.min = 6;
            group_n_input.className = "group_n_input"
            group_n_input.onchange = (e) => {
                setN_people(e.target.value)
            }
            document.querySelector(".check_group").after(group_n_input)
        } else {
            document.querySelector(".n_personen").hidden = false
            document.querySelector(".group_n_input").remove()
        }
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            width: '100%'}}>
            <div className="ticket_head_div">
                <h1>Tickets</h1>
                <h2>20% Rabatt pro Person für Gruppen ab 6 Besuchern!!!</h2>
            </div>
            <form>
                <div style={{display: 'flex', gap: '30px'}}>
                    <label htmlFor="n_personen">Anzahl Menschen</label>
                    <select className="n_personen" onChange={(e) => setN_people(e.target.value)} id="n_people" size='5'>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <label>Davon Kinder {n_kinder}</label>
                    <input onChange={(e) => setN_kinder(e.target.value)} type="range" min="0" max={n_people}/>
                </div>
                <select className="week_option" onChange={(e) => {
                    setSelected_day(e.target.options[e.target.selectedIndex].text)
                    setDay(e.target.value)
                }} id="day" size='5' required={true}>
                    <option value={10}>Montag</option>
                    <option value={10}>Dienstag</option>
                    <option value={10}>Mittwoch</option>
                    <option value={10}>Donnerstag</option>
                    <option value={20}>Freitag</option>
                    <option value={20}>Samstag</option>
                    <option value={20}>Sonntag</option>
                </select>
                <label>Mehr als 5 Personen</label>
                <input className="check_group" onChange={(e) => gruppen_berechnung(e)} type="checkbox"/>
                <br/>
                <label htmlFor="first_name">First Name:</label>
                <input onChange={(e) => setFirst_name(e.target.value)} id="first_name"/>
                <label htmlFor="last_name">Last Name:</label>
                <input onChange={(e) => setLast_name(e.target.value)} id="last_name"/>
                <input value={price} disabled/>
                <div className="ticket_buttons">
                    <button onClick={() => calculate_price()} type="button">Preis Berechnen</button>
                    <button onClick={() => setZeigeBeleg(true)} type="button">Beleg</button>
                </div>
            </form>
            <form>
                {zeigeBeleg && (
                    <form style={{ marginTop: '20px', border: '1px solid black', padding: '10px' }}>
                        <h3>Beleg ({first_name} {last_name})</h3>
                        <p>Anzahl Personen: {n_people}</p>
                        <p>Tag des Besuches: {selected_day}</p>
                        <p>Gesamtpreis: {price}</p>
                    </form>
                )}
            </form>
        </div>
    )
}