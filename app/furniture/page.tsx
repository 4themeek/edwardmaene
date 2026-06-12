import type { Metadata } from "next";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Furniture — Edward Maene",
  description: "Photographs of Edward Maene's hand-carved Gothic furniture — chairs, cabinets, wardrobes, and beds crafted for Philadelphia's finest households.",
};

const pieces = [
  {
    src: "/maene-curio-cabinet.jpg",
    width: 192,
    height: 300,
    name: "Figural Curio Cabinet",
    medium: "Hand-carved walnut",
    description:
      "A remarkable display cabinet with figural carved supports — female figures serving as columns at each corner, rendered with the detail and confidence of a master sculptor. The glazed rotating drum allows full 360° display of the objects within. A showpiece that sits at the intersection of furniture and fine sculpture.",
  },
  {
    src: "/maene-throne-chair.jpg",
    width: 194,
    height: 300,
    name: "Baroque Throne Armchair",
    medium: "Hand-carved oak with upholstery",
    description:
      "An armchair of commanding presence — barley-twist legs and stretchers, a towering carved crest with figurative detail, and boldly scrolled arms. The upholstered back and seat in warm gold fabric complete a piece that would have anchored the grandest library or reception room in Gilded Age Philadelphia.",
  },
  {
    src: "/maene-gothic-chair.jpg",
    width: 193,
    height: 300,
    name: "Gothic Keyhole Chair",
    medium: "Hand-carved oak",
    description:
      "Maene's signature keyhole-back chair — the tracery carved in the splat echoes the Gothic windows of the great churches for which he carved altars and screens. The round seat with carved detail, tripod base, and delicate stretchers make this one of the most distinctive pieces of American Gothic Revival furniture. Every joint cut and fitted by hand.",
  },
  {
    src: "/maene-bed.jpg",
    width: 300,
    height: 200,
    name: "Monumental Carved Bed",
    medium: "Hand-carved walnut",
    description:
      "A grand carved bed — the headboard carrying deep-relief foliate and figurative carving of cathedral quality. The boldly carved cornice, panelled footboard, and turned column posts make this a private sanctuary worthy of a public commission. Pieces of this scale were Maene's most prestigious domestic commissions, commissioned by Philadelphia's wealthiest industrialist families.",
  },
];

export default function Furniture() {
  return (
    <div style={{ paddingTop: "64px" }}>
      {/* Page header */}
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

      {/* Hero banner image — original site photo */}
      <div style={{ background: "var(--ink)", borderBottom: "1px solid var(--gold)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <Image
            src="/maene-furniture.jpg"
            alt="Edward Maene carved furniture workshop"
            width={900}
            height={380}
            style={{ width: "100%", height: "260px", objectFit: "cover", objectPosition: "center", display: "block" }}
            priority
          />
        </div>
      </div>

      {/* Intro */}
      <section style={{ padding: "4rem 0 2rem" }}>
        <div className="page-container">
          <RevealOnScroll>
            <p style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center", color: "var(--stone)", fontSize: "1.05rem", lineHeight: 1.8 }}>
              In an era when steam power was transforming furniture production, Maene's shop
              operated by the standards of the medieval atelier. His Gothic pieces were commissioned
              by the industrialists and professionals who shaped Gilded Age Philadelphia —
              heirloom pieces from the day they were delivered, many surviving in family collections today.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Pieces — alternating layout */}
      <section style={{ padding: "3rem 0 5rem" }}>
        <div className="page-container">
          {pieces.map((piece, i) => (
            <RevealOnScroll key={piece.name} delay={60}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: i % 2 === 0 ? "340px 1fr" : "1fr 340px",
                  gap: "4rem",
                  alignItems: "center",
                  marginBottom: "5rem",
                  paddingBottom: "5rem",
                  borderBottom: i < pieces.length - 1 ? "1px solid var(--rule)" : "none",
                }}
                className="piece-row"
              >
                {/* Image */}
                <div
                  style={{ order: i % 2 === 0 ? 0 : 1 }}
                  className="piece-img"
                >
                  <div
                    style={{
                      background: "#EDE5D0",
                      padding: "1.5rem",
                      display: "inline-block",
                      boxShadow: "4px 4px 20px rgba(26,18,9,0.15)",
                    }}
                  >
                    <Image
                      src={piece.src}
                      alt={piece.name}
                      width={piece.width}
                      height={piece.height}
                      style={{
                        display: "block",
                        maxWidth: "100%",
                        height: "auto",
                        maxHeight: "380px",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>

                {/* Text */}
                <div style={{ order: i % 2 === 0 ? 1 : 0 }} className="piece-text">
                  <p className="caps" style={{ color: "var(--gold)", fontSize: "0.58rem", marginBottom: "0.8rem" }}>
                    {piece.medium}
                  </p>
                  <h2
                    className="display"
                    style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "var(--oak)", marginBottom: "1.2rem", fontWeight: 400, lineHeight: 1.2 }}
                  >
                    {piece.name}
                  </h2>
                  <p style={{ color: "var(--stone)", lineHeight: 1.8, fontSize: "0.98rem" }}>
                    {piece.description}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}

          {/* Wardrobe — note that image is coming */}
          <RevealOnScroll>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "340px 1fr",
                gap: "4rem",
                alignItems: "center",
              }}
              className="piece-row"
            >
              <div
                style={{
                  background: "#EDE5D0",
                  height: "320px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--stone)",
                  fontSize: "0.85rem",
                  fontStyle: "italic",
                  textAlign: "center",
                  padding: "2rem",
                  boxShadow: "4px 4px 20px rgba(26,18,9,0.15)",
                }}
                className="piece-img"
              >
                <span>Photograph forthcoming</span>
              </div>
              <div className="piece-text">
                <p className="caps" style={{ color: "var(--gold)", fontSize: "0.58rem", marginBottom: "0.8rem" }}>
                  Hand-carved walnut
                </p>
                <h2 className="display" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "var(--oak)", marginBottom: "1.2rem", fontWeight: 400, lineHeight: 1.2 }}>
                  Carved Wardrobe
                </h2>
                <p style={{ color: "var(--stone)", lineHeight: 1.8, fontSize: "0.98rem" }}>
                  A large carved wardrobe — the prestige domestic commission of the era. Maene's
                  wardrobes were heirloom pieces from the day they were delivered. The carved panel
                  decoration across the doors demonstrates his mastery of both flat-relief and
                  deep-relief carving within a single composition, with the architectural cornice
                  and base mouldings executed with the precision of a church commission.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Family note */}
      <section style={{ padding: "0 0 5rem" }}>
        <div className="page-container">
          <RevealOnScroll>
            <div style={{ background: "var(--oak)", padding: "2.5rem", borderLeft: "4px solid var(--gold)" }}>
              <p className="caps" style={{ color: "var(--gold-light)", fontSize: "0.6rem", marginBottom: "1rem" }}>
                A Family Legacy
              </p>
              <p style={{ color: "var(--parchment)", lineHeight: 1.8 }}>
                This site is a tribute to our Great-Grandfather, Edward Maene. Both his daughter
                Clara M. Maene (who married Dr. John Partrick O'Brien) and his son Victor Albert
                Maene (who married Emma V. Gillespie) worked alongside their father.
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
        @media (max-width: 768px) {
          .piece-row {
            grid-template-columns: 1fr !important;
          }
          .piece-img { order: 0 !important; }
          .piece-text { order: 1 !important; }
        }
      `}</style>
    </div>
  );
}
