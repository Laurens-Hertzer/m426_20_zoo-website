import {Link} from 'react-router-dom';

export default function NewsStoryPreview({title, img, imgalt, text, link}) {
    return (
        <>
            <div className="storypreview">
                <h3>{title}</h3>
                <img src={img} alt={imgalt}/>
                <p className="text-truncate-multi">{text}</p>
                <Link to={link} className="read-more-link">
                    Weiterlesen →
                </Link>
            </div>
        </>
    )
}