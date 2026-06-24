import pandas_img from '../assets/pandas.png'
import bottle from '../assets/bottle.jpeg'
import pizza from '../assets/pizza.jpg'
import {useState} from "react";

export default function Shop() {
    const [maxPrice, setMaxPrice] = useState(25);
    const [category, setCategory] = useState("alles")

    const ProductCard = ({image, name, price}) => {
        return (
            <div style={{
                fontFamily: 'sans-serif',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                padding: '16px',
                maxWidth: '250px',
                textAlign: 'center',
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                backgroundColor: '#fff'
            }}>
                <img
                    src={image}
                    alt={name}
                    style={{
                        height: '256px',
                        borderRadius: '4px',
                        objectFit: 'cover',
                        width: '256px'
                    }}
                />
                <span style={{
                    display: 'block',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    margin: '12px 0 16px',
                    color: '#333'
                }}>
        {name} - {price}
      </span>
                <button
                    type="button"
                    style={{
                        width: '100%',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        border: 'none',
                        padding: '10px',
                        fontWeight: 'bold',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Kaufen
                </button>
            </div>
        );
    };

    return (
        <>
            <h1>Shop</h1>
            <div style={{marginBottom: '20px'}}>
                <label style={{display: 'block', marginBottom: '8px'}}>Max. Preis: {maxPrice} CHF</label>
                <input type="range" min="1" max="200" value={maxPrice} onChange={e => setMaxPrice(e.target.value)}/>
                <label style={{display: 'block', marginBottom: '8px'}}>Kategorie</label>
                <select onChange={(e) => setCategory(e.target.value)}>
                    <option value={"alles"}>Alles</option>
                    <option value={"spielzeuge"}>Spielzeuge</option>
                    <option value={"flaschen"}>Flaschen</option>
                    <option value={"essen"}>Essen</option>
                </select>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', gap: '12px'}}>
                {(category==="alles" || category==="spielzeuge") && maxPrice >= 9.95 && <ProductCard image={pandas_img} name="Pandas" price="9.95CHF"/>}
                {(category==="alles" || category==="essen") && maxPrice >= 4.95 && <ProductCard image={pizza} name="Pizza" price="4.95CHF"/>}
                {(category==="alles" || category==="flaschen") && maxPrice >= 19.95 && <ProductCard image={bottle} name="Zoo-Bottle" price="19.95CHF"/>}
            </div>
        </>
    )
}