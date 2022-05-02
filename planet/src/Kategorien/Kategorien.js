import EineKate from "./EineKate"
import "./Kategorien.css"
import Legendary from "../PlanetCamoraBilder/legendary.jpg"
import Selten from "../PlanetCamoraBilder/nft1.jpg"
import OGNft from "../PlanetCamoraBilder/nft2.jpg"

export default function Kategorien() {
    return (
        <section className="KateContainer">
                <EineKate img={Legendary} kollektion="Legendär" anzahl="5/5.555" text="Diese 5 one-of-a-kind Planet NFTs garantieren dir lebenslangen VIP Zugang inklusive Backstage Pass, zu jedem RAF Camora Konzert. Dich und deine Freunde erwarten mit diesem legendären NFT eine Menge VIP Specials." alt="Legendär NFT"/>
                <EineKate img={Selten} kollektion="Selten" anzahl="350/5.555" text="Diese 350 seltenen Planet NFTs ermöglichen dir unbezahlbare Specials wie, handgeschriebene Song Notizen von RAF Camora, auf 300 Stück limitierte Merch Artikel sowie viele weitere Einzigartigkeiten." alt="Selten NFT"/>
                <EineKate img={OGNft} kollektion="OG" anzahl="5.200/5.555" text="Werde ein Teil des Gold Erfolgs des Albums und erhalte einen zertifizierten Teil der Gold Platte ZUKUNFT. Du wirst Mitglied des RAF Camora Inner Circles, und nimmst an unglaublichen Giveaways wie persönliche Studio Sessions, und vielem mehr teil." alt="OG NFT"/>
        </section>
    )
}