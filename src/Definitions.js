import React from "react";
import "./Definitions.css";

export default function Definitions({ result }) {
  console.log(result);
  if (result) {
    return (
      <div className="Definitions">
        <section className="result-name">
          <h3>{result.word}</h3>
          <span className="explanation-word">{result.phonetics[0].text}</span>
        </section>{" "}
        {result.meanings.map((meaning, index) => {
          return (
            <p key={index}>
              <span className="explanation-word">{meaning.partOfSpeech}</span>{" "}
              {meaning.definitions[0].definition}
            </p>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
