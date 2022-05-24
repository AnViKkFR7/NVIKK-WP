import styled from "styled-components";


export const BottombarContainer = styled.div`
  background: #010606;
  height: 70px;
  width: 100%;
  position:fixed;
  padding: 0px;
  left: 0;
  bottom: 0;
  z-index: 100;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;