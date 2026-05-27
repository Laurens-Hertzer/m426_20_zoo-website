import welcome_img from '../assets/welcome_img.jpg'
import zoo_logo from '../assets/logo_zoo.png'

export default function Home() {
    return (
        <>
            <img src={zoo_logo} width={300}/>
            <div className="welcome_body">
                <span className="welcome_text"> <h2>Willkommen zum Zoo Zürich</h2>
                Tauche ein in die faszinierende Welt der Tiere.
                Mitten in Zürich erwarten dich über 300 Tierarten in naturnah gestalteten Lebensräumen. Erlebe die asiatischen Elefanten im Kaeng Krachan Elefantenpark, beobachte majestätische Löwen in der Lewa Savanne oder spaziere durch den tropischen Masoala Regenwald.
                Ob Familienausflug, Abenteuer mit Freunden oder ein entspannter Spaziergang – der Zoo Zürich bietet unvergessliche Momente für Gross und Klein. Wir engagieren uns leidenschaftlich für den Natur- und Artenschutz und laden dich ein, Teil dieser Mission zu sein.
                Wilkommen im Zoo Zürich
                Tauche ein in die faszinierende Welt der Tiere.
                Mitten in Zürich erwarten dich über 300 Tierarten in naturnah gestalteten Lebensräumen. Erlebe die asiatischen Elefanten im Kaeng Krachan Elefantenpark, beobachte majestätische Löwen in der Lewa Savanne oder spaziere durch den tropischen Masoala Regenwald.
                Ob Familienausflug, Abenteuer mit Freunden oder ein entspannter Spaziergang – der Zoo Zürich bietet unvergessliche Momente für Gross und Klein. Wir engagieren uns leidenschaftlich für den Natur- und Artenschutz und laden dich ein, Teil dieser Mission zu sein.
                </span>
                <img className="welcome_image" src={welcome_img} width={600} height={400}/>
            </div>
        </>
    )
}

