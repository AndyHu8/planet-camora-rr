import { useState } from "react"
import "./Faq.css"
import FaqAnswer from "./FaqAnswer"

export default function Faq() {
    const [showEinsText, setShowEinsText] = useState(false)
    const [showZweiText, setShowZweiText] = useState(false)
    const [showDreiText, setShowDreiText] = useState(false)
    const [showVierText, setShowVierText] = useState(false)
    const [showFuenfText, setShowFuenfText] = useState(false)
    const [showSechsText, setShowSechsText] = useState(false)

    const clickShowText = (zahl) => {
    const EinsQuestion = document.querySelector(".EinsQuestion");
    const ZweiQuestion = document.querySelector(".ZweiQuestion");
    const DreiQuestion = document.querySelector(".DreiQuestion");
    const VierQuestion = document.querySelector(".VierQuestion");
    const FuenfQuestion = document.querySelector(".FuenfQuestion");
    const SechsQuestion = document.querySelector(".SechsQuestion");

        switch(zahl){
            case 1: 
                if(showEinsText === false) {
                    setShowEinsText(true);
                    EinsQuestion.style.borderRadius = "35px 35px 0px 0px";
                }
                else {
                    setShowEinsText(false);
                    EinsQuestion.style.borderRadius = "70px";
                }
            break;

            case 2: 
                if(showZweiText === false) {
                    setShowZweiText(true);
                    ZweiQuestion.style.borderRadius = "35px 35px 0px 0px";
                }
                else {
                    setShowZweiText(false);
                    ZweiQuestion.style.borderRadius = "70px";
                }
            break;

            case 3: 
                if(showDreiText === false) {
                    setShowDreiText(true);
                    DreiQuestion.style.borderRadius = "35px 35px 0px 0px";
                }
                else {
                    setShowDreiText(false);
                    DreiQuestion.style.borderRadius = "70px";
                }
            break;

            case 4: 
                if(showVierText === false) {
                    setShowVierText(true);
                    VierQuestion.style.borderRadius = "35px 35px 0px 0px";
                }
                else {
                    setShowVierText(false);
                    VierQuestion.style.borderRadius = "70px";
                }
            break;

            case 5: 
                if(showFuenfText === false) {
                    setShowFuenfText(true);
                    FuenfQuestion.style.borderRadius = "35px 35px 0px 0px";
                }
                else {
                    setShowFuenfText(false);
                    FuenfQuestion.style.borderRadius = "70px";
                }
            break;

            case 6: 
                if(showSechsText === false) {
                    setShowSechsText(true);
                    SechsQuestion.style.borderRadius = "35px 35px 0px 0px";
                }
                else {
                    setShowSechsText(false);
                    SechsQuestion.style.borderRadius = "70px";
                }
            break;

            default: return
        }
    }



    return (
        <section className="faqWrapper">
            <div className="FaqDiv">
                <div className="FaqQuestion EinsQuestion">
                    <p>Wie kann ich ein Planet Camora NFT erwerben?</p>
                    <i className="fa fa-solid fa-angle-down" onClick={() => clickShowText(1)}></i>
                </div>
                {showEinsText ? <FaqAnswer text="Du kannst das NFT zum Launch Datum am 22. April 2022 um 19 Uhr über www.planetcamora.com im Main-Sale erwerben. Du kannst bequem mit Kreditkarte bezahlen und erhältst eine genaue Anleitung, was Dein NFT beinhaltet und wie du diese Inhalte einlösen oder weiterverkaufen kannst. Du kannst ebenfalls mit einem Metamask Wallet und der Kryptowährung Polygon (MATIC) minten. Das Polygon Netzwerk ist sehr Kosteneffizient und du wirst sowohl bei Kreditkarten Zahlung als auch beim minten mit Polygon kaum Gas fees haben."/> : null}
            </div>
            <div className="FaqDiv">
                <div className="FaqQuestion ZweiQuestion">
                    <p>Was kostet ein Planet Camora NFT?</p>
                    <i className="fa fa-solid fa-angle-down" onClick={() => clickShowText(2)}></i>
                </div>
                {showZweiText ? <FaqAnswer text="Ein Planet Camora NFT kostet im Main-Sale 155€."/> : null}
            </div>
            <div className="FaqDiv">
                <div className="FaqQuestion DreiQuestion">
                    <p>Was ist ein First Holder?</p>
                    <i className="fa fa-solid fa-angle-down" onClick={() => clickShowText(3)}></i>
                </div>
                {showDreiText ? <FaqAnswer text="Als First Holder, werden jene bezeichnet, die das NFT als erstes über www.planet-camora.com gekauft haben. Einige unserer Vorteile sind nur für diese First Holder gültig. Wenn man ein NFT über den Skundär Markt Opensea kauft, profitiert man nicht mehr von allen Vorteilen."/> : null}
            </div>
            <div className="FaqDiv">
                <div className="FaqQuestion VierQuestion">
                    <p>Wie viele NFTs gibt es und wie viele kann ich kaufen?</p>
                    <i className="fa fa-solid fa-angle-down" onClick={() => clickShowText(4)}></i>
                </div>
                {showVierText ? <FaqAnswer text="Die Kollektion der Planet Camora NFTs ist auf 5.555 Stück limitiert. Als Vorverkaufspass Besitzer, hast du dir bereits 1, 2 oder 3 NFTs gesichert. Du kannst maximal 3 Stück kaufen. Dies erhöht auch deine Chance ein NFT der Kategorien 'Selten' oder 'Legendär' zu erwerben. Wenn du im Main-Sale teilnimmst, kannst du maximal 5 NFTs kaufen. Die NFTs werden dir nach Zufall zugewiesen. Es ist also komplett zufällig ob du ein OG, seltenes oder legendäres NFT erhältst. Je mehr NFTs du besitzt, desto höher sind deine Chancen ein seltenes oder legendäres NFT zu erhalten."/> : null}
            </div>
            <div className="FaqDiv">
                <div className="FaqQuestion FuenfQuestion">
                    <p>Wie kann ich meine NFTs weiterverkaufen?</p>
                    <i className="fa fa-solid fa-angle-down" onClick={() => clickShowText(5)}></i>
                </div>
                {showFuenfText ? <FaqAnswer text="Planet Camora NFTs können auf der sekundär Plattform Opensea.io zum Verkauf angeboten werden. ACHTUNG: Manche utilities der NFTs sind nur für First Holder bestimmt. Das bedeutet, dass nur der erste Besitzer des NFTs von diesen Utilities profitiert."/> : null}
            </div>
            <div className="FaqDiv">
                <div className="FaqQuestion SechsQuestion">
                    <p>Ist dies die offizielle Planet Camora Seite?</p>
                    <i className="fa fa-solid fa-angle-down" onClick={() => clickShowText(6)}></i>
                </div>
                {showSechsText ? <FaqAnswer text="Nein. Diese Seite wurde von Hulong RR erstellt und dient nur zur Veranschaulichung.
                Auf dieser Seite können Sie keine Käufe abschließen. Der Link zum Creator dieser Seite,
                sowie zur offiziellen Planet Camora Seite sind hier verlinkt."/> : null}
            </div>
        </section>
    )
}