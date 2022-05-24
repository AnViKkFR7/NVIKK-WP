import React, { useState } from 'react';
import {AboutContainer, AboutWrapper, Column1, Column2, TextWrapper, TopLine, Heading, AboutRow, Subtitle, BtnWrap, ImgWrap, Img, ArrowRight} from './AboutElements';
import {Button, ButtonHref} from '../ButtonElement';

const AboutSection = ({lightBg, id, imgStart, topLine, lightText, headline, description, darkText, buttonLabel, description2, img, alt}) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }
  
  return (
    <>
      <AboutContainer lightBg={lightBg} id={id}>
        <AboutWrapper>
          <AboutRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <br/>
                <Subtitle darkText={darkText}>{description2}</Subtitle>
                <br/>
                <BtnWrap>
                  <Button onMouseEnter={onHover} onMouseLeave={onHover} hover={hover}>
                    <ButtonHref href='https://soundcloud.com/anvikk-yt/tracks' target='_blank' hover={hover}>{buttonLabel} <ArrowRight hover={hover}/></ButtonHref>
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt}/>
              </ImgWrap>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
}

export default AboutSection;