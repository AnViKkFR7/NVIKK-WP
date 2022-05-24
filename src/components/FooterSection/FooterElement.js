import styled from "styled-components";

export const FooterContainer = styled.div`
  color: #7f7eff;
  background: #101212;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const FooterWrapper = styled.div`
  z-index: 1;
  height: 250px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  display: block;
`;

export const SMIcon = styled.div`
  margin-top: 15%;
  width: 25%;
  align-items: center;
  justify-content: center;
`;

export const FooterRowSocialMedia = styled.div`
  color: #c7c6c4;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  justify-items: center;
`;

export const FooterRowBottom = styled.div`
  height: 20%;
  color: #c7c6c4;
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 20px;
`;

export const Copyright = styled.p`
  font-size: 15px;
  line-height: 16px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  margin: 0 0 5px 0px;
  font-family: 'Lexend', sans-serif;
`;

export const Created = styled.p`
  color: ${({scrollNav}) => (scrollNav ? '#101212' : '#c7c6c4')};
  font-size: 17px;
  line-height: 16px;
  font-weight: 300;
  position: fixed;
  bottom: 0;
  right: 0;
  height: 72px;
  margin-right: 10px;
  z-index: 1;
`;
