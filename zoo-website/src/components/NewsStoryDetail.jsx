import { useParams, Link } from "react-router-dom";
import gorilla from "../assets/Gorilla-detail.webp";
import flamingo from "../assets/Flamingo-detail.webp";
import aligator from "../assets/Aligator-detail.webp";

export const newsData = {
    "gorilla": {
        title: "GORILLA VS 100 MÄNNER",
        img: gorilla,
        imgalt: "Zeigt einen Gorilla umzingelt von 100 Männern.",
        text: "Das Massaker im Savana-Gehege: Wenn 100 Männer die Evolution rückgängig machen wollen\n" +
            "\n" +
            "In einem der bizarrsten und wissenschaftlich fragwürdigsten Vorfälle der modernen Zoogeschichte drangen gestern Abend über 100 Männer in den Savana Zoo ein. Ihr Ziel: Kein Diebstahl, kein Protest, sondern ein kollektiver, von Testosteron getriebener Akt nackten Wahnsinns. Sie wollten sich in einem ultimativen Faustkampf mit einem ausgewachsenen, 200 Kilo schweren Silberrücken-Gorilla messen. Was in den Köpfen der Beteiligten vermutlich als heroische Demonstration menschlicher Dominanz geplant war, eskalierte innerhalb von Sekunden – und endete in einer absoluten biologischen Katastrophe. Kein einziger der Eindringlinge überlebte das von ihnen selbst inszenierte Debakel.\n" +
            "Chronik einer Ansage mit Ansage\n" +
            "\n" +
            "Laut ersten Auswertungen der Überwachungskameras knackte die Gruppe gegen 23:00 Uhr die Sicherheitszäune. Augenzeugenberichten zufolge – hauptsächlich sichtlich schockierte Nachtwächter – war die Stimmung unter den Männern euphorisch. Sie waren fest davon überzeugt, dass eine dreistellige Anzahl an menschlichen Fäusten die pure Muskelmasse eines Primaten überwältigen könnte.\n" +
            "\n" +
            "Doch die mathematische Rechnung ging nicht auf. Als die 100 Männer johlend und Brust-trommelnd das Gehege stürmten, um den schlafenden Silberrücken namens „Bobo“ herauszufordern, weckten sie nicht nur das Tier, sondern auch dessen tiefste Urinstinkte.\n" +
            "\n" +
            "    Ein fataler Denkfehler: Ein Gorilla besitzt die siebenfache Kraft eines olympischen Gewichthebers und eine Beißkraft, die mühelos Kokosnüsse (oder eben Menschenknochen) knackt."
    },
    "flamingo": {
        title: "FLAMINGO VERSCHWÖRUNG",
        img: flamingo,
        imgalt: "Zeigt wie Flamingos in einem Zoo laden stehen.",
        text: "Das Flamingo-Komplott: Wenn Perfektionismus im Entenmarsch endet\n" +
            "\n" +
            "Nachdem sich die Gemüter im Savana Zoo nach dem Vorfall im Gorillagehege kaum beruhigt hatten, sorgte gestern die Abteilung für Ornithologie für den nächsten, wissenschaftlich völlig unerklärlichen Zwischenfall. Diesmal ging es jedoch nicht um rohe Gewalt, sondern um psychologische Kriegsführung auf höchstem Niveau. Die Hauptakteure: Eine Kolonie aus 45 rosa Flamingos, die offenbar genug davon hatte, nur als dekorativer Hintergrund für Instagram-Selfies zu dienen.\n" +
            "Die Generalstabsplanung im Flachwasser\n" +
            "\n" +
            "Es begann alles um Punkt 14:00 Uhr während der regulären Fütterungszeit. Laut den Aufzeichnungen der Überwachungskameras zeigten die Flamingos ein Verhalten, das Zoologen bisher nur aus Spionage-Thrillern kannten. Anstatt wie üblich elegant auf einem Bein zu stehen und stumpf ins Wasser zu starren, formierten sich die Vögel in einer perfekten, militärischen Keilformation.\n" +
            "\n" +
            "    Der unterschätzte IQ: Jahrelang glaubte man, das Gehirn eines Flamingos sei kleiner als sein Auge. Gestern bewiesen die Tiere das Gegenteil – oder zumindest, dass sie verdammt gut synchronisieren können.\n" +
            "\n" +
            "Als der leitende Tierpfleger Uwe K. (48) das Gehege mit einem Eimer voller Spezialpellets betrat, schlug die Falle zu. Die Flamingos liefen nicht etwa davon, sondern begannen einen synchronisierten, ohrenbetäubenden Stepptanz. Durch das rhythmische Aufstampfen von 90 dünnen Beinen im Schlamm erzeugten die Vögel eine akustische Frequenz, die Uwe K. augenblicklich in eine Art hypnotische Trance versetzte."
    },
    "aligator": {
        title: "ALIGATOR FRISST MAN",
        img: aligator,
        imgalt: "Zeigt wie ein Mann von einem Aligator gegessen wird.",
        text: "Das Alligator-Gourmetmenü: Ein teurer Snack im Savana Zoo\n" +
            "\n" +
            "Im „Tropenparadies“ des Savana Zoos kam es gestern Nachmittag zu einem Vorfall, der die Debatte über gesunde Ernährung und artgerechte Haltung in eine völlig neue, makabere Richtung lenkte. Ein 34-jähriger Betriebswirt namens Torsten M. wurde von einem dreieinhalb Meter langen Mississippi-Alligator namens „Schnappi“ am helllichten Tag verspeist. Für den Alligator war es der erste kulinarische Ausflug in die gehobene Mitte der Gesellschaft – für Torsten der letzte.\n" +
            "Der dümmste anzunehmende User (DAU) am Beckenrand\n" +
            "\n" +
            "Laut Augenzeugenberichten kletterte Torsten M., bewaffnet mit einer sündhaft teuren Spiegelreflexkamera und einer gehörigen Portion Selbstüberschätzung, über die Absperrung. Sein Ziel: Das „perfekte, ungefilterte Porträtbild aus nächster Nähe“ für sein LinkedIn-Profil, um seine Risikobereitschaft als Führungskraft zu demonstrieren.\n" +
            "\n" +
            "Als er auf den nassen, vermoosten Steinen den Halt verlor und direkt vor dem Echsenmaul landete, bewies der Alligator echtes Business-Geschick: Er fackelte nicht lange, fällte eine Blitzentscheidung und schluckte Torsten in einem einzigen, gierigen Bissen hinunter.\n" +
            "\n" +
            "    Ein biologisches Meisterwerk: Alligatoren kauen ihre Nahrung nicht. Sie schlucken im Ganzen. Torsten wechselte also innerhalb von zwei Sekunden seinen Aggregatzustand von „ambitionierter Projektleiter“ zu „schwer verdaulicher Klumpen Fleisch“."
    }
};

export default function NewsStoryDetail() {
    const { storyId } = useParams(); // Holt das z.B. "gorilla" aus der URL
    const story = newsData[storyId];

    if (!story) {
        return <h2>Story nicht gefunden!</h2>;
    }

    return (
        <div className="news-detail">
            <h1>{story.title}</h1>
            <img src={story.img} alt={story.imgalt} style={{ maxWidth: "100%" }} />
            <p>{story.text}</p>
            <Link to="/News">← Zurück zur Übersicht</Link>
        </div>
    );
}