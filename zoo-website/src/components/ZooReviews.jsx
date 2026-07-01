import { useState } from "react";
import "../css/zoo-zuerich-design.css"

const reviews = [
    {
        id: 1,
        name: "Lena K.",
        initials: "LK",
        color: "#C0DD97",
        textColor: "#27500A",
        rating: 5,
        date: "12. Juni 2025",
        badge: "Familien",
        quote: "Ein Tag voller Wunder für die ganze Familie!",
        body: "Unsere Kinder waren begeistert vom Elefantengehege und der Giraffenfütterung. Die Anlage ist wunderschön gepflegt und überall gibt es Infotafeln. Wir kommen definitiv wieder!",
        helpful: 34,
        tags: ["families"],
    },
    {
        id: 2,
        name: "Markus T.",
        initials: "MT",
        color: "#B5D4F4",
        textColor: "#0C447C",
        rating: 4,
        date: "3. Mai 2025",
        badge: "Lehrreich",
        quote: "Tolle Führung durch den Regenwald-Bereich.",
        body: "Die geführte Tour war sehr informativ und unser Guide kannte sich wirklich aus. Einziges Manko: die Parkplätze waren um 10 Uhr schon voll. Trotzdem sehr empfehlenswert.",
        helpful: 18,
        tags: ["education"],
    },
    {
        id: 3,
        name: "Sophie M.",
        initials: "SM",
        color: "#F5C4B3",
        textColor: "#712B13",
        rating: 5,
        date: "28. April 2025",
        badge: "Familien",
        quote: "Die Pinguinshow ist einfach zauberhaft!",
        body: "Meine Tochter hat seit Wochen von den Pinguinen geschwärmt. Die Show war kurz aber wirklich charmant. Das Personal war durchweg freundlich und hilfsbereit.",
        helpful: 41,
        tags: ["families"],
    },
    {
        id: 4,
        name: "Jan R.",
        initials: "JR",
        color: "#D3D1C7",
        textColor: "#444441",
        rating: 3,
        date: "15. April 2025",
        badge: null,
        quote: "Schön, aber die Preise könnten fairer sein.",
        body: "Der Zoo selbst ist toll, aber die Gastronomie ist leider sehr überteuert. Ein Hotdog für 8€ finde ich zu viel. Die Tiere und Anlagen sind jedoch wirklich sehenswert.",
        helpful: 12,
        tags: [],
    },
    {
        id: 5,
        name: "Clara B.",
        initials: "CB",
        color: "#9FE1CB",
        textColor: "#085041",
        rating: 5,
        date: "2. April 2025",
        badge: "Lehrreich",
        quote: "Nachhaltigkeit wird hier wirklich großgeschrieben.",
        body: "Besonders beeindruckt hat mich das Artenschutz-Programm. Die Infopanels erklären verständlich, wie der Zoo zur Erhaltung bedrohter Arten beiträgt. Vorbildlich!",
        helpful: 29,
        tags: ["education"],
    },
    {
        id: 6,
        name: "Felix W.",
        initials: "FW",
        color: "#FAC775",
        textColor: "#633806",
        rating: 4,
        date: "19. März 2025",
        badge: "Familien",
        quote: "Streichelzoo – Highlight für die Kleinen.",
        body: "Der Streichelzoo war für unsere 3-jährige Tochter das absolute Highlight. Die Kaninchen und Ziegen sind super zahm. Ein bisschen mehr Schatten in dem Bereich wäre schön.",
        helpful: 22,
        tags: ["families"],
    },
];

const FILTERS = [
    { key: "all", label: "Alle" },
    { key: "5", label: "🐾🐾🐾🐾🐾" },
    { key: "4", label: "🐾🐾🐾🐾" },
    { key: "3", label: "🐾🐾🐾" },
    { key: "families", label: "Familien" },
    { key: "education", label: "Lehrreich" },
];

function renderPaws(rating) {
    return "🐾".repeat(rating) + "☐".repeat(5 - rating);
}

function ReviewCard({ review }) {
    const [voted, setVoted] = useState(false);

    return (
        <div className="review-card">
            <div className="review-card__top">
                <div
                    className="review-card__avatar"
                    style={{ background: review.color, color: review.textColor }}
                >
                    {review.initials}
                </div>
                <div className="review-card__meta">
                    <p className="review-card__name">{review.name}</p>
                    <p className="review-card__date">{review.date}</p>
                </div>
                <span className="review-card__paws">{renderPaws(review.rating)}</span>
                {review.badge && (
                    <span className="review-card__badge">{review.badge}</span>
                )}
            </div>
            <p className="review-card__quote">{review.quote}</p>
            <p className="review-card__body">{review.body}</p>
            <div className="review-card__footer">
                <button
                    onClick={() => setVoted(true)}
                    disabled={voted}
                    className={`review-card__helpful-btn${voted ? " review-card__helpful-btn--voted" : ""}`}
                    aria-label="Als hilfreich markieren"
                >
                    👍 {voted ? review.helpful + 1 : review.helpful} hilfreich
                </button>
            </div>
        </div>
    );
}

export default function ZooReviews() {
    const [activeFilter, setActiveFilter] = useState("all");

    const filtered = reviews.filter((r) => {
        if (activeFilter === "all") return true;
        if (!isNaN(activeFilter)) return r.rating === parseInt(activeFilter);
        return r.tags.includes(activeFilter);
    });

    const avgRating = (
        reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
    ).toFixed(1);

    return (
        <div className="zoo-reviews">
            {/* Header */}
            <div className="zoo-reviews__header">
                <div className="zoo-reviews__summary">
                    <span className="zoo-reviews__big-rating">{avgRating}</span>
                    <div className="zoo-reviews__rating-meta">
                        <span className="zoo-reviews__paws">🐾🐾🐾🐾🐾</span>
                        <span className="zoo-reviews__rating-count">
              {reviews.length} Bewertungen
            </span>
                    </div>
                </div>
                <button className="zoo-reviews__write-btn">✏️ Bewertung schreiben</button>
            </div>

            {/* Filter Bar */}
            <div className="zoo-reviews__filter-bar">
                {FILTERS.map((f) => (
                    <button
                        key={f.key}
                        onClick={() => setActiveFilter(f.key)}
                        className={`zoo-reviews__filter-btn${activeFilter === f.key ? " zoo-reviews__filter-btn--active" : ""}`}
                    >
                        {f.label}
                    </button>
                ))}
            </div>

            {/* Reviews */}
            {filtered.length === 0 ? (
                <p className="zoo-reviews__no-results">
                    Keine Bewertungen für diesen Filter gefunden.
                </p>
            ) : (
                filtered.map((r) => <ReviewCard key={r.id} review={r} />)
            )}
        </div>
    );
}
