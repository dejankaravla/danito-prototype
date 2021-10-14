import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./Komponente/NavBar/Nav";
import Slider from "./Komponente/Slider/Slider";
import ProductsSocialNav from "./Komponente/ProductsSocialNav/ProductsSocialNav";
import LineAnimation from "./Komponente/LineAnimation/LineAnimation";
import ProductWindow from "./Komponente/ProductWindow/ProductWindow";
import Inspiration from "./Komponente/Inspiration/Inspiration";
import CompanyPresentation from "./Komponente/CompanyPresentation/CompanyPresentation";
import Footer from "./Komponente/Footer/Footer";

function App() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setScroll(window.scrollY);
    };
  }, [scroll]);

  return (
    <div className="App">
      <div className="App__containerFirst">
        <Nav />
        <Slider />
        <ProductsSocialNav />
      </div>
      <LineAnimation header1={"Select your windows"} scroll={scroll} scrollY={200} />
      <ProductWindow />
      <LineAnimation header1={"Inspiration"} scroll={scroll} scrollY={800} />
      <Inspiration />
      <CompanyPresentation scroll={scroll} scrollY={2200} />
      <Footer />
    </div>
  );
}

export default App;
