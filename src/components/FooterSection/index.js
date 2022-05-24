import React, { useEffect, useState } from "react";
import {
  FooterContainer,
  FooterRowBottom,
  FooterWrapper,
  Copyright,
  FooterRowSocialMedia,
  SMIcon,
  Created
} from "./FooterElement";
import "uikit/dist/css/uikit.min.css";

const FooterSection = ({uriInstagram, uriSoundCloud, uriYoutube, uriLinkedIn, copyright, created, contact}) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 1790 && window.scrollY <= 2647) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);

  return (
    <>
      <FooterContainer id="contact">
        <FooterWrapper id="FooterWrapper">
          <FooterRowSocialMedia className="uk-flex uk-flex-center">
            <SMIcon id="FooterColumn1"></SMIcon>
            <SMIcon id="FooterColumn2">
              <a
                href={uriYoutube}
                target="_blank"
                rel="noreferrer"
                data-uk-tooltip
                title="Youtube"
                pos="bottom"
              >
                <svg
                  fill="#c7c6c4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  className="social-icon footer-icon"
                >
                  <path d="M44.9,14.5c-0.4-2.2-2.3-3.8-4.5-4.3C37.1,9.5,31,9,24.4,9c-6.6,0-12.8,0.5-16.1,1.2c-2.2,0.5-4.1,2-4.5,4.3C3.4,17,3,20.5,3,25s0.4,8,0.9,10.5c0.4,2.2,2.3,3.8,4.5,4.3c3.5,0.7,9.5,1.2,16.1,1.2s12.6-0.5,16.1-1.2c2.2-0.5,4.1-2,4.5-4.3c0.4-2.5,0.9-6.1,1-10.5C45.9,20.5,45.4,17,44.9,14.5z M19,32V18l12.2,7L19,32z" />
                </svg>
              </a>
            </SMIcon>
            <SMIcon id="FooterColumn3">
              <a
                href={uriInstagram}
                target="_blank"
                rel="noreferrer"
                data-uk-tooltip
                title="Instagram"
                pos="bottom"
              >
                <svg
                  fill="#c7c6c4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  className="social-icon footer-icon"
                >
                  <path d="M34,3H16C8.83,3,3,8.83,3,16v18c0,7.17,5.83,13,13,13h18c7.17,0,13-5.83,13-13V16C47,8.83,41.17,3,34,3z M25,36c-6.07,0-11-4.93-11-11s4.93-11,11-11s11,4.93,11,11S31.07,36,25,36z M37,15c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S38.1,15,37,15z" />
                  <path d="M34,25c0,4.96-4.04,9-9,9s-9-4.04-9-9s4.04-9,9-9S34,20.04,34,25z" />
                </svg>
              </a>
            </SMIcon>
            <SMIcon id="FooterColumn4">
              <a
                href={uriSoundCloud}
                target="_blank"
                rel="noreferrer"
                data-uk-tooltip
                title="SoundCloud"
                pos="bottom"
              >
                <svg
                  fill="#c7c6c4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  className="social-icon footer-icon"
                >
                  <path d="M3 34.7c.6.399 1.3.8 2 1V22.3c-.7.2-1.4.5-2 1V34.7zM14 16.5c-.7.3-1.4.6-2 1V36h2V16.5zM8 36V22.1C7.7 22 7.3 22 7 22s-.7 0-1 .1v13.8C6.3 36 6.7 36 7 36H8zM2 24.1c-1.2 1.3-2 3-2 4.9s.8 3.6 2 4.9V24.1zM20 16.5c-.6-.2-1.3-.4-2-.5v20h2V16.5zM9 20.9V36h2V18.3C10.2 19 9.5 19.9 9 20.9zM17 16c-.7 0-1.4.1-2 .2V36h2V16z" />
                  <g>
                    <path d="M42.5,21c-0.5,0-1,0.1-1.5,0.2C40.5,15.5,35.8,11,30,11c-3.6,0-7,1.8-9,4.7V36h21.5c4.1,0,7.5-3.4,7.5-7.5C50,24.4,46.6,21,42.5,21z" />
                  </g>
                </svg>
              </a>
            </SMIcon>
            <SMIcon id="FooterColumn5">
              <a
                href={uriLinkedIn}
                target="_blank"
                rel="noreferrer"
                data-uk-tooltip
                title="Linkedin"
                pos="bottom"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#c7c6c4"
                  viewBox="0 0 30 30"
                  className="social-icon footer-icon"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </SMIcon>
            <SMIcon id="FooterColumn6"></SMIcon>
          </FooterRowSocialMedia>
          <FooterRowBottom id="FooterRowBottom">
            <Copyright id="Copyright">&copy;{copyright}</Copyright>
            <Copyright id="contact">{contact}</Copyright>
            {/*<Created id="Created" scrollNav={scrollNav}>{created}</Created>*/}
          </FooterRowBottom>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default FooterSection;
