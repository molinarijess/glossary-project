import React from "react";

export default function DisplayPhotos({ photo }) {
  if (photo) {
    return (
      <div className="DisplayPhotos">
        {photo.photos.map((imgs, index) => {
          return <img src={imgs.src.portrait} alt={imgs.alt} key={index} />;
        })}
      </div>
    );
  } else {
    return null;
  }
}
