import React from 'react'
import { BottombarContainer } from "./BottombarElement";

const Bottombar = () => {
  return (
    <>
      <BottombarContainer>
        <iframe
          id="nvikk-home-song"
          width="100%"
          height="100%"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          auto_play="false"
          background="none transparent!important"
          allowtransparency="true"
          title="nvikk-home-song"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1436575273&color=%231e202e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true&sharing=true&show_artwork=true"
        ></iframe>
      </BottombarContainer>
    </>
  );
}

export default Bottombar;