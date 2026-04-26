// scr/UIA11yCleanup.jsx

import React from "react";
import "./styles.css";
import { assets } from "./assets/assets";

export default function Cleanup() {
  const { beforeUi, beforeCode, afterCode } = assets;
  return (
    <main className="content">
      <section className="block">
        <h2 className="blockHeading">1. Original UI (Before)</h2>
        <p>A look at the original component before cleanup.</p>
        <img
          src={beforeUi.src}
          alt={beforeUi.alt}
          className={beforeUi.className}
        />
      </section>

      <section className="block">
        <h2 className="blockHeading">2. Original Code (Before)</h2>
        <p>
          The initial JSX structure with issues in semantics, labels, and logic.
        </p>
        <img
          src={beforeCode.src}
          alt={beforeCode.alt}
          className={beforeCode.className}
        />
      </section>

      <section className="block">
        <h2 className="blockHeading">3. Refactored Component (After)</h2>
        <p>Improved accessibility, cleaner JSX, and predictable behaviour.</p>
        <img
          src={afterCode.src}
          alt={afterCode.alt}
          className={afterCode.className}
        />
      </section>

      <footer className="footer">
        Part of my React Accessibility Cleanup Series.
      </footer>
    </main>
  );
}
