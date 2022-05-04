import "./Navigation.css"
import twitter from "../PlanetCamoraBilder/twitter.png"
import insta from "../PlanetCamoraBilder/insta.png"
import discord from "../PlanetCamoraBilder/dc.png"
import openSea from "../PlanetCamoraBilder/opensea.png"
import { Link } from "react-router-dom";

export default function Navigation() {

    const toggleNav = () => {
        let navSelector = document.querySelector('.navMobile');

        if(navSelector.style.display === "none" || navSelector.style.display === ""){
            navSelector.style.display = "block";
        }
        else {
            navSelector.style.display = "none";
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
                    <li><img src={openSea} alt="OpenSea" onClick={() => window.open("https://opensea.io/collection/planet-camora", "_blank")}/></li>
                </ul>
            </div>
            <div>
                <ul className="socialTexts">
                    <li className="liText">Kaufen</li>
                    <li className="liText"><Link to="/" className="liLinks">Startseite</Link></li>
                    <li className="liText"><Link to="/Vorteile" className="liLinks">Vorteile</Link></li>
                    <i id="burger" className="fa fa-solid fa-bars" onClick={toggleNav}></i>
                </ul>
            </div>
        </div>
        <div className="navMobile">
            <div className="navText first">Kaufen</div>
            <div className="navText"><Link to="/" className="liLinks">Startseite</Link></div>
            <div className="navText"><Link to="/Vorteile" className="liLinks">Vorteile</Link></div>
        </div>
        </>
    )
}