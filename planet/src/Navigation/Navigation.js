import "./Navigation.css"
import twitter from "../PlanetCamoraBilder/twitter.png"
import insta from "../PlanetCamoraBilder/insta.png"
import discord from "../PlanetCamoraBilder/dc.png"
import openSea from "../PlanetCamoraBilder/opensea.png"

export default function Navigation() {
    return (
        <div className="container">
            <div>
                <ul className="socialIcons">
                    <li><img src={twitter} onClick={() => window.open("https://twitter.com/PlanetCamora", "_blank")}/></li>
                    <li><img src={insta} onClick={() => window.open("https://www.instagram.com/planetcamoranft/", "_blank")}/></li>
                    <li><img src={discord} onClick={() => window.open("https://discord.com/invite/planetcamora", "_blank")}/></li>
                    <li><img src={openSea}/></li>
                </ul>
            </div>
            <div>
                <ul className="socialTexts">
                    <li>Kaufen</li>
                    <li onClick={() => window.location.reload()}>Startseite</li>
                    <li>Vorteile</li>
                </ul>
            </div>
        </div>
    )
}