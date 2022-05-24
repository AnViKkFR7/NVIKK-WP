import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const SignInContainer = styled.div`
  color: #6e6b6e;
  background: #fdf6e4;
  vertical-align: middle;
  padding-top: 20px;
  font-family: 'Times New Roman', Times, serif;

  @media screen and (max-width: 910px) {
    padding: 10px;
  }
`;

export const SignInWrapper = styled.div`
  height: 865px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const SignInCard = styled.div`
  height: fit-content;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  border-radius: 15px;
  background-color: white;
  display: grid;
  box-shadow: 0 1px 15px rgb(210, 210, 210);

  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 910px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const SignInInfoWrapper = styled.div`
  margin-bottom: 15px;
  margin-top: 15px;
  grid-area: col1;
  text-align: center;
  align-items: center;
  display: grid;
  grid-template-rows: 1fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 1fr;
`;

export const SignInInfoRow = styled.div`
  margin: 0;
  padding: 0;
`;

export const InputGroup = styled.div`
  border-radius: 30px;
  width: 65%;
  margin-left: auto;
  margin-right: auto;
`;

export const InputGrupPretend = styled.div``;

export const InputImageSpan = styled.span``;

export const InputImage = styled.img`
  width: 20px;
  height: 20px;
  align-items: center;
`;

export const WelcomeText = styled.p`
  font-size: 30px;
  line-height: 16px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #fb8b24;
  font-style: oblique;
  font-weight: 20;
  letter-spacing: 0.1px;
  display: contents;
`;

export const OrBr = styled.p`
  margin-top: 10px;

  &:before {
    background-color: #6e6b6e;
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 20%;
  }

  &:after {
    background-color: #6e6b6e;
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 20%;
  }
`;

export const SignUpText = styled.p`
`;

export const SignInText = styled.p`
`;

export const PwInput = styled.input`
  border-radius: 30px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const UserInput = styled.input`
  border-radius: 30px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const SignInButton = styled.button`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border-radius: 30px;
  height: 36px;
  width: 358.5px;
  margin-left: auto;
  margin-right: auto;
  border: 0;
  color: white;
  background: rgb(237, 3, 3);
  background: linear-gradient(
    251deg,
    rgba(237, 3, 3, 1) 5%,
    rgba(255, 126, 24, 1) 100%
  );
  box-shadow: 2px 2px 10px 0.05px rgb(230, 40, 10, 100);

  &:hover {
    text-decoration: line-through;
  }
`;

export const SignInImageWrapper = styled.div`
  grid-area: col2;

  @media screen and (max-width: 910px) {
    border-top-right-radius: 0px;
  }
`;

export const SignInImage = styled.img`
  width: 100%;
  height: 100%;
  margin: 0;
  padding-right: 0;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;

  @media screen and (max-width: 910px) {
    border-top-right-radius: 0px;
    border-bottom-left-radius: 15px;
    height: 55%;
  }
`;

export const SocialMediaRow = styled.div`
  color: #c7c6c4;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 0px;
  justify-items: center;
`;

export const SMIcon = styled.div`
  margin-top: 15%;
  width: 40%;
  align-items: center;
  justify-content: center;
`;

export const SignInButtonLink = styled(LinkR)``;
