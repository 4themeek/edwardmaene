"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/works", label: "Known Works" },
  { href: "/furniture", label: "Furniture" },
  { href: "/woodworking", label: "Woodworking" },
  { href: "/stonework", label: "Stone Sculpture" },
  { href: "/legacy", label: "Legacy" },
  { href: "/links", label: "Links" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="page-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px", maxWidth: "1100px" }}>
        <Link href="/" style={{ display: "flex", flexDirection: "column", lineHeight: 1, flexShrink: 0 }}>
          <span className="display" style={{ color: "#F5EFE0", fontSize: "1.2rem", letterSpacing: "0.06em" }}>Edward Maene</span>
          <span className="caps" style={{ color: "var(--gold-light)", fontSize: "0.55rem", marginTop: "2px" }}>1852 – 1931</span>
        </Link>

        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }} className="desktop-nav">
          {links.slice(1).map((l) => (
            <Link key={l.href} href={l.href} className="caps" style={{ color: pathname === l.href ? "var(--gold-light)" : "#C4B08A", fontSize: "0.58rem", borderBottom: pathname === l.href ? "1px solid var(--gold-light)" : "none", paddingBottom: "2px", whiteSpace: "nowrap" }}>
              {l.label}
            </Link>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} aria-label="Toggle menu" style={{ background: "none", border: "none", cursor: "pointer", color: "var(--rule)", display: "none" }} className="mobile-menu-btn">
          <span style={{ fontSize: "1.4rem" }}>{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div style={{ background: "var(--ink)", borderTop: "1px solid var(--gold)", padding: "1.2rem 2rem 1.5rem" }}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="caps" style={{ display: "block", color: pathname === l.href ? "var(--gold-light)" : "var(--rule)", padding: "0.6rem 0", fontSize: "0.7rem", borderBottom: "1px solid #2A2010" }}>
              {l.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
