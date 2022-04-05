import React, { useState } from "react";

export default function Dictionary() {
  let [search, setSearch] = useState("");

  return (
    <div className="Dictionary">
      <div className="search-input">
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
    </div>
  );
}
