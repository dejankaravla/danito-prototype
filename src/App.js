import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import AppSR from "./AppSR/AppSR";
import AppEN from "./AppEN/AppEN";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <AppSR />
          </Route>
          <Route path="/EN">
            <AppEN />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
