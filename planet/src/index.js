import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navigation from './Navigation/Navigation';
import StartseiteStart from './StartseiteStart/StartseiteStart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation/>
    <StartseiteStart/>
  </React.StrictMode>
);
