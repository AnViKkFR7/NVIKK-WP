import styled from 'styled-components'
import { MdKeyboardArrowRight } from 'react-icons/md'

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 865px;
    position: relative;
    z-index: 1;

    /* Add :before styles */
    :before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;
  font-family: "Monoton", cursive;
  background: linear-gradient(
    219deg,
    #186cb8 19%,
    transparent 19%,
    transparent 20%,
    #2a9a9f 20%,
    #2a9a9f 39%,
    transparent 39%,
    transparent 40%,
    #f1b211 40%,
    #f1b211 59%,
    transparent 59%,
    transparent 60%,
    #e83611 60%,
    #e83611 79%,
    transparent 79%,
    transparent 80%,
    #d102ca 80%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: color-rotation 4s infinite;

  @keyframes color-rotation {
    0% {
      filter: hue-rotate(0deg);
    }
    50% {
      filter: hue-rotate(180deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
  
  

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 18px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;