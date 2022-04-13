import React from "react";
import "./Synonyms.css";

export default function Synonyms({ synonyms }) {
  if (synonyms) {
    return (
      <div className="Synonyms">
        {synonyms.map((synonym, index) => {
          return (
            <span className="synonym" key={index}>
              {synonym}
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
