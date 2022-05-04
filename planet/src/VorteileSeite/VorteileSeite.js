import '../index.css';
import Faq from "../Faq/Faq";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import PlanetCamoraVorteile from './PlanetCamoraVorteile/PlanetCamoraVorteile';
import { useEffect } from "react"

export default function VorteileSeite(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
        <Navigation/>
        <PlanetCamoraVorteile/>
        <Faq/>
        <Footer/>
        </>

    )
}