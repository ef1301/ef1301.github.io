import React from "react";

function RenderSmoothImage({src, alt, id}) {
    const [imageLoaded, setImageLoaded]=React.useState(false);

    return (
      <div className="smooth-image-wrapper">
        <img
          id={id}
          src={src}
          alt={alt}
          className={`smooth-image image-${
            imageLoaded ? 'visible' :  'hidden'
          }`}
          onLoad={()=> setImageLoaded(true)}
        />
        {!imageLoaded && (
          <div className="smooth-preloader">
            <span className="loader" />
          </div>
        )}
      </div>
    )
}

export default RenderSmoothImage;