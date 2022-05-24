import React, { useState } from "react";
import Merchandasing from "../components/MerchandasingSection/Merchandasing";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Bottombar from "../components/Bottombar";
import FooterSection from "../components/FooterSection";
import { footerObj } from "../components/FooterSection/Data";
import ScrollToTop from '../components/ScrollToTop';

const MerchandisingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} isMerch={true}/>
      <Merchandasing />
      <FooterSection {...footerObj}/>
      <Bottombar />
    </>
  );
};

export default MerchandisingPage;
