import "./Navigation.css"
import twitter from "../PlanetCamoraBilder/twitter.png"
import insta from "../PlanetCamoraBilder/insta.png"
import discord from "../PlanetCamoraBilder/dc.png"
import openSea from "../PlanetCamoraBilder/opensea.png"

export default function Navigation() {
    return (
        <>
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
                    <li className="liText">Kaufen</li>
                    <li className="liText" onClick={() => window.location.reload()}>Startseite</li>
                    <li className="liText" >Vorteile</li>
                    <i id="burger" class="fa fa-solid fa-bars"></i>
                </ul>
            </div>
        </div>
        <div className="NavMobile">
            <div className="NavText first">Kaufen</div>
            <div className="NavText">Startseite</div>
            <div className="NavText">Vorteile</div>
        </div>
        </>
    )
}