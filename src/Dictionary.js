import React, { useState } from "react";

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
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </form>
    </div>
  );
}
