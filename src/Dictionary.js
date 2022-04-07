import React, { useState } from "react";
import axios from "axios";
import Definitions from "./Definitions";
import "./Dictionary.css";

export default function Dictionary() {
  let [search, setSearch] = useState("");
  let [result, setResult] = useState(null);

  return (
    <div className="Dictionary">
      <h2>Find the elucidation of:</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`;
          axios.get(apiUrl).then((response) => {
            setResult(response.data[0]);
          });
        }}
      >
        <input
          type="search"
          className="input-box"
          placeholder="Search..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </form>
      <Definitions result={result} />
    </div>
  );
}
