function Footer() {
  return (
    <footer
      className="footer-container"
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "2rem",
        marginTop: "3rem",
        borderTop: "1px solid #e5e7eb",
        backgroundColor: "#f9fafb",
      }}
    >
      <div className="credits" style={{ textAlign: "left" }}>
        <h3
          style={{
            fontSize: "1.125rem",
            fontWeight: "bold",
            marginBottom: "0.5rem",
          }}
        >
          Credits
        </h3>
        <p
          style={{ fontSize: "0.875rem", color: "#4b5563", lineHeight: "1.5" }}
        >
          <strong>Nacer-Abdellah Benghanem</strong>
          <br />
          Algerian Computer Science Student
          <br />
          Studying in Poland
        </p>
      </div>

      <div
        className="version-log"
        style={{ textAlign: "right", maxWidth: "350px" }}
      >
        <h3
          style={{
            fontSize: "1.125rem",
            fontWeight: "bold",
            marginBottom: "0.5rem",
          }}
        >
          Version Log
        </h3>
        <ul
          style={{
            fontSize: "0.875rem",
            color: "#4b5563",
            listStyleType: "none",
            padding: "0",
            margin: "0",
            lineHeight: "1.6",
          }}
        >
          <li>
            <strong style={{ color: "#111827" }}>v1.0.0 (Latest)</strong> — Live
            scraping engine, in-memory caching, city normalization, and direct
            job application links integrated.
          </li>
          <li style={{ marginTop: "0.5rem" }}>
            <strong style={{ color: "#111827" }}>v0.9.0</strong> — Initial
            backend API setup and core parsing logic.
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
