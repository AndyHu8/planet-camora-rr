import Content from "../../PlanetCamoraBilder/exklusivContent.jpg"
import Goldplatte from "../../PlanetCamoraBilder/goldplatte.jpg"
import EinVorteileSelten from "../VorteileSeltenNft/EinVorteileSelten"
import InnerCircle from "../../PlanetCamoraBilder/zertifikat2.jpg"
import "./VorteileOGNftEins.css"

export default function VorteileOGNftEins() {
    return (
        <div className="VorteileOGNftContainer">
            <div className="VorteileOGNftContent">
            <h2>Vorteile als NFT Besitzer eines OG NFTs</h2>
            <p>Als PLANET NFT Halter erhältst du die untenstehenden exklusiven Vorteile und nimmst
            an einzigartigen Giveaways teil. Manche dieser Vorteile sind ausschließlich für First Holder.&nbsp;
            <a href="#Faq">(Was ist ein First Holder?)</a> Sei also schnell und stelle sicher, dein NFT als einer der Ersten zu erhalten.</p>
            <div>
                <EinVorteileSelten img={Content} titel="Exklusiver Content" subTitel="Musik und Videoplayer" text="Durch den Besitz deines NFTs hast du Zugriff auf einen internen Musik und Video Bereich dieser Webseite, um dir neue Songs und exklusiven Content anzusehen."/>
                <EinVorteileSelten img={Goldplatte} titel="NFT Goldplatte" subTitel="1 von 5.555" text="ZUKUNFT geht GOLD und du erhältst einen zertifizierten Teil dieser digitalen Goldplatte. Es werden nur 5.555 Stück erstellt und du hast die Möglichkeit ein paar davon zu besitzen."/>
                <EinVorteileSelten img={InnerCircle} titel="Inner Circle" subTitel="Exklusive Einblicke" text="Du erhältst ein physisches Zertifikat der Goldplatte, mit welchem Du zum Inner Circle gehörst. Im Inncer Circlebekommst du spannende Einblicke hinter die Kulissen mit exklusivem Content in RAF Camoras ''enge Freunde Story''."/>
            </div>
            </div>
        </div>
    )
}