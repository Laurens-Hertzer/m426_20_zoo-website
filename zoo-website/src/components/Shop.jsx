import pandas_img from '../assets/pandas.png'
import baby_oil from '../assets/babyoil.png'

export default function shop() {
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
            <div style={{ display: 'flex', flexDirection: 'row', gap: '12px' }}>
                <ProductCard image={pandas_img} name="Pandas" price="9.99CHF"/>
                <ProductCard image={baby_oil} name="Baby Oil" price="19.99CHF"/>
            </div>
        </>
    )
}