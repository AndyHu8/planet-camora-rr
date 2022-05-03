import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import Startseite from "./Startseite"
import Vorteile from "./VorteileSeite/VorteileSeite"

export default function App() {
    return(
        <>
        <Router forceRefresh={true}>
            <Switch>
                <Route exact path="/" component={Startseite} />
                <Route path="/Vorteile" component={Vorteile} />
                <Redirect to="/" />
            </Switch>
      </Router>
        </>
    )
}