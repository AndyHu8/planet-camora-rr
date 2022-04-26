import PlanetCamoraSchrift from "../PlanetCamoraBilder/schrift.png"
import HauptseiteBanner from "../PlanetCamoraBilder/hauptseiteBanner.png"
import "./StartseiteStart.css"


export default function StartseiteStart() {
    return (
        <section>
            <div className="startseiteContainer">
                <div className="boxLinks">
                    <img src={PlanetCamoraSchrift}></img>
                    <p>Raf Camoras Album ZUKUNFT feiert den Gold Erfolg! Zum Dank an seine Fans, möchte Raf Camora mit dem Projekt PLANET CAMORA etwas zurückgeben. Erhalte jetzt einen zertifizierten Teil der Goldplatte des Raf Camora Albums Zukunft. Erhalte Zugriff zum ersten NFT Song release im deutschsprachigen Raum, sowie lifetime VIP Konzerttickets, exklusive Meet and Greets, Inner Circle Memberships und vieles mehr.</p>
                    <div className="allButtons">
                        <div className="button" onClick={() => window.open("https://www.planet-camora.com/", "_blank")}>Offizielle Seite</div>
                        <div className="button">Was ist ein NFT?</div>
                        <div className="button" onClick={() => window.open("https://hulongofficial.de/", "_blank")}>Creator</div>
                    </div>
                </div>
                <div className="boxRechts">
                    <img src={HauptseiteBanner}></img>
                </div>
            </div>
        </section>
    )
}