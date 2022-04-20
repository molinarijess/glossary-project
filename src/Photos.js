import React, { useState } from "react";
import DisplayPhotos from "./DisplayPhotos";
import axios from "axios";
import "./Photos.css";

export default function Photos({ photo }) {
  const [photoUrl, setPhotoUrl] = useState("");
  const apiKey = "563492ad6f91700001000001320cc39e78714ab1b2d56bd33d6eaae4";
  let apiUrl = `https://api.pexels.com/v1/search?query=${photo}&per_page=6`;
  axios
    .get(apiUrl, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
    .then((response) => setPhotoUrl(response.data));

  return (
    <div className="Photos">
      <DisplayPhotos photo={photoUrl} />
    </div>
  );
}
