import React from 'react';
import ReactDOM from 'react-dom/client';
import Faq from './Faq/Faq';
import Footer from './Footer/Footer';
import './index.css';
import Kategorien from './Kategorien/Kategorien';
import Navigation from './Navigation/Navigation';
import StartseiteStart from './StartseiteStart/StartseiteStart';
import WasNft from './WasNft/WasNft';
import WasPlanetCamora from './WasPlanetCamora/WasPlanetCamora';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation/>
    <StartseiteStart/>
    <WasPlanetCamora/>
    <Kategorien/>
    <WasNft/>
    <Faq/>
    <Footer/>
  </React.StrictMode>
);
