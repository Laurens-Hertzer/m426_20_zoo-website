import gorilla from "../assets/Gorilla-preview.webp"
import flamingo from "../assets/Flamingo-preview.webp"
import aligator from "../assets/Aligator-preview.webp"

import NewsStoryPreview from "./NewsStoryPreview.jsx";

export default function News() {

    return (
        <>
            <h1>News</h1>
            <div className="parallel-layout">
                <NewsStoryPreview
                    title={"GORILLA VS 100 MÄNNER"}
                    img={gorilla}
                    imgalt={"Zeigt einen Gorilla umzingelt von 100 Männern."}
                    text={"In einem der bizarrsten und wissenschaftlich fragwürdigsten Vorfälle der modernen Zoogeschichte drangen gestern Abend über 100 Männer in den Savana Zoo ein. Ihr Ziel: Kein Diebstahl, kein Protest, sondern ein kollektiver, von Testosteron getriebener Akt nackten Wahnsinns. Sie wollten sich in einem ultimativen Faustkampf mit einem ausgewachsenen, 200 Kilo schweren Silberrücken-Gorilla messen. Was in den Köpfen der Beteiligten vermutlich als heroische Demonstration menschlicher Dominanz geplant war, eskalierte innerhalb von Sekunden – und endete in einer absoluten biologischen Katastrophe. Kein einziger der Eindringlinge überlebte das von ihnen selbst inszenierte Debakel."}
                    link={"/News/gorilla"}
                />
                <NewsStoryPreview
                    title={"FLAMINGO VERSCHWÖRUNG"}
                    img={flamingo}
                    imgalt={"Zeigt wie Flamingos in einem Zoo laden stehen."}
                    text={"Nachdem sich die Gemüter im Savana Zoo nach dem Vorfall im Gorillagehege kaum beruhigt hatten, sorgte gestern die Abteilung für Ornithologie für den nächsten, wissenschaftlich völlig unerklärlichen Zwischenfall. Diesmal ging es jedoch nicht um rohe Gewalt, sondern um psychologische Kriegsführung auf höchstem Niveau. Die Hauptakteure: Eine Kolonie aus 45 rosa Flamingos, die offenbar genug davon hatte, nur als dekorativer Hintergrund für Instagram-Selfies zu dienen."}
                    link={"/News/flamingo"}
                />
                <NewsStoryPreview
                    title={"ALIGATOR FRISST MAN"}
                    img={aligator}
                    imgalt={"Zeigt wie ein Mann von einem Aligator gegessen wird."}
                    text={"Im „Tropenparadies“ des Savana Zoos kam es gestern Nachmittag zu einem Vorfall, der die Debatte über gesunde Ernährung und artgerechte Haltung in eine völlig neue, makabere Richtung lenkte. Ein 34-jähriger Betriebswirt namens Torsten M. wurde von einem dreieinhalb Meter langen Mississippi-Alligator namens „Schnappi“ am helllichten Tag verspeist. Für den Alligator war es der erste kulinarische Ausflug in die gehobene Mitte der Gesellschaft – für Torsten der letzte."}
                    link={"/News/aligator"}

                />
            </div>

        </>
    )
}