import React from 'react'
import "uikit/dist/css/uikit.min.css";

const IframeComponent = ({img, alt, uri}) => {
  return (
    <>
      <div className="">
        <div className="uk-inline-clip uk-transition-toggle" tabIndex="0">
          <img src={img} width="250" height="250" alt={alt}/>
          <div className="uk-transition-slide-bottom uk-position-bottom">
            <iframe
              width='100%'
              height="75"
              scrolling="no"
              frameBorder="no"
              src={uri}
              title={alt}
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default IframeComponent;