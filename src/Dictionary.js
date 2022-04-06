import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [search, setSearch] = useState("");

  return (
    <div className="Dictionary">
      <h2>Find the elucidation of:</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(`${search}`);
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
    </div>
  );
}
