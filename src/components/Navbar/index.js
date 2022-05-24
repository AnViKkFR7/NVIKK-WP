import React, { useEffect, useState } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavLogoImg,
  NavLinksDOM
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import NvikkLogoWhite from "../../images/logoTransparent.png";

const Navbar = ({ toggle, isMerch }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 200) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav} isMerch={isMerch}>
        <NavbarContainer>
          <NavLogo to="/#home">
            <NavLogoImg src={NvikkLogoWhite} />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/#about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/#music">Music</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/#weekly-radio">Weekly Radio</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinksDOM to="/merchandising">Merchandising</NavLinksDOM>
            </NavItem>
            <NavItem>
              <NavLinks to="/#contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
