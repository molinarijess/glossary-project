import React from "react";
import Synonyms from "./Synonyms";
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
              <span className="explanation-word">{meaning.partOfSpeech}</span>{" "}
              {meaning.definitions[0].definition}
              <Synonyms synonyms={meaning.synonyms} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
