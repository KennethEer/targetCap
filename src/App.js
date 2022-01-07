import './App.css';

import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import NavbarComponent from "./components/navbarcomponent";
import homepage from "./components/homepagecomponent.js";
import QuickPage from "./components/quickpagecomponent.js";
import Advancedpage from "./components/advancedpagecomponent";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Router>
      <br />
      <Route path="/" exact component={homepage} />
      <Route path="/quick" exact component={QuickPage} />
    <Route path="/advanced" exact component={Advancedpage} />    
    </Router>
    </div>

  );
}

export default App;
