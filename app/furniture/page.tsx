import type { Metadata } from "next";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Furniture — Edward Maene",
  description: "Edward Maene's hand-carved Gothic furniture — chairs, cabinets, wardrobes, and beds crafted for Philadelphia's finest households.",
};

const pieces = [
  {
    name: "Maene Keyhole Chair",
    description:
      "A characteristic example of Maene's Gothic Revival seating — the distinctive keyhole-shaped back splat carved with the precision and restraint of a master's hand. Every joint cut and fitted without mechanical assistance.",
  },
  {
    name: "Maene Curio Cabinet",
    description:
      "A display cabinet of exceptional refinement, with carved architectural pediments and glazed doors. The proportions follow the Gothic vertical ideal; the carved details reward close inspection.",
  },
  {
    name: "Maene Dolphin Chair",
    description:
      "An inventive piece — the arm supports carved as dolphins, a motif drawn from Renaissance and Baroque precedent. A mark of Maene's range beyond the purely Gothic.",
  },
  {
    name: "Maene Cabinet",
    description:
      "A case piece of formal weight, likely commissioned for a library or reception room. The carved panel decoration demonstrates Maene's mastery of flat-relief and deep-relief carving within a single composition.",
  },
  {
    name: "Maene Wardrobe",
    description:
      "A large carved wardrobe — the prestige domestic commission of the era. Maene's wardrobes were heirloom pieces from the day they were delivered; many survive in Philadelphia families to this day.",
  },
  {
    name: "Carved Bed",
    description:
      "A monumental carved bed in the tradition of the great Belgian and French Gothic workshops. The headboard carries architectural carving of cathedral quality — a private sanctuary worthy of a public commission.",
  },
];

export default function Furniture() {
  return (
    <div style={{ paddingTop: "64px" }}>
      <div style={{ background: "var(--ink)", padding: "5rem 0 4rem", borderBottom: "1px solid var(--gold)" }}>
        <div className="page-container" style={{ textAlign: "center" }}>
          <p className="caps" style={{ color: "var(--gold)", fontSize: "0.62rem", marginBottom: "1.2rem" }}>
            Hand-Carved Gothic
          </p>
          <h1 className="display" style={{ color: "var(--parchment)", fontSize: "clamp(2.4rem, 6vw, 4rem)", fontWeight: 300 }}>
            Furniture
          </h1>
          <p style={{ color: "var(--stone)", maxWidth: "520px", margin: "1.2rem auto 0", fontSize: "0.95rem" }}>
            Maene produced some of the finest Gothic furniture ever made in the United States —
            every piece hand-carved in his downtown Philadelphia workshops on Locust St. and Hutchinson St.
          </p>
        </div>
      </div>

      {/* Hero image — actual photograph from the original site */}
      <div style={{ background: "var(--ink)", borderBottom: "1px solid var(--gold)" }}>
        <div className="page-container" style={{ padding: "0" }}>
          <div style={{ position: "relative", width: "100%", maxHeight: "420px", overflow: "hidden" }}>
            <Image
              src="/maene-furniture.jpg"
              alt="Edward Maene carved furniture"
              width={900}
              height={420}
              style={{ width: "100%", height: "auto", maxHeight: "420px", objectFit: "cover", objectPosition: "center top", display: "block" }}
              priority
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to right, rgba(26,18,9,0.4) 0%, transparent 50%, rgba(26,18,9,0.4) 100%)",
              }}
            />
          </div>
        </div>
      </div>

      <section style={{ padding: "5rem 0" }}>
        <div className="page-container">
          <RevealOnScroll>
            <div className="prose" style={{ maxWidth: "680px", margin: "0 auto 4rem", textAlign: "center" }}>
              <p style={{ fontSize: "1.05rem", color: "var(--stone)" }}>
                In an era when steam power was transforming furniture production, Maene's shop 
                operated by the standards of the medieval atelier. His Gothic pieces — chairs, 
                cabinets, wardrobes, and beds — were commissioned by the industrialists and 
                professionals who shaped Gilded Age Philadelphia.
              </p>
            </div>
          </RevealOnScroll>

          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "3rem" }}
            className="furniture-grid"
          >
            {pieces.map((piece, i) => (
              <RevealOnScroll key={piece.name} delay={i * 70}>
                <div
                  style={{
                    borderTop: "2px solid var(--gold)",
                    paddingTop: "1.5rem",
                  }}
                >
                  <h2 className="display" style={{ fontSize: "1.4rem", color: "var(--oak)", marginBottom: "0.8rem", fontWeight: 400 }}>
                    {piece.name}
                  </h2>
                  <p style={{ fontSize: "0.95rem", color: "var(--stone)", lineHeight: 1.75 }}>
                    {piece.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll delay={200}>
            <div
              style={{
                marginTop: "5rem",
                background: "var(--oak)",
                padding: "2.5rem",
                borderLeft: "4px solid var(--gold)",
              }}
            >
              <p className="caps" style={{ color: "var(--gold-light)", fontSize: "0.6rem", marginBottom: "1rem" }}>
                A Family Legacy
              </p>
              <p style={{ color: "var(--parchment)", lineHeight: 1.8 }}>
                We are in the early stages of building this site as a tribute to our 
                Great-Grandfather, Edward Maene. Both his daughter Clara M. Maene 
                (who married Dr. John Partrick O'Brien) and his son Victor Albert Maene 
                (who married Emma V. Gillespie) worked alongside their father. 
                The family retains Rose Valley furniture handed down from Edward Maene 
                and a metal name stamp — E.Maene — from the Rose Valley workshop.
              </p>
              <p style={{ color: "#C4A870", fontSize: "0.85rem", marginTop: "1rem", fontStyle: "italic" }}>
                — T.O'B., the family of Edward Maene
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .furniture-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
