import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";
import Startseite from "./Startseite"
import Vorteile from "./VorteileSeite/VorteileSeite"

export default function App() {
    return(
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Startseite/>} />
                <Route path="/Vorteile" element={<Vorteile/>} />
            </Routes>
      </Router>
        </>
    )
}