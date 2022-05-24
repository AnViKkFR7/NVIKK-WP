import styled from "styled-components";

export const WeeklyRadioContainer = styled.div`
  color: #393839;
  background: #fdf6e4;
  vertical-align: middle;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const WeeklyRadioWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 865px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 0px;
  justify-content: center;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-columns: 20% 80%;
  grid-gap: 10px;
  align-items: center;

  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    height: 1330px;
  }
`;

export const WeeklyRadioListWrapper = styled.div`
  grid-area: col1;
  margin-bottom: 0px;
  padding: 0 15px;
  width: 100%;
  height: 75%;
`;

export const WeeklyRadioSongsColWrapper = styled.div`
  grid-area: col2;
  width: 100%;
  margin-left: 20px;
  padding: 0 15px;
  align-items: center;
  justify-content: center;
  text-align: justify;
  align-content: center;
  display: ${({ showModal }) => (showModal ? "block" : "none")};
  animation: ${({ open }) =>
    open
      ? "openModal 0.8s ease-out forwards"
      : "closeModal 0.8s ease-out forwards"};

  @keyframes openModal {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes closeModal {
    0% {
      transform: translateY(0);
      opacity: 100%;
    }
    100% {
      transform: translateY(100%);
      opacity: 0%;
    }
  }

  @media screen and (max-width: 768px) {
    width: fit-content;
    margin: auto;
    margin-top: -150px;
  }
`;

export const WeeklyRadioList = styled.ul`
  column-count: 1;
  flex-direction: column;
  display: flex;
  height: 530px;
  padding-left: 0;

  overflow-y: scroll;
  
  &::-webkit-scrollbar {
    background-color: transparent;
  }

  @media screen and (max-width: 768px) {
    width: fit-content;
    margin: auto;
  }
`;

export const HeaderWrapper = styled.div`
  vertical-align: top;
  text-align: left;
`;

export const WeeklyRadioIcon = styled.img`
  width: 90%;
  padding-right: 0;
  cursor: pointer;
  filter: ${({selected}) => (selected? 'grayscale(100%)' : 'grayscale(0%)')};

  @media screen and (max-width: 768px) {
    width: 180px;
  }
`;

export const IconWrapper = styled.li`
  margin-top: 5px;
  display: inline-block;
  position: relative;
`;

export const WeeklyRadioListHeader = styled.p`
  color: #fb8b24;
  font-size: 30px;
  line-height: 25px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  display: inline-block;
  margin-bottom: 0;
`;

export const WeeklyRadioListHeader2 = styled.p`
  color: #393839;
  font-size: 30px;
  line-height: 25px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 2px;
  padding-bottom: 20px;
  display: inline-block;
  margin-top: 0;
  text-decoration: line-through #fb8b24;
`;







export const WeeklyRadioSongsWrapper = styled.div`
  color: #c7c6c4;
  background: #4a4e40;
  vertical-align: middle;
  margin-right: -100%;
  margin-top: 83px;
  height: 525px;
  display: grid;

  @media screen and (max-width: 768px) {
    padding: 10px 0;
    height: 555px;
  }
`;

export const WeeklyRadioSongsHeaderRow = styled.div`
  display: grid;
  z-index: 1;
  height: 25%;
  width: 100%;
  max-width: 1100px;
  padding: 10px;
  justify-content: center;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-columns: 25% 75%;
  grid-gap: 10px;
  align-items: center;
`;

export const WeeklyRadioSongsIconWrapper = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  display: grid;
  position: relative;
`;

export const WeeklyRadioSongsIcon = styled.img`
  padding-right: 0;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 180px;
  }
`;

export const WeeklyRadioSongsTitleWrapper = styled.div`
  margin-bottom: 0;

  @media screen and (max-width: 768px) {
    width: 300px;
  }

  @media screen and (max-width: 968px) {
    width: 500px;
  }

  @media screen and (max-width: 1168px) {
    width: 700px;
  }
`;

export const WeeklyRadioSongsTitle = styled.p`
  font-size: xxx-large;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: x-large;
  }

  @media screen and (max-width: 968px) {
    font-size: medium;
  }

  @media screen and (max-width: 1168px) {
    font-size: xx-large;
  }
`;

export const WeeklyRadioSongsTitleInfo = styled.p`
  font-family: "Karla", Helvetica, Arial, sans-serif;
`;

export const WeeklyRadioSongsYoutubeLink = styled.button`
  font-family: "Karla", Helvetica, Arial, sans-serif;
  text-decoration: none;
  color: #c7c6c4;
  border-color: #c7c6c4;
  background-color: transparent;
  border: 1px solid #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  outline: none;
  white-space: nowrap;
  padding: 7px 15px;

  &:hover {
    text-decoration: line-through #c7c6c4;
    color: #fb8b24;
    transition: all 0.2s ease-in-out;
    border: 1px solid #fb8b24;
  }
`;

export const WeeklyRadioSongsListRow = styled.div`
  display: block;
  z-index: 1;
  height: 75%;
  width: 100%;
  max-width: 1100px;
  padding: 10px;
  grid-gap: 10px;
`;

export const WeeklyRadioSongsListTable = styled.ul`
  overflow-y: scroll;
  max-height: 100%;
  max-width: 830px;
  background-color: transparent;
  column-count: 1;
  flex-direction: column;
  display: flex;
  margin-left: 20px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    -webkit-appearance: none;
     width: 15px;
     height: 15px;
     border:1px solid black;
     background-color: black;
  }

  @media screen and (max-width: 768px) {
    font-size: small;
    width: 50%;
    height: 250px;
  }

  @media screen and (max-width: 968px) {
    font-size: small;
    width: 50%;
    height: 250px;
  }

  @media screen and (max-width: 1168px) {
    font-size: small;
    width: 60%;
    height: 250px;
  }
`;

export const WeeklyRadioSongsListItem = styled.li`
  border: 0;
  margin-bottom: 0;
  border-bottom: 1px solid #fb8b24;
  font-weight: 200;
  text-transform: uppercase;
  display: block;
  padding: 0.7em 0;
  position: relative;
  -webkit-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
  counter-increment: song;

  ::before{
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-color: #212121;
    border-radius: 50%;
    color: #fff;
    font-size: 14px;
    content: counter(song);
    display: block;
    padding: 7px 8px;
    float: left;
    position: relative;
    margin-right: 15px;
    text-align: center;
    font-weight: 200;
    height: 32px;
    width: 32px;
    top: -5px;
  }
`;





