import EinVorteileSelten from "./EinVorteileSelten"
import "./VorteileSeltenNft.css"
import Songnotizen from "../../PlanetCamoraBilder/notizen.jpg"
import Merch from "../../PlanetCamoraBilder/merch.jpg"
import OGVorteile from "../../PlanetCamoraBilder/studio.jpg"

export default function VorteileSeltenNft() {
    return (
        <div className="VorteileSeltenNftContainer">
            <div className="VorteileSeltenNftContent">
                <h2>Vorteile als NFT Besitzer eines seltenen NFTs</h2>
                <p>Beim Kauf der NFTs wirst du durch Zufall einer Kategorie zugeteilt.Beim Kauf mehrerer NFTs erhöst du deine Chancen
ein seltenes oder legendäres NFT zu erhalten. Wenn du ein seltenes Planet NFT besitzt, erhältst du alle Vorteile des normalen
NFTs und bekommst zusätzlich Zugriff auf folgende exklusive Inhalte, welche du auf Wunsch zu dir nach Hause schicken lassen kannst.</p>
                <div>
                    <EinVorteileSelten img={Songnotizen} titel="Originale Songnotizen" subTitel="von RAF Camora" text="50 verschiedene Exemplare der originalen Songnotizen von RAF Camoras Alben. Handgeschrieben, eingerahmt und kein zweites Mal verfügbar."/>
                    <EinVorteileSelten img={Merch} titel="Limitierter Merch" subTitel="Nur 300 Stück verfügbar" text="Einzigartiger limitierter Merch. Dieser Merch steht der Öffentlichkeit zu keinem Zeitpunkt zum Verkauf zur Verfügung."/>
                    <EinVorteileSelten img={OGVorteile} titel="Alle OG Vorteile" subTitel="Exklusive Einblicke" text="Als Holder eines seltenen NFTs hast du zusätzlich natürlich auch alle Vorteile eines OG NFTs,"/>
                </div>
            </div>
        </div>
    )
}