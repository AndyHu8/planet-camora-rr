import "./PlanetCamoraVorteile.css"
import ZertifikatImg from "../../PlanetCamoraBilder/zertifikat.png"

export default function PlanetCamoraVorteile() {
    return (
        <div className="PCVContainer">
            <div>
                <h2>PLANET CAMORA <br/> Vorteile</h2>
                <p>Mit dem ersten NFT Song-Release im deutschsprachigen Raum, wirst Du zu einem Teil des Gold Erfolgs von ZUKUNFT und gelangst in Besitz eines von 5.555 zertifizierten Teilen, der digitalen Goldplatte von Raf Camora. Zusätzlich erhähltst Du die Chance auf weitere Specials, wie unlimitierten VIP Konzert Zugang, exklusiven Merch oder Inner Circle Content, welche nur Besitzern dieses NFTs zur Verfügung stehen.</p>
                <p>Erfahre welche Specials auf dich warten.</p>
                <img src={ZertifikatImg} alt="CERTIFICATE OF OWNERSHIP - RAF CAMORA ZUKUNFT"/>
            </div>
        </div>
    )
}