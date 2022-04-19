import React, { useState } from "react";
import axios from "axios";
import "./Photos.css";

export default function Photos({ photo }) {
  const [photoUrl, setPhotoUrl] = useState("");
  const apiKey = "563492ad6f91700001000001320cc39e78714ab1b2d56bd33d6eaae4";
  let apiUrl = `https://api.pexels.com/v1/search?query=${photo}&per_page=1`;
  axios
    .get(apiUrl, {
      headers: {
        Authorization: `${apiKey}`,
      },
    })
    .then((e) => setPhotoUrl(e.data.photos[0].src.small));

  return (
    <div className="Photos">
      <img src={photoUrl} alt={photo} />
    </div>
  );
}
