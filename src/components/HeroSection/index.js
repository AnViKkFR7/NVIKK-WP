import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroBtnWrapper,
  HeroContent,
  HeroH1,
  HeroP,
  ArrowRight,
} from "./HeroElement";
import Video from "../../videos/video3.mp4";
import { Button } from "../ButtonElement";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <HeroContainer id="home">
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1>NO &nbsp; NVIKK &nbsp; NO &nbsp; PARTY</HeroH1>
          <HeroP>
            Join the community signing up and enjoy tons of free content and
            exclusive merchandising drops.
          </HeroP>
          <HeroBtnWrapper>
            <Button to="sign-up" onMouseEnter={onHover} onMouseLeave={onHover}>
              GET STARTED <ArrowRight />
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
