import Kategorien from './Kategorien/Kategorien';
import Navigation from './Navigation/Navigation';
import StartseiteStart from './StartseiteStart/StartseiteStart';
import WasNft from './WasNft/WasNft';
import WasPlanetCamora from './WasPlanetCamora/WasPlanetCamora';
import Faq from './Faq/Faq';
import Footer from './Footer/Footer';

export default function Startseite() {
    return(
        <>
        <Navigation/>
        <StartseiteStart/>
        <WasPlanetCamora/>
        <Kategorien/>
        <WasNft/>
        <Faq/>
        <Footer/>
        </>
    )
}