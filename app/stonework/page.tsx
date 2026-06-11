import type { Metadata } from "next";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Stone Sculpture — Edward Maene",
  description: "Edward Maene's architectural stone carving — church altars, university towers, façades, and civic monuments across the Eastern Seaboard.",
};

export default function StoneSculpture() {
  return (
    <div style={{ paddingTop: "64px" }}>
      <div style={{ background: "var(--ink)", padding: "5rem 0 4rem", borderBottom: "1px solid var(--gold)" }}>
        <div className="page-container" style={{ textAlign: "center" }}>
          <p className="caps" style={{ color: "var(--gold)", fontSize: "0.62rem", marginBottom: "1.2rem" }}>
            Carved in Stone
          </p>
          <h1 className="display" style={{ color: "var(--parchment)", fontSize: "clamp(2.4rem, 6vw, 4rem)", fontWeight: 300 }}>
            Stone Sculpture
          </h1>
          <p style={{ color: "var(--stone)", maxWidth: "540px", margin: "1.2rem auto 0", fontSize: "0.95rem" }}>
            From church altars to university towers and civic façades — Maene's stone
            carving defined the architectural character of Gilded Age Philadelphia.
          </p>
        </div>
      </div>

      <section style={{ padding: "5rem 0" }}>
        <div className="page-container">

          <RevealOnScroll>
            <div className="prose" style={{ maxWidth: "700px", margin: "0 auto 4rem" }}>
              <p>
                Maene had trained in stone carving in Belgium before studying in Paris, and
                the stone work he brought to Philadelphia was informed by the great Gothic
                and Renaissance traditions of European ecclesiastical carving. His range was
                exceptional: from the intimate scale of a font or grave marker to the
                monumental scale of a university tower or courthouse colonnade.
              </p>
              <p>
                Many of his stone commissions were executed for architects of the first rank —
                Wilson Eyre, Horace Trumbauer, and others — who trusted Maene to translate
                their drawings into permanent stone with complete fidelity to the design intent.
              </p>
            </div>
          </RevealOnScroll>

          {[
            {
              heading: "Ecclesiastical Stone",
              entries: [
                { place: "St. Clement's Episcopal Church, Philadelphia", detail: "Stone altar, high altar, Lady Chapel stonework (1908–1917). The Lady Chapel was blessed February 15, 1915." },
                { place: "Christ Church, Philadelphia", detail: "Stone architectural elements at this Colonial-era landmark." },
                { place: "The Cathedral Church of St. John, Wilmington, DE", detail: "Credited by architectural historian Barksdale Maynard." },
                { place: "Trinity Episcopal Church, Wilmington, DE", detail: "Stone altar, wainscoting, and Bishop's chair in stone." },
                { place: "St. Peter's Episcopal Church, Perth Amboy, NJ", detail: "Altar and roof beam; church records document the commission." },
                { place: "St. John the Divine, New York, NY", detail: "Stone carving at this great cathedral." },
              ],
            },
            {
              heading: "Civic & Institutional Stone",
              entries: [
                { place: "University of Pennsylvania, Philadelphia", detail: "Four towers and the Spanish-American War memorial in exterior stone." },
                { place: "Pennsylvania Law School, Philadelphia", detail: "Exterior stonework at 34th and Sansom." },
                { place: "Temple University, Philadelphia", detail: "Exterior stonework at Broad and Montgomery." },
                { place: "Grey Towers Castle, Arcadia University, Glenside, PA", detail: "Stonework for architect Horace Trumbauer's 1898 National Historic Landmark." },
                { place: "Princeton University, NJ", detail: "Exterior stonework and columns." },
                { place: "Cincinnati Public Library, Cincinnati, OH", detail: "Architectural stone commission." },
                { place: "Camden County Courthouse, Camden, NJ", detail: "Exterior marble columns (building now demolished)." },
              ],
            },
            {
              heading: "Commercial & Residential Façades",
              entries: [
                { place: "J. Wesley Pullman Office Building, Philadelphia (1886)", detail: "In collaboration with architect Wilson Eyre — \"rich, decorative details of this facade.\"" },
                { place: "1610 Locust St., Philadelphia", detail: "Exterior stonework." },
                { place: "Old Evening Bulletin Building, Philadelphia", detail: "Exterior stonework." },
                { place: "Provident Building (now Rite Aid), Chestnut & 17th, Philadelphia", detail: "\"The Sower\" — carved plaques flanking the entrance doors." },
              ],
            },
            {
              heading: "Funerary & Memorial Stone",
              entries: [
                { place: "Pennepack Baptist Church Cemetery, Philadelphia", detail: "A stone angel — grave marker for Susanne Maene, Edward's wife." },
                { place: "Spanish-American War Memorial, University of Pennsylvania", detail: "Monumental memorial in stone." },
              ],
            },
          ].map((section, si) => (
            <RevealOnScroll key={section.heading} delay={si * 60}>
              <div style={{ marginBottom: "3.5rem" }}>
                <div className="ornament" style={{ marginBottom: "2rem" }}>
                  <span className="caps" style={{ color: "var(--gold)", fontSize: "0.6rem", whiteSpace: "nowrap" }}>
                    {section.heading}
                  </span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem 3rem" }} className="stone-grid">
                  {section.entries.map((e) => (
                    <div key={e.place} style={{ borderLeft: "1px solid var(--rule)", paddingLeft: "1rem" }}>
                      <p style={{ fontWeight: 500, color: "var(--oak)", marginBottom: "0.25rem", fontSize: "0.95rem" }}>{e.place}</p>
                      <p style={{ color: "var(--stone)", fontSize: "0.85rem", lineHeight: 1.6 }}>{e.detail}</p>
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
          .stone-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
