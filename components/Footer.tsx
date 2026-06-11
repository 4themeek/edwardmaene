import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--ink)", borderTop: "1px solid var(--gold)", color: "var(--stone)", padding: "3rem 0 2rem", marginTop: "6rem" }}>
      <div className="page-container" style={{ maxWidth: "1100px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: "2rem", marginBottom: "2.5rem" }} className="footer-grid">
          <div>
            <p className="display" style={{ color: "var(--parchment)", fontSize: "1.2rem", marginBottom: "0.5rem" }}>Edward Maene</p>
            <p className="caps" style={{ color: "var(--gold)", fontSize: "0.58rem", marginBottom: "1rem" }}>Master Carver · Philadelphia</p>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.65 }}>Belgian-American architectural sculptor & woodcarver, 1852–1931. His stone and wood work spans six states and more than thirty known commissions.</p>
            <p style={{ fontSize: "0.82rem", color: "var(--stone)", marginTop: "1rem", fontStyle: "italic" }}>A tribute by T.O'B. and the family of Edward Maene.</p>
          </div>
          <div>
            <p className="caps" style={{ color: "var(--gold)", marginBottom: "1rem", fontSize: "0.58rem" }}>Craft</p>
            {[
              { href: "/furniture", label: "Furniture" },
              { href: "/woodworking", label: "Woodworking" },
              { href: "/stonework", label: "Stone Sculpture" },
              { href: "/works", label: "Known Works" },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ display: "block", color: "var(--stone)", fontSize: "0.88rem", marginBottom: "0.4rem" }}>{l.label}</Link>
            ))}
          </div>
          <div>
            <p className="caps" style={{ color: "var(--gold)", marginBottom: "1rem", fontSize: "0.58rem" }}>About</p>
            {[
              { href: "/", label: "History" },
              { href: "/legacy", label: "Legacy" },
              { href: "/links", label: "Links & References" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ display: "block", color: "var(--stone)", fontSize: "0.88rem", marginBottom: "0.4rem" }}>{l.label}</Link>
            ))}
          </div>
          <div>
            <p className="caps" style={{ color: "var(--gold)", marginBottom: "1rem", fontSize: "0.58rem" }}>Notable Sites</p>
            {["Washington Memorial Chapel", "St. Clement's Church", "St. Mark's Church", "University of Pennsylvania", "Grey Towers Castle", "Princeton University"].map((w) => (
              <p key={w} style={{ fontSize: "0.82rem", color: "var(--stone)", marginBottom: "0.3rem" }}>{w}</p>
            ))}
          </div>
        </div>

        <hr className="rule-gold" />
        <p style={{ textAlign: "center", fontSize: "0.8rem", color: "var(--stone)", marginTop: "1.5rem", fontStyle: "italic" }}>
          "The finest examples of hand-carved wood in this country." — On the Valley Forge Chapel choir stalls
        </p>
        <p className="caps" style={{ textAlign: "center", fontSize: "0.55rem", color: "#3A3020", marginTop: "1rem" }}>
          © {new Date().getFullYear()} Edward Maene Legacy · Philadelphia, Pennsylvania
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
