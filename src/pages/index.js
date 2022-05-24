import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import { aboutObjOne } from "../components/AboutSection/Data";
import { musicObjOne } from "../components/MusicSection/Data";
import MusicSection from "../components/MusicSection";
import Bottombar from "../components/Bottombar";
import FooterSection from "../components/FooterSection";
import { footerObj } from "../components/FooterSection/Data";
import WeeklyRadioSection from "../components/WeeklyRadioSection/WeeklyRadioSection";
import { weeklyRadioObj } from '../components/WeeklyRadioSection/Data';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} isMerch={false} />
      <Bottombar />
      <HeroSection />
      <AboutSection {...aboutObjOne} />
      <MusicSection {...musicObjOne} />
      <WeeklyRadioSection weeklyRadioObj={weeklyRadioObj} />
      <FooterSection {...footerObj} />
    </>
  );
};

export default Home;
