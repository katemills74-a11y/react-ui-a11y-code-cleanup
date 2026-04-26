import './styles.css'

export default function Cleanup() {
  return (
    <div className="page">
      <header className="header">
        <h1>React Accessibility & UI Cleanup</h1>
        <p className="subtitle">
          A full before/after refactor covering UI, accessibility, and code quality.
        </p>
      </header>

      <main className="content">
        <section className="block">
          <h2>1. Original UI (Before)</h2>
          <p>A look at the original component before cleanup.</p>
          {/* Insert screenshot or description */}
        </section>

        <section className="block">
          <h2>2. Original Code (Before)</h2>
          <p>The initial JSX structure with issues in semantics, labels, and logic.</p>
          {/* Insert before code snippet */}
        </section>

        <section className="block">
          <h2>3. Refactored Component (After)</h2>
          <p>Improved accessibility, cleaner JSX, and predictable behaviour.</p>
          {/* Insert after code snippet or component */}
        </section>
      </main>

      <footer className="footer">
        <p>Part of my React Accessibility Cleanup Series.</p>
      </footer>
    </div>
  )
}
