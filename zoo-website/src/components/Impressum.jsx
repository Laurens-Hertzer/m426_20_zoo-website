export default function Impressum() {
    return (
        <main style={{ fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px', lineHeight: '1.6' }}>
            <h1>Impressum</h1>

            <section>
                <h2>Kontaktadresse</h2>
                <p>
                    <strong>Zoo Zürich AG</strong><br />
                    Zürichbergstrasse 221<br />
                    8044 Zürich<br />
                    Schweiz
                </p>
                <p>
                    Telefon: <a href="tel:+41442542500">044 254 25 00</a><br />
                    E-Mail: <a href="mailto:zoo@zoo.ch">zoo@zoo.ch</a>
                </p>
            </section>

            <hr style={{ border: '0', borderTop: '1px solid #ccc', margin: '20px 0' }} />

            <section>
                <h2>Handelsregistereintrag</h2>
                <p>
                    <strong>Eingetragener Firmenname:</strong> Zoo Zürich AG<br />
                    <strong>Handelsregister-Nummer:</strong> CHE-101.907.073
                </p>
            </section>

            <hr style={{ border: '0', borderTop: '1px solid #ccc', margin: '20px 0' }} />

            <section>
                <h2>Technischer Partner</h2>
                <p><em>Frontend- & Backend-Umsetzung:</em></p>
                <p>
                    <strong>PAHW AG</strong><br />
                    Pioierstrasse 28<br />
                    8400 Winterthur<br />
                    Webseite: <a href="https://www.bbw.ch" target="_blank" rel="noopener noreferrer">bbw.ch</a>
                </p>
            </section>
        </main>
    );
}