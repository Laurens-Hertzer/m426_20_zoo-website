import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const ZOO_LOCATIONS = [
    // Deinen ersten 6 POIs (inkl. exakter Koordinaten)
    { id: 1, name: "Elefanten", position: [47.388639, 8.576972], description: "Kaeng Krachan Elefantenpark" },
    { id: 2, name: "Giraffen", position: [47.38929251010599, 8.577563478424366], description: "Afrika-Anlage (Lewa Savanne)" },
    { id: 3, name: "Lewa Savanne", position: [47.388144485533395, 8.579143696255631], description: "Breitmaulnashörner, Zebras & Erdmännchen" },
    { id: 4, name: "Masoala Regenwald", position: [47.38449329133594, 8.57841248444569], description: "Tropisches Ökosystem & Flughunde" },
    { id: 5, name: "Aquarium", position: [47.38482565286188, 8.574231209820903], description: "Unterwasserwelten & Exotarium" },
    { id: 6, name: "Parkplatz", position: [47.38405680031645, 8.577081581884277], description: "Haupteingang & Parking Zoo" },
    { id: 7, name: "Australien-Anlage", position: [47.38446206945949, 8.57255406645661], description: "Koalas, Kängurus & Riesenperonchsen" },
    { id: 8, name: "Pantanal", position: [47.384869867616224, 8.573825029844839], description: "Südamerikanisches Feuchtgebiet mit Tapiren & Ameisenbären" },
    { id: 9, name: "Zoolino", position: [47.38626639950571, 8.577082840095283], description: "Erlebnis-Streichelzoo mit Ziegen, Schafen und Ponys" },
    { id: 10, name: "Mongolische Steppe", position: [47.38736554279453, 8.574537862947903], description: "Trampeltiere, Yaks und Kaschmirziegen" },
    { id: 11, name: "Haupteingang & Center", position: [47.38418931734384, 8.574136120177803], description: "Tickets, Zoo-Shop & Gäste-Information" }
];

// 2. Die Hilfskomponente (MUSS ein Kind von <MapContainer> sein, damit useMap() funktioniert!)
function MapController({ targetPosition }) {
    const map = useMap();

    useEffect(() => {
        if (targetPosition) {
            // Fliegt geschmeidig zur Position und zoomt nah ran (Stufe 18)
            map.flyTo(targetPosition, 18, {
                animate: true,
                duration: 1.5
            });
        }
    }, [targetPosition, map]);

    return null;
}

export default function ZooMap() {
    const [activePosition, setActivePosition] = useState(null);
    const zooCenter = [47.3865, 8.5765]; // Zentraler Startpunkt über dem Zoo Zürich

    return (
        <div style={{ display: 'flex', height: '85vh', fontFamily: 'sans-serif', gap: '15px', padding: '10px' }}>

            {/* LINKSEITE: Schicke Sidebar mit deinen Locations */}
            <div style={{
                width: '280px',
                overflowY: 'auto',
                background: '#f8f9fa',
                padding: '15px',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
            }}>
                <h3 style={{ marginTop: 0, color: '#2c3e50', borderBottom: '2px solid #eec413', paddingBottom: '8px' }}>
                    Zoo Zürich Entdecken
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {ZOO_LOCATIONS.map((loc) => (
                        <button
                            key={loc.id}
                            onClick={() => setActivePosition(loc.position)}
                            style={{
                                padding: '12px',
                                textAlign: 'left',
                                background: activePosition === loc.position ? '#e2f0d9' : '#ffffff',
                                border: activePosition === loc.position ? '2px solid #5ab75a' : '1px solid #dee2e6',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                            }}
                        >
                            <strong style={{ color: '#333', fontSize: '14px' }}>{loc.name}</strong>
                            <div style={{ color: '#666', fontSize: '12px', marginTop: '4px' }}>{loc.description}</div>
                        </button>
                    ))}
                </div>
            </div>

            {/* RECHTSEITE: Die Leaflet-Karte */}
            <div style={{ flex: 1, borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <MapContainer center={zooCenter} zoom={15} style={{ height: '100%', width: '100%' }}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {/* Hier sitzt der Controller sicher IM MapContainer */}
                    <MapController targetPosition={activePosition} />

                    {/* Alle Pins auf die Karte setzen */}
                    {ZOO_LOCATIONS.map((loc) => (
                        <Marker key={loc.id} position={loc.position}>
                            <Popup>
                                <div style={{ textAlign: 'center' }}>
                                    <strong style={{ fontSize: '15px' }}>{loc.name}</strong>
                                    <p style={{ margin: '5px 0 0 0', color: '#555', fontSize: '13px' }}>{loc.description}</p>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>

        </div>
    );
}