import type { Metadata } from "next";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Woodworking — Edward Maene",
  description: "Edward Maene's ecclesiastical and decorative woodworking — choir stalls, altars, screens, pulpits, and rood beams across the Eastern Seaboard.",
};

export default function Woodworking() {
  return (
    <div style={{ paddingTop: "64px" }}>
      <div style={{ background: "var(--ink)", padding: "5rem 0 4rem", borderBottom: "1px solid var(--gold)" }}>
        <div className="page-container" style={{ textAlign: "center" }}>
          <p className="caps" style={{ color: "var(--gold)", fontSize: "0.62rem", marginBottom: "1.2rem" }}>
            The Woodcarver's Art
          </p>
          <h1 className="display" style={{ color: "var(--parchment)", fontSize: "clamp(2.4rem, 6vw, 4rem)", fontWeight: 300 }}>
            Woodworking
          </h1>
          <p style={{ color: "var(--stone)", maxWidth: "540px", margin: "1.2rem auto 0", fontSize: "0.95rem" }}>
            From the choir stalls of Valley Forge to the pulpits and rood screens of 
            Philadelphia's great churches — Maene's hand-carved oak and walnut work 
            remains in active use more than a century after it was made.
          </p>
        </div>
      </div>

      <section style={{ padding: "5rem 0" }}>
        <div className="page-container">

          {/* Pull quote */}
          <RevealOnScroll>
            <div style={{
              textAlign: "center",
              padding: "3rem 2rem",
              borderTop: "1px solid var(--rule)",
              borderBottom: "1px solid var(--rule)",
              marginBottom: "4rem",
            }}>
              <p className="display" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontStyle: "italic", color: "var(--oak)", lineHeight: 1.45 }}>
                "The finest examples of hand-carved wood in this country."
              </p>
              <p className="caps" style={{ color: "var(--stone)", fontSize: "0.58rem", marginTop: "1rem" }}>
                — On Maene's work at Washington Memorial Chapel, Valley Forge
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="prose" style={{ maxWidth: "700px", margin: "0 auto 4rem" }}>
              <p>
                Woodcarving was the bedrock of Maene's training — the tradition he had absorbed
                in Belgium and refined in Paris before bringing it to America. His ecclesiastical
                woodwork spans every element of the Gothic church interior: choir stalls and
                screens, rood beams and pulpits, altar rails, manger sets, and decorative
                panelling.
              </p>
              <p>
                What distinguished Maene's wood carving from that of his contemporaries was
                the combination of Gothic correctness and personal vitality. His carved foliage
                feels alive; his figurative panels have the weight and stillness of things
                that were meant to last forever. They have.
              </p>
            </div>
          </RevealOnScroll>

          {[
            {
              heading: "Ecclesiastical Woodwork",
              entries: [
                {
                  place: "Washington Memorial Chapel, Valley Forge, PA",
                  items: ["Choir stalls (featuring the Valley Forge Brigades)", "Carved screens", "Overall interior woodwork. Completed 1913."],
                  note: "The masterpiece of his career — still in use and still breathtaking.",
                },
                {
                  place: "St. Clement's Episcopal Church, Philadelphia",
                  items: ["Wood pulpit", "Stations of the Cross"],
                  note: "Part of the decade-long commission (1908–1917) that also included the stone high altar and Lady Chapel.",
                },
                {
                  place: "St. Luke's Episcopal Church, Philadelphia (Germantown Ave.)",
                  items: ["Altar", "Screen", "Rood beam", "Pulpit", "Manger set"],
                  note: "Church records specifically credit Edward Maene. Post-death correspondence exists about the manger set.",
                },
                {
                  place: "Trinity Episcopal Church, Wilmington, DE",
                  items: ["Choir stalls in oak", "Clergy stalls in oak"],
                  note: "Attributed to Edward Maene by historian Barksdale Maynard; church records say John Maene and Co.",
                },
                {
                  place: "St. Peter's Episcopal Church, Perth Amboy, NJ",
                  items: ["Altar", "Pulpit (probable)", "Roof beam"],
                  note: "Church records document the commission.",
                },
                {
                  place: "St. Luke's Episcopal Church, Bustleton, Philadelphia",
                  items: ["Interior woodwork"],
                },
              ],
            },
            {
              heading: "Decorative & Domestic Woodwork",
              entries: [
                {
                  place: "Rose Valley Furniture Workshop",
                  items: [
                    "Furniture produced in Maene's Philadelphia workshops for Will Price's Arts & Crafts community",
                    "Harrison Shakespeare Folio Cabinet (attributed)",
                  ],
                  note: "The family holds Rose Valley furniture descended from Maene and a metal name stamp (E.Maene) from Rose Valley.",
                },
                {
                  place: "Private Commissions, Philadelphia",
                  items: [
                    "Gothic revival furniture for Gilded Age industrialists",
                    "Library panelling and overmantels",
                    "Carved cabinets, chairs, wardrobes, and beds",
                  ],
                },
                {
                  place: "Daniel Pabst Collaboration (unconfirmed)",
                  items: ["Possible collaboration on Pabst's celebrated Modern Gothic furniture"],
                  note: "Unconfirmed but historically plausible given the overlapping era and Gothic style.",
                },
              ],
            },
          ].map((section, si) => (
            <RevealOnScroll key={section.heading} delay={si * 60}>
              <div style={{ marginBottom: "3.5rem" }}>
                <div className="ornament" style={{ marginBottom: "2.5rem" }}>
                  <span className="caps" style={{ color: "var(--gold)", fontSize: "0.6rem", whiteSpace: "nowrap" }}>
                    {section.heading}
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                  {section.entries.map((e) => (
                    <div
                      key={e.place}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "220px 1fr",
                        gap: "2rem",
                        paddingBottom: "2rem",
                        borderBottom: "1px solid var(--rule)",
                      }}
                      className="wood-row"
                    >
                      <div>
                        <p className="display" style={{ color: "var(--oak)", fontSize: "1rem", fontWeight: 400, lineHeight: 1.4 }}>
                          {e.place}
                        </p>
                      </div>
                      <div>
                        <ul style={{ paddingLeft: "1.2rem", marginBottom: e.note ? "0.8rem" : 0 }}>
                          {e.items.map((item) => (
                            <li key={item} style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "var(--ink)", marginBottom: "0.2rem" }}>
                              {item}
                            </li>
                          ))}
                        </ul>
                        {e.note && (
                          <p style={{ fontSize: "0.85rem", fontStyle: "italic", color: "var(--stone)", lineHeight: 1.6 }}>
                            {e.note}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .wood-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
