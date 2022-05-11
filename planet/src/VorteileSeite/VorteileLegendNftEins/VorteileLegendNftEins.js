import EinVorteileSelten from "../VorteileSeltenNft/EinVorteileSelten"
import "./VorteileLegendNftEins.css"
import OGVorteile from "../../PlanetCamoraBilder/studio.jpg"
import Konzert from "../../PlanetCamoraBilder/konzert.jpg"

export default function VorteileLegendNftEins() {
    return (
        <div className="VorteileSeltenNftContainer">
            <div className="VorteileSeltenNftContent">
                <h2>Vorteile als NFT Besitzer eines legendären NFTs</h2>
                <p>Als glücklicher Besitzer eines legendären NFTs gehörst Du zu einer absoluten Elite mit folgenden Vorteilen:</p>
                <div>
                    <div className="VorteileLegendNftBanner">
                        <img src={Konzert} alt="Konzert"/>
                        <div className="OhneBlueBanner">
                        <p>Lifetime VIP Konzert Zugang</p>
                        <p>by RAF Camora</p>
                        <p>Wenn Du dieses legendäre NFT ziehst, erhältst Du einen Lifetime VIP Pass. Mit diesem bekommst du lebenslangen Zutritt zu jedem Konzert inklusive einem Backstage Pass bei jeder Vorstellung. Du darfst die Generalprobe am Tag vor dem Konzert besuchen, erhältst bei jedem Konzert einen Getränkegutschein im Wert von 50€ und musst niemals anstehen (No lane für Dich und 2 Freunde).</p>
                </div>
                </div>
                    <EinVorteileSelten img={OGVorteile} titel="Alle OG Vorteile" subTitel="Exklusive Einblicke" text="Als Holder eines legendären NFTs hast Du natürlich auch alle Vorteile eines OG NFTs."/>
                </div>
            </div>
        </div>
    )
}