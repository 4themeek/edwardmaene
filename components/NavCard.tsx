"use client";
import Link from "next/link";

export default function NavCard({ href, title, desc }: { href: string; title: string; desc: string }) {
  return (
    <Link
      href={href}
      style={{ display: "block", padding: "2rem", background: "rgba(0,0,0,0.2)", borderLeft: "1px solid rgba(160,120,48,0.3)", height: "100%", textDecoration: "none", transition: "background 0.2s" }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.4)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.2)")}
    >
      <p className="display" style={{ color: "var(--parchment)", fontSize: "1.15rem", marginBottom: "0.5rem" }}>{title}</p>
      <p style={{ color: "#C4A870", fontSize: "0.88rem", lineHeight: 1.6 }}>{desc}</p>
      <p style={{ color: "var(--gold)", fontSize: "0.85rem", marginTop: "0.8rem" }}>→</p>
    </Link>
  );
}
