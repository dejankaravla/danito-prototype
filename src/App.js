import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import AppSrpiski from "./Strane/Strana 1/AppSrpski";
import PvcProzori1 from "./Strane/Proizvodi/Prozori/PvcProzor1";

function App() {
  return (
    <div className="App">
      {/* <Router>
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
          <Route path="/PVC FASADE 1">
            <PvcProzori1 />
          </Route>
          <Route path="/PVC FASADE 2">
            <PvcProzori1 />
          </Route>
          <Route path="/ALUMINIUM FASADE 1">
            <PvcProzori1 />
          </Route>
          <Route path="/ALUMINIUM FASADE 2">
            <PvcProzori1 />
          </Route>
          <Route path="/ALUMINIUM FASADE 3">
            <PvcProzori1 />
          </Route>
          <Route path="/ALUMINIUM FASADE 4">
            <PvcProzori1 />
          </Route>
          <Route path="/PVC TERASNI SISTEMI 1">
            <PvcProzori1 />
          </Route>
          <Route path="/PVC TERASNI SISTEMI 2">
            <PvcProzori1 />
          </Route>
          <Route path="/ALUMINIUM TERASNI SISTEMI 1">
            <PvcProzori1 />
          </Route>
          <Route path="/ALUMINIUM TERASNI SISTEMI 2">
            <PvcProzori1 />
          </Route>
          <Route path="/ALUMINIUM TERASNI SISTEMI 3">
            <PvcProzori1 />
          </Route>
          <Route path="/DODATNO">
            <PvcProzori1 />
          </Route>
          <Route path="/">
          </Route>
        </Switch>
      </Router> */}
      <AppSrpiski />
    </div>
  );
}

export default App;
