import styled from "styled-components";

export const MusicContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#101212")};
  vertical-align: middle;
  
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const MusicWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 865px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const SpotifyPlaylistWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
  height: ${({thinWebpage}) => (thinWebpage ? '260px' : '523px')};
`;

export const MusicRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-columns: 70% 30%;
  grid-gap: 10px;
  align-items: center;

  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const MusicRowLatest = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  align-items: center;
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  width: 100%;
`;

export const Column2 = styled.div`
  width: 100%;
  margin-left: 20px;
  padding: 0 15px;
  align-items: center;
  justify-content: center;
  align-content: center;
  grid-area: col2;
`;

export const TopLine = styled.p`
  color: #fb8b24;
  font-size: 30px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 2px;
  padding-bottom: 20px;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
`;

export const Heading = styled.h1`
  margin-bottom: 19px;
  padding: 0 0px;
  font-size: 20px;
  line-height: 1.1;
  font-weight: 400;
  font-family: 'Monument Extended', sans-serif;

  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#c7c6c4")};

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const HeadingPlaylist = styled.h1`
  margin-bottom: 10px;
  padding: 0 0px;
  font-size: 20px;
  line-height: 1.1;
  font-weight: 400; 
  font-family: 'Monument Extended', sans-serif;
  

  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#c7c6c4")};

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const LatestUploadImgWrapper = styled.div`
  max-width: 900px;
  min-height: 120px;
  min-width: 120px;
  height: 220px;
  width: 220px;

  @media screen and (max-width: 768px) {
    height: 120px;
    width: 120px;
  }
`;
