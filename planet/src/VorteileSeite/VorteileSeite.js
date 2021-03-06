import '../index.css';
import Faq from "../Faq/Faq";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import PlanetCamoraVorteile from './PlanetCamoraVorteile/PlanetCamoraVorteile';
import { useEffect } from "react"
import VorteileLegendNftZwei from './VorteileLegendNftZwei/VorteileLegendNftZwei';
import VorteileSeltenNft from './VorteileSeltenNft/VorteileSeltenNft';
import VorteileOGNftEins from './VorteileOGNftEins/VorteileOGNftEins';
import VorteileOGNftZwei from './VorteileOGNftZwei/VorteileOGNftZwei';
import VorteileLegendNftEins from './VorteileLegendNftEins/VorteileLegendNftEins';

export default function VorteileSeite(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
        <Navigation/>
        <PlanetCamoraVorteile/>
        <VorteileOGNftEins/>
        <VorteileOGNftZwei/>
        <VorteileSeltenNft/>
        <VorteileLegendNftEins/>
        <VorteileLegendNftZwei/>
        <Faq/>
        <Footer/>
        </>

    )
}