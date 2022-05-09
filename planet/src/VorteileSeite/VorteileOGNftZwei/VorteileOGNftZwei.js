import EinVorteileSelten from "../VorteileSeltenNft/EinVorteileSelten"
import "./VorteileOGNftZwei.css"
import Discord from "../../PlanetCamoraBilder/discord.jpg"
import Bluebanner from "../../PlanetCamoraBilder/blueBanner.jpg"

export default function VorteileOGNftZwei() {
    return (
        <div className="VorteileOGNftZweiContainer">
            <div className="VorteileOGNftZweiContent">
            <EinVorteileSelten img={Discord} titel="Exklusiver Content" subTitel="Musik und Videoplayer" text="Durch den Besitz deines NFTs hast du Zugriff auf einen internen Musik und Video Bereich dieser Webseite, um dir neue Songs und exklusiven Content anzusehen."/>
            <div className="VorteileOGNftBlueBanner">
                <img src={Bluebanner}/>
                <div className="OhneBlueBanner">
                    <p>VIP Giveaways</p>
                    <p>Für NFT Halter</p>
                    <p>Als Halter eines NFTs bist du berechtigt an regelmäßigen Giveaways teilzunehmen. Gewinne exklusive Inhalte und Erlebnisse in wöchentlichen Verlosungen.</p>
                    <ul>
                        <li>Lifetime VIP Tickets</li>
                        <li>Ein Besuch im Anthra Studio Berlin</li>
                        <li>Ein Tattoo im R.</li>
                    </ul>
                    <ul>
                        <li>Backstage Tickets mit Meet and Greet</li>
                        <li>Orginal Outfits aus Musikvideos</li>
                        <li>Eine Ferrari Fahrt mit RAF in Wien oder Berlin</li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    )
}