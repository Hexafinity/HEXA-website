import React, { useState } from "react";
import BoardMember from "./BoardMember";
import Contact from "./Contact";
import Documents from "./Documents";
import Ecosystems from "./Ecosystems";
import FAQPage from "./FAQPage";
import Footer from "./Footer";
import Header from "./Header";
import ModelLoginPopup from "./ModelLoginPopup";
import MvpPage from "./MvpPage";
import Platform from "./Platform";
import PressNews from "./PressNews";
import RegisterPopup from "./RegisterPopup";
import RoadMap from "./RoadMap";
import TeamPage from "./TeamPage";
import TokenSale from "./TokenSale";

function HomePage() {
  const [modelOpen, setModelopen] = useState(false)
  return (
    <>
        <RoadMap />
        <TeamPage />
        <Ecosystems />
        <Platform />
        <MvpPage />
        <Documents />
        <PressNews />
        <FAQPage />
        <Contact /> 
    </>
  );
}

export default HomePage;
