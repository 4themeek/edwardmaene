import Link from "next/link";
import NavCard from "@/components/NavCard";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--ink)",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "8rem 2rem 6rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(ellipse 80% 60% at 50% 40%, #2A1C08 0%, var(--ink) 100%)`, opacity: 0.9 }} />
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23A07830' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "720px" }}>
          <p className="caps" style={{ color: "var(--gold)", marginBottom: "2rem", letterSpacing: "0.25em", fontSize: "0.65rem" }}>
            Bruges, 1852 · Philadelphia, 1931
          </p>
          <h1 className="display" style={{ color: "var(--parchment)", fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 1.05, marginBottom: "0.4rem", fontWeight: 300 }}>
            Edward Maene
          </h1>
          <p className="display" style={{ color: "var(--gold-light)", fontSize: "clamp(1.1rem, 3vw, 1.6rem)", fontStyle: "italic", fontWeight: 300, marginBottom: "2.5rem", letterSpacing: "0.04em" }}>
            Master Carver &amp; Architectural Sculptor
          </p>
          <div aria-hidden style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1.2rem", marginBottom: "2.5rem", color: "var(--gold)" }}>
            <span style={{ height: "1px", width: "60px", background: "var(--rule)", display: "block" }} />
            <span style={{ fontSize: "1rem" }}>✦</span>
            <span style={{ height: "1px", width: "60px", background: "var(--rule)", display: "block" }} />
          </div>
          <p style={{ color: "#A09070", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: "560px", margin: "0 auto" }}>
            A Belgian-American master whose hands shaped the sacred spaces of Philadelphia —
            from cathedral altars and choir stalls to the stonework of great universities,
            spanning the Eastern Seaboard and beyond.
          </p>
        </div>

        <div style={{ position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", color: "var(--stone)" }}>
          <span className="caps" style={{ fontSize: "0.55rem", letterSpacing: "0.2em" }}>Scroll</span>
          <span style={{ fontSize: "0.9rem", animation: "bob 2s ease-in-out infinite" }}>↓</span>
        </div>
        <style>{`@keyframes bob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(6px); } }`}</style>
      </section>

      {/* ── Biography ─────────────────────────────────────── */}
      <section style={{ padding: "6rem 0" }}>
        <div className="page-container">
          <RevealOnScroll>
            <div className="ornament" style={{ marginBottom: "3rem" }}>
              <span className="caps" style={{ color: "var(--gold)", fontSize: "0.62rem" }}>Biography</span>
            </div>
          </RevealOnScroll>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "4rem", alignItems: "start" }} className="bio-grid">
            <RevealOnScroll delay={100}>
              <div style={{ borderLeft: "2px solid var(--gold)", paddingLeft: "1.5rem", position: "sticky", top: "100px" }}>
                <p className="caps" style={{ color: "var(--gold)", fontSize: "0.6rem", marginBottom: "1.5rem" }}>Life &amp; Times</p>
                {[
                  { year: "1852", note: "Born in Bruges, Belgium, April 21" },
                  { year: "1870s", note: "Trained in stone & woodcarving" },
                  { year: "c. 1878", note: "Studied in Paris" },
                  { year: "1881", note: "Emigrated to the United States" },
                  { year: "1883", note: "Settled in Philadelphia" },
                  { year: "1884", note: "Daughter Clara M. Maene born" },
                  { year: "1886", note: "Pullman Building with Wilson Eyre" },
                  { year: "1892", note: "Son Victor Albert Maene born" },
                  { year: "1898", note: "Grey Towers Castle" },
                  { year: "1908–17", note: "St. Clement's Church" },
                  { year: "1913", note: "Valley Forge Chapel complete" },
                  { year: "1916", note: "Wife Susanne Maengaux dies" },
                  { year: "1931", note: "Died in Philadelphia, Dec. 4" },
                ].map(({ year, note }) => (
                  <div key={year} style={{ marginBottom: "0.9rem" }}>
                    <p className="display" style={{ color: "var(--gold-light)", fontSize: "1rem", fontWeight: 500 }}>{year}</p>
                    <p style={{ fontSize: "0.82rem", color: "var(--stone)", lineHeight: 1.4 }}>{note}</p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="prose">
                <p className="display" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "var(--oak)", lineHeight: 1.3, marginBottom: "2rem", fontStyle: "italic" }}>
                  "The finest examples of hand-carved wood in this country."
                </p>

                <p>
                  Edward Maene was born in Bruges, Belgium on April 21, 1852. After mastering
                  the stone and woodcarving trade in his native Belgium and studying in Paris,
                  he arrived in the United States in 1881. By 1883 he had established himself
                  in Philadelphia, and for the next fifty years his downtown workshops on Locust
                  Street and Hutchinson Street produced some of the most extraordinary
                  hand-crafted ecclesiastical and domestic woodwork ever made in America.
                </p>

                <p>
                  His talented workmanship and intricate hand-crafted detail resulted in
                  some of the finest Gothic furniture ever made in the United States. In addition
                  to creating exquisitely carved furniture for wealthy turn-of-the-century
                  industrialists, Maene designed and produced incredibly beautiful stonework —
                  which can be seen today in historic Philadelphia — from St. Mark's Church
                  (great doors of the Parish) to St. Clement's Episcopal Church (high altar,
                  Lady Chapel, pulpit, Stations of the Cross) to the University of Pennsylvania
                  (four towers, Spanish-American War memorial).
                </p>

                <p>
                  He is perhaps best known for his elegant hand-carved oak artistry in the
                  George Washington Memorial Chapel at Valley Forge, completed in 1913 —
                  choir stalls, screens, and Valley Forge Brigades recognized as the finest
                  examples of hand-carved wood in the United States.
                </p>

                <p>
                  Maene's nephew John apprenticed with his uncle, then went on to serve as
                  foreman in Will Price's Rose Valley furniture shop. In the short time Rose
                  Valley's shop was operational, Edward produced much of the Rose Valley
                  furniture from his downtown workshops. Historians have indicated that the
                  elaborate Harrison Shakespeare Folio Cabinet was likely made in Edward
                  Maene's shop. Although unconfirmed, it is also believed that Mr. Maene may
                  have collaborated with Daniel Pabst on his highly recognized Modern Gothic
                  furniture creations.
                </p>

                <blockquote>
                  Both his daughter Clara M. Maene (who married Dr. John Partrick O'Brien)
                  and his son Victor Albert Maene (who married Emma V. Gillespie) worked
                  alongside their father. The family continues to hold Rose Valley furniture
                  descended from Edward Maene and a metal name stamp — E.Maene — from
                  the Rose Valley workshop.
                  <footer style={{ marginTop: "0.5rem", fontSize: "0.85rem" }}>— Dr. Thomas W. Brunk, March 10, 2013</footer>
                </blockquote>

                <p>
                  Edward Maene died on December 4, 1931, of Angina Pectoris. He is buried
                  with his wife Susanne Maengaux (1856 – October 6, 1916) in the Old Pennypack
                  Cemetery, Bustleton, Philadelphia County, Pennsylvania.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
        <style>{`.bio-grid { @media (max-width: 768px) { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* ── Nav Cards ─────────────────────────────────────── */}
      <section style={{ background: "var(--oak)", padding: "5rem 0", borderTop: "1px solid var(--gold)", borderBottom: "1px solid var(--gold)" }}>
        <div className="page-container">
          <RevealOnScroll>
            <p className="caps" style={{ color: "var(--gold-light)", textAlign: "center", marginBottom: "3rem", fontSize: "0.62rem", letterSpacing: "0.22em" }}>
              Explore the Legacy
            </p>
          </RevealOnScroll>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }} className="nav-cards">
            {[
              { href: "/works", title: "Known Works", desc: "The full catalogue — 30+ documented commissions across 6 states." },
              { href: "/furniture", title: "Furniture", desc: "Hand-carved Gothic pieces for Philadelphia's finest households." },
              { href: "/woodworking", title: "Woodworking", desc: "Choir stalls, screens, pulpits, and rood beams in sacred spaces." },
              { href: "/stonework", title: "Stone Sculpture", desc: "Church altars, university towers, and civic monuments in stone." },
              { href: "/legacy", title: "Legacy", desc: "His craft, his architects, his connection to Rose Valley." },
              { href: "/links", title: "Links", desc: "Historical references and photographic resources." },
            ].map((card, i) => (
              <RevealOnScroll key={card.href} delay={i * 70}>
                <NavCard href={card.href} title={card.title} desc={card.desc} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) { .nav-cards { grid-template-columns: 1fr !important; } }
          @media (min-width: 769px) and (max-width: 1024px) { .nav-cards { grid-template-columns: repeat(2, 1fr) !important; } }
        `}</style>
      </section>

      {/* ── Closing quote ─────────────────────────────────── */}
      <section style={{ padding: "6rem 0", textAlign: "center" }}>
        <div className="page-container">
          <RevealOnScroll>
            <p aria-hidden style={{ color: "var(--gold)", fontSize: "3rem", marginBottom: "1rem", lineHeight: 1 }}>❧</p>
            <p className="display" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontStyle: "italic", color: "var(--oak)", maxWidth: "680px", margin: "0 auto 1.5rem", lineHeight: 1.45 }}>
              He came with his tools and his training and gave this city fifty years of
              extraordinary craft. The stone and the wood remember him still.
            </p>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
