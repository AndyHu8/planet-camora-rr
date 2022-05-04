import '../index.css';
import Faq from "../Faq/Faq";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import PlanetCamoraVorteile from './PlanetCamoraVorteile/PlanetCamoraVorteile';

export default function VorteileSeite(){
    return (
        <>
        <Navigation/>
        <PlanetCamoraVorteile/>
        <Faq/>
        <Footer/>
        </>

    )
}