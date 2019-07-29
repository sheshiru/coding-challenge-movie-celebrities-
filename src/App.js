//---------------------------------------
//CONFIG
//---------------------------------------
import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import NavMain from "./Components/NavMain";
import "./styles/scss/main.scss";

//---------------------------------------
//PAGES
//---------------------------------------
import PageTemperature from "./Pages/Temperature";
import PageCustomImg from "./Pages/CustomizeImage";
import PageCelebrities from "./Pages/Celebrities";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/temperature" component={PageTemperature} />
        <Route path="/customize-image" component={PageCustomImg} />
        <Route path="/celebrities" component={PageCelebrities} />
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </div>
  );
}

export default App;
