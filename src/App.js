import React from "react";
import Header from "./components/header/Header";
import "./App.css";
import InfoBlock from "./components/Infoblock/InfoBlock";
import MyMission from "./components/MyMission";
import Carousel from "./components/Carousel";
import CanDo from "./components/CanDo";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <InfoBlock />
      <MyMission />
      <div className="black_zone">
        <Carousel />
        <CanDo />
        <Footer />
      </div>
    </div>
  );
}

export default App;
