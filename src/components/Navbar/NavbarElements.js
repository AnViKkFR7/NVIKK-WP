import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { HashLink as LinkH } from "react-router-hash-link" 

export const Nav = styled.nav`
  background: ${({ scrollNav, isMerch }) => (isMerch ? "#000" : scrollNav ? "#000" : "transparent")};
  height: 64px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  box-shadow: ${({ scrollNav }) =>
    scrollNav ? "0 1px 8px rgb(31, 31, 31)" : "transparent"};

  @media screen and (max-width: 1028px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogoImg = styled.img`
  background: transparent;
  width: 100%;
  height: 100%;
`;

export const NavLogo = styled(LinkH)`
  color: #c7c6c4;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1028px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 30%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 1028px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkH)`
  color: #c7c6c4;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:active {
    border-bottom: 3px solid #e36414;
    text-decoration: none;
    color: #fff;
  }

  &:hover {
    border-bottom: 2px solid #e36414;
    text-decoration: none;
    color: #fff;
  }
`;

export const NavLinksDOM = styled(LinkR)`
  color: #c7c6c4;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:active {
    border-bottom: 3px solid #e36414;
    text-decoration: none;
    color: #fff;
  }

  &:hover {
    border-bottom: 2px solid #e36414;
    text-decoration: none;
    color: #fff;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1028px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  text-decoration: none;
  border-radius: 50px;
  background: #e36414;
  white-space: nowrap;
  padding: 10px 22px;
  color: #000;
  font-size: 14px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #c7c6c4;
    color: #010606;
    text-decoration: none;
    text-decoration: line-through;
  }
`;
