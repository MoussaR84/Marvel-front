import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Container/Header";
import Footer from "./Container/Footer";
import Comics from "./Container/Comics";
import Home from "./Container/Home";
import Character from "./Component/Character";
import Myfavs from "./Container/Myfavs";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/myfavs">
          <Myfavs />
        </Route>
        <Route path="/characters/:id">
          <Character />
        </Route>
        <Route path="comics">
          <Comics />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
