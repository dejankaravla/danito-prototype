import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import AppENG from "./AppENG/AppENG";
import AppSr from "./AppSr";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <AppENG />
          </Route>
          <Route path="/SR">
            <AppSr />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
