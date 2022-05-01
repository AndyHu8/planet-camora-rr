import "./EineKate.css"

export default function EineKate(props) {
    return (
        <div className="EineKateContainer">
            <img src={props.img}/>
            <div className="contentContainer">
                <div className="titel">
                    <div>{props.kollektion}</div>
                    <div>Anzahl</div>
                </div>
                <div className="kollektion">
                    <div>Kollektion</div>
                    <div>{props.anzahl}</div>
                </div>
                <p>Diese 5 one-of-a-kind Planet NFTs garantieren dir lebenslangen VIP Zugang inklusive Backstage Pass, zu jedem RAF Camora Konzert. Dich und deine Freunde erwarten mit diesem legendären NFT eine Menge VIP Specials.</p>
                <div>Mehr Infos</div>
            </div>
        </div>
    )
}