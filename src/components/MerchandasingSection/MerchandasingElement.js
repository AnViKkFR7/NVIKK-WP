import styled from "styled-components";

export const MerchandasingContainer = styled.div`
  color: #010606;
  background: ${({ lightBg }) => (lightBg ? "#fdf6e4" : "#101212")};
  vertical-align: middle;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const MerchandasingWrapper = styled.div`
  display: block;
  z-index: 1;
  height: 1200px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  text-align: -webkit-center;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 110px;
  padding-bottom: 50px;
`;

export const Header = styled.p`
  color: #fb8b24;
  font-size: 30px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 2px;
  padding-bottom: 0px;
`;

export const MerchandasingGrid = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-columns: repeat(1fr, 1fr);
  grid-gap: 10px;
  align-items: center;
`;

export const MerchandasingRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  align-items: center;
  padding-bottom: 20px;
  padding-top: 20px;
`;

export const MerchandasingCard = styled.div`
  background: "transparent";
  width: 350px;
  min-width: 300px;
  height: 400px;
  padding: 3px;
  position: relative;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  display: block;
  font-size: 1.5em;
  color: #c7c6c4;
  cursor: pointer;
  font-family: cursive;
  border-radius: 30px;
`;

export const ProductImgWrapper = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 20px;
  margin-top: 5px;
  align-items: center;
  text-align: center;
`;

export const ProductText = styled.p`
  margin-top: -20px;
  color: #c7c6c4;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  text-align: center;
  margin-bottom: 5px;
  font-size: large;
`;

export const ProductPrice = styled.p`
  color: #c7c6c4;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  text-align: center;
  margin-bottom: 5px;
  font-size: medium;
`;

export const BuyButton = styled.button`
  border-radius: 0px;
  width: 150px;
  margin-bottom: 15px;
  background: transparent;
  padding: 8px 20px;
  color: #c7c6c4;
  font-size: 14px;
  outline: none;
  border: 1px solid #c7c6c4;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.1s ease-in;

  &:hover {
    transition: all 0.1s ease-in;
    text-decoration: line-through;
    color: #e36414;
    background: #393839;
    border: 1px solid #e36414;
  }
`;
