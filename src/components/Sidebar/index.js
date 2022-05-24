import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBarLink,
  SideBarMenu,
  SidebarWrapper,
  SidebarRoute,
  SideBtnWrap,
} from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SideBarMenu>
            <SideBarLink to="about" onClick={toggle}>
              About
            </SideBarLink>
            <SideBarLink to="music" onClick={toggle}>
              Music
            </SideBarLink>
            <SideBarLink to="weekly-radio" onClick={toggle}>
              Weekly Radio
            </SideBarLink>
            <SideBarLink to="merchandasing" onClick={toggle}>
              Merchandasing
            </SideBarLink>
            <SideBarLink to="sign-up" onClick={toggle}>
              Sign Up
            </SideBarLink>
          </SideBarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/sign-in">Sign In</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
}

export default Sidebar;