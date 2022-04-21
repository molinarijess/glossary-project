import React from "react";

export default function DisplayPhotos({ photo }) {
  if (photo) {
    return (
      <div className="DisplayPhotos">
        {photo.photos.map((imgs, index) => {
          if (index < 3) {
            return <img src={imgs.src.portrait} alt={imgs.alt} key={index} />;
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    return null;
  }
}
