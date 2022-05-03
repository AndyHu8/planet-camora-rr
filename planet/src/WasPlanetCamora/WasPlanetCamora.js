import img from "../PlanetCamoraBilder/about.jpg"
import "./WasPlanetCamora.css"
import { Link } from "react-router-dom";

export default function WasPlanetCamora() {
    return (
        <section className="WasPlanetCamora">
            <div className="WasPlanetCamoraWrapper">
                <div className="WasPlanetFirstBox">
                    <img src={img} alt="Planet Camora"></img>
                </div>
                <div className="WasPlanetSecondBox">
                    <h2>Was ist <span>PLANET CAMORA</span>?</h2>
                    <p>PLANET CAMORA wurde ins Leben gerufen, um Raf Camoras Community, die den unglaublichen Erfolg des Albums ZUKUNFT ermöglichten etwas zurückzugeben. Mit PLANET CAMORA trittst du in die Welt von Raf Camora ein, und hast die Chance einen zertifizierten Teil der Goldplatte des Albums Zukunft zu erhalten. Diese 5.555 limitierten NFTs, aufgeteiltin 3 Kategorien, ermöglichen Dir, Zugriff auf exklusive Vorteile.</p>
                    <Link to="/Vorteile"><div className="button">Meine Vorteile</div></Link>
                </div>
            </div>
        </section>
    )
}