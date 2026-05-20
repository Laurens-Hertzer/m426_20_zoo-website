import welcome_img from '../assets/welcome_img.jpg'

export default function Home() {
    return (
        <div className="welcome_body">
        <span className="welcome_text">
          Josua's beschreibung Me te se te pe te fe te ce le me ne so to ppe to
        </span>
            <img className="welcome_image" src={welcome_img} width={600} height={400}/>
        </div>
    )
}

