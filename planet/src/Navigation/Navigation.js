import "./Navigation.css"
import twitter from "../PlanetCamoraBilder/twitter.png"
import insta from "../PlanetCamoraBilder/insta.png"
import discord from "../PlanetCamoraBilder/dc.png"
import openSea from "../PlanetCamoraBilder/opensea.png"

export default function Navigation() {
    const toggleNav = () => {
        let navSelector = document.querySelector('.navMobile');

        if(navSelector.style.display == "none"){
            navSelector.style.display = "block"
        }
        else {
            navSelector.style.display = "none"
        }
    }

    return (
        <>
        <div className="container">
            <div>
                <ul className="socialIcons">
                    <li><img src={twitter} alt="Twitter" onClick={() => window.open("https://twitter.com/PlanetCamora", "_blank")}/></li>
                    <li><img src={insta} alt="Instagram" onClick={() => window.open("https://www.instagram.com/planetcamoranft/", "_blank")}/></li>
                    <li><img src={discord} alt="Discord" onClick={() => window.open("https://discord.com/invite/planetcamora", "_blank")}/></li>
                    <li><img src={openSea} alt="OpenSea"/></li>
                </ul>
            </div>
            <div>
                <ul className="socialTexts">
                    <li className="liText">Kaufen</li>
                    <li className="liText" onClick={() => window.location.reload()}>Startseite</li>
                    <li className="liText" >Vorteile</li>
                    <i id="burger" class="fa fa-solid fa-bars" onClick={toggleNav}></i>
                </ul>
            </div>
        </div>
        <div className="navMobile">
            <div className="navText first">Kaufen</div>
            <div className="navText" onClick={() => window.location.reload()}>Startseite</div>
            <div className="navText">Vorteile</div>
        </div>
        </>
    )
}