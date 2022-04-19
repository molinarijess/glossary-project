import React from "react";
import Synonyms from "./Synonyms";
import Photos from "./Photos";
import "./Definitions.css";

export default function Definitions({ result }) {
  if (result) {
    return (
      <div className="Definitions">
        <section className="result-name">
          <h3>{result.word}</h3>
          <span className="explanation-word">{result.phonetics[0].text}</span>
        </section>{" "}
        {result.meanings.map((meaning, index) => {
          return (
            <div className="meanings" key={index}>
              <Synonyms synonyms={meaning.synonyms} />
              <span className="explanation-word">
                {meaning.partOfSpeech}
              </span>{" "}
              {meaning.definitions[0].definition}
            </div>
          );
        })}
        <Photos photo={result.word} />
      </div>
    );
  } else {
    return null;
  }
}
