import "./EineKate.css"

export default function EineKate(props) {
    return (
        <div className="EineKateContainer">
            <img src={props.img}/>
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
                <div className="eineKarteButton">Mehr Infos</div>
            </div>
        </div>
    )
}