import React from "react";
import "./App.css";
import "./styles.css";
import Cleanup from "./UIA11yCleanup";

export default function App() {
  return (
    <div className="page">
      <a href="#mainContent" className="skipLink">
        Skip to content
      </a>
      <header className="header">
        <h1 className="pageTitle">React Accessibility & UI Cleanup</h1>
        <p className="subtitle">
          A full before/after refactor covering UI, accessibility, and code
          quality.
        </p>
      </header>
      <Cleanup />
    </div>
  );
}
