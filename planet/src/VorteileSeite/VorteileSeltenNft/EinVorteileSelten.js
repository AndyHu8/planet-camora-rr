import "./EinVorteileSelten.css"

export default function EinVorteileSelten(props) {
    return (
        <div className="EineSeltenContainer">
            <img src={props.img} alt="NFT Bild"/>
            <div className="EineSeltenTextContent">
                <p className="EineSeltenTitel">{props.titel}</p>
                <p className="EineSeltenSubTitel">{props.subTitel}</p>
                <p className="EineSeltenText">{props.text}</p>
            </div>
        </div>
    )
}