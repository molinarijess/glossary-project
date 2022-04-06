import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <section className="content">
        <h1>GLOSSARY</h1>
        <hr />
        <Dictionary />
        <hr />
      </section>
    </div>
  );
}
