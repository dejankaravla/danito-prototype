import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./Strane/Strana 1/LandingPage";
import PvcProzori1 from "./Strane/Proizvodi/Prozori/PvcProzor1";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/PVC PROZOR 1">
            <PvcProzori1 />
          </Route>
          <Route path="/PVC PROZOR 2">
            <PvcProzori1 />
          </Route>
          <Route path="/PVC PROZOR 3">
            <PvcProzori1 />
          </Route>
          <Route path="/PVC PROZOR 4">
            <PvcProzori1 />
          </Route>
          <Route path="/PVC PROZOR 5">
            <PvcProzori1 />
          </Route>
          <Route path="/DRVENI PROZOR 1">
            <PvcProzori1 />
          </Route>
          <Route path="/DRVENI PROZOR 2">
            <PvcProzori1 />
          </Route>
          <Route path="/DRVENI PROZOR 3">
            <PvcProzori1 />
          </Route>
          <Route path="/DRVO ALUMINIUM PROZOR 1">
            <PvcProzori1 />
          </Route>
          <Route path="/DRVO ALUMINIUM PROZOR 2">
            <PvcProzori1 />
          </Route>
          <Route path="/DRVO ALUMINIUM PROZOR 3">
            <PvcProzori1 />
          </Route>
          <Route path="/ALUMINIUM PROZOR 1">
            <PvcProzori1 />
          </Route>
          <Route path="/ALUMINIUM PROZOR 2">
            <PvcProzori1 />
          </Route>
          <Route path="/ALUMINIUM PROZOR 3">
            <PvcProzori1 />
          </Route>
          <Route path="/ALUMINIUM PROZOR 4">
            <PvcProzori1 />
          </Route>
          <Route path="/PVC VRATA 1">
            <PvcProzori1 />
          </Route>
          <Route path="/PVC VRATA 2">
            <PvcProzori1 />
          </Route>
          <Route path="/DRVENA VRATA 1">
            <PvcProzori1 />
          </Route>
          <Route path="/DRVENA VRATA 2">
            <PvcProzori1 />
          </Route>
          <Route path="/DRVENA VRATA 3">
            <PvcProzori1 />
          </Route>
          <Route path="/DRVENA VRATA 4">
            <PvcProzori1 />
          </Route>
          <Route path="/ALUMINIUM VRATA 1">
            <PvcProzori1 />
          </Route>
          <Route path="/ALUMINIUM VRATA 2">
            <PvcProzori1 />
          </Route>
          <Route path="/ALUMINIUM VRATA 3">
            <PvcProzori1 />
          </Route>
          <Route path="/ALUMINIUM VRATA 4">
            <PvcProzori1 />
          </Route>
          <Route path="/PVC ROLETNE 1">
            <PvcProzori1 />
          </Route>
          <Route path="/PVC ROLETNE 2">
            <PvcProzori1 />
          </Route>
          <Route path="/ALUMINIUM ROLETNE 1">
            <PvcProzori1 />
          </Route>
          <Route path="/ALUMINIUM ROLETNE 2">
            <PvcProzori1 />
          </Route>
          <Route path="/ALUMINIUM ROLETNE 3">
            <PvcProzori1 />
          </Route>
          <Route path="/ALUMINIUM ROLETNE 4">
            <PvcProzori1 />
          </Route>
          <Route path="/PVC KOMARNICI 1">
            <PvcProzori1 />
          </Route>
          <Route path="/PVC KOMARNICI 2">
            <PvcProzori1 />
          </Route>
          <Route path="/ALUMINIUM KOMARNICI 1">
            <PvcProzori1 />
          </Route>
          <Route path="/ALUMINIUM KOMARNICI 2">
            <PvcProzori1 />
          </Route>
          <Route path="/ALUMINIUM KOMARNICI 3">
            <PvcProzori1 />
          </Route>
          <Route path="/ALUMINIUM KOMARNICI 4">
            <PvcProzori1 />
          </Route>
          <Route path="/PVC PANELI 1">
            <PvcProzori1 />
          </Route>
          <Route path="/PVC PANELI 2">
            <PvcProzori1 />
          </Route>
          <Route path="/ALUMINIUM PANELI 1">
            <PvcProzori1 />
          </Route>
          <Route path="/ALUMINIUM PANELI 2">
            <PvcProzori1 />
          </Route>
          <Route path="/ALUMINIUM PANELI 3">
            <PvcProzori1 />
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
