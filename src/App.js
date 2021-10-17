import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./Strane/Strana 1/LandingPage";
import ProductPage from "./Strane/ProductPage/ProductPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/product">
            <ProductPage />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
