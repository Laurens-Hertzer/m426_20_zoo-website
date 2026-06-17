import gorilla from "../assets/Gorilla.png";

export default function NewsStoryPreview({title, img, imgalt, text}) {
    return (
        <>
            <div className="storypreview">
                <h3>{title}</h3>
                <img src={img} alt={imgalt}/>
                <p className="text-truncate-multi">{text}</p>
            </div>
        </>
    )
}