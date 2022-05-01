import EineKate from "./EineKate"
import "./Kategorien.css"
import Legendary from "../PlanetCamoraBilder/legendary.jpg"
import Selten from "../PlanetCamoraBilder/nft1.jpg"
import OGNft from "../PlanetCamoraBilder/nft2.jpg"

export default function Kategorien() {
    return (
        <section className="KateContainer">
            <div>
                <EineKate img={Legendary} kollektion="Legendär" anzahl="5/5.555" alt="Legendär NFT"/>
                <EineKate img={Selten} kollektion="Selten" anzahl="350/5.555" alt="Selten NFT"/>
                <EineKate img={OGNft} kollektion="OG" anzahl="5.200/5.555" alt="OG NFT"/>
            </div>
        </section>
    )
}