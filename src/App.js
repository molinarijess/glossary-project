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
      <footer className="footer">
        Coded by{" "}
        <a
          href="https://molinarijess.netlify.app/"
          className="professional-link"
        >
          Jessica Molinari
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/molinarijess/glossary-project"
          className="professional-link"
        >
          open-sourced
        </a>
      </footer>
    </div>
  );
}
