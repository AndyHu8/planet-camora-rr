import "./EineKate.css"
import { Link } from "react-router-dom";

export default function EineKate(props) {
    return (
        <div className="EineKateContainer">
            <img src={props.img} alt="NFT Bild"/>
            <div className="contentContainer">
                <div className="titel">
                    <div>{props.kollektion}</div>
                    <div>Anzahl:</div>
                </div>
                <div className="kollektion">
                    <div>Kollektion</div>
                    <div>{props.anzahl}</div>
                </div>
                <p>{props.text}</p>
                <Link to="/Vorteile" className="eineKarteButtonDiv"><div>Mehr Infos</div></Link>
            </div>
        </div>
    )
}