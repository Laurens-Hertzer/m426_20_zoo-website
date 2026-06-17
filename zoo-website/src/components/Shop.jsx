import pandas_img from '../assets/pandas.png'
import baby_oil from '../assets/babyoil.png'
import {useState} from "react";

export default function Shop() {
    const [maxPrice, setMaxPrice] = useState(25);

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
                        width: '100%',
                        height: 'auto',
                        borderRadius: '4px',
                        objectFit: 'cover'
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
                <input type="range" min="0" max="25" value={maxPrice} onChange={e => setMaxPrice(e.target.value)}/>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', gap: '12px'}}>
                {maxPrice >= 9.99 && <ProductCard image={pandas_img} name="Pandas" price="9.95CHF"/>}
                {maxPrice >= 19.99 && <ProductCard image={baby_oil} name="Baby Oil" price="19.95CHF"/>}
            </div>
        </>
    )
}