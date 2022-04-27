import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './Footer/Footer';
import './index.css';
import Navigation from './Navigation/Navigation';
import StartseiteStart from './StartseiteStart/StartseiteStart';
import WasPlanetCamora from './WasPlanetCamora/WasPlanetCamora';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation/>
    <StartseiteStart/>
    <WasPlanetCamora/>
    <Footer/>
  </React.StrictMode>
);
