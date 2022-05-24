import React, { useState, useEffect } from "react";
import {
  MusicContainer,
  MusicWrapper,
  SpotifyPlaylistWrapper,
  MusicRowLatest,
  TopLine,
  MusicRow,
  Heading,
  TextWrapper,
  Column1,
  Column2,
  LatestUploadImgWrapper,
  HeadingPlaylist
} from "./MusicElement";
import PlayWidget from "react-spotify-widgets";
import IframeComponent from "./IframeComponent";

const MusicSection = ({
  playlistText,
  topLine,
  lightBg,
  altFavSongs2,
  altFavSongs1,
  imgFavSongs2,
  imgFavSongs1,
  imgFavSongs3,
  altFavSongs3,
  imgLastUpload3,
  favText,
  latestText,
  altLastUpload1,
  altLastUpload2,
  imgLastUpload1,
  imgLastUpload2,
  uriLastUpload3,
  uriLastUpload2,
  uriLastUpload1,
  uriFavSong1,
  uriFavSong2,
  uriFavSong3,
  id
}) => {

  const [height, setHeight] = useState(508);
  const [thinWebpage, setThinWebpage] = useState(false);

  const changeWidth = () => {
    console.log(window.innerWidth);
    if (window.innerWidth < 768) {
      setHeight(300);
      setThinWebpage(true);
    } else {
      setHeight(508);
      setThinWebpage(false);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', changeWidth)

    return _ => {
      window.removeEventListener('resize', changeWidth);
    }
  }, []);


  return (
    <>
      <MusicContainer  id={id} lightBg={lightBg}>
        <MusicWrapper id="MusicWrapper">
          <MusicRow id="MusicRowPrincipal">
            <Column1 id="Column1">
              <TextWrapper>
                <TopLine id="TopLine">{topLine}</TopLine>
                <Heading id="Heading">{latestText}</Heading>
              </TextWrapper>
              <MusicRowLatest id="MusicRowLatest">
                <Column1>
                  <LatestUploadImgWrapper id="LatestUploadImgWrapper2">
                    <IframeComponent
                      img={imgLastUpload2}
                      alt={altLastUpload2}
                      uri={uriLastUpload2}
                    />
                  </LatestUploadImgWrapper>
                </Column1>
                <Column1>
                  <LatestUploadImgWrapper id="LatestUploadImgWrapper1">
                    <IframeComponent
                      img={imgLastUpload1}
                      alt={altLastUpload1}
                      uri={uriLastUpload1}
                    />
                  </LatestUploadImgWrapper>
                </Column1>
                <Column1>
                  <LatestUploadImgWrapper id="LatestUploadImgWrapper1">
                    <IframeComponent
                      img={imgLastUpload3}
                      alt={altLastUpload2}
                      uri={uriLastUpload3}
                    />
                  </LatestUploadImgWrapper>
                </Column1>
              </MusicRowLatest>

              <TextWrapper>
                <Heading>{favText}</Heading>
              </TextWrapper>
              <MusicRowLatest>
                <Column1>
                  <LatestUploadImgWrapper id="LatestUploadImgWrapper1">
                    <IframeComponent
                      img={imgFavSongs1}
                      alt={altFavSongs1}
                      uri={uriFavSong1}
                    />
                  </LatestUploadImgWrapper>
                </Column1>
                <Column1>
                  <LatestUploadImgWrapper id="LatestUploadImgWrapper2">
                    <IframeComponent
                      img={imgFavSongs2}
                      alt={altFavSongs2}
                      uri={uriFavSong2}
                    />
                  </LatestUploadImgWrapper>
                </Column1>
                <Column1>
                  <LatestUploadImgWrapper id="LatestUploadImgWrapper3">
                    <IframeComponent
                      img={imgFavSongs3}
                      alt={altFavSongs3}
                      uri={uriFavSong3}
                    />
                  </LatestUploadImgWrapper>
                </Column1>
              </MusicRowLatest>
            </Column1>
            <Column2>
              <HeadingPlaylist thinWebpage={thinWebpage}>{playlistText}</HeadingPlaylist>
              <SpotifyPlaylistWrapper thinWebpage={thinWebpage}>
                <PlayWidget
                  width={300}
                  height={height}
                  uri={"spotify:playlist:5b7LvwJ0mSaKm1BFzVe5ty"}
                  lightTheme={false}
                />
              </SpotifyPlaylistWrapper>
            </Column2>
          </MusicRow>
        </MusicWrapper>
      </MusicContainer>
    </>
  );
};

export default MusicSection;
