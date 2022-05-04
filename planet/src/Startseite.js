import Kategorien from './Kategorien/Kategorien';
import Navigation from './Navigation/Navigation';
import StartseiteStart from './StartseiteStart/StartseiteStart';
import WasNft from './WasNft/WasNft';
import WasPlanetCamora from './WasPlanetCamora/WasPlanetCamora';
import Faq from './Faq/Faq';
import Footer from './Footer/Footer';
import { useEffect } from 'react';

export default function Startseite() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

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