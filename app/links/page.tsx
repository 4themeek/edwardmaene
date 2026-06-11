import type { Metadata } from "next";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Links & References — Edward Maene",
  description: "Research links, historical references, and photographic resources related to Edward Maene's work.",
};

const linkGroups = [
  {
    heading: "Washington Memorial Chapel · Valley Forge, PA",
    links: [
      {
        label: "Valley Forge Choir Stalls — Wally Gobetz Photography (Flickr)",
        url: "http://www.flickr.com/photos/wallyg/2785962423/",
        note: "\"The choir stalls, featuring the Valley Forge Brigades, were hand carved out of oak by Edward Maene.\"",
      },
      {
        label: "American Decorative Art — Rose Valley Inventory",
        url: "http://www.americandecorativeart.com/internalpages/inventory/rosevalley/index.html",
        note: "\"Edward Maene supplied all the woodwork for the Washington Memorial Chapel in Valley Forge.\"",
      },
    ],
  },
  {
    heading: "St. Clement's Episcopal Church · Philadelphia, 1908–1917",
    links: [
      {
        label: "Saint Clement's Philadelphia — Building History",
        url: "http://www.saintclementsphiladelphia.org/index.php?/main/building/",
        note: "Gothic design HIGH ALTAR consecrated 11/22/08 — \"executed by Edward Maene, a gifted Belgian sculptor.\" Stonework in the LADY CHAPEL by Edward Maene, blessed 2/15/15. The present FONT executed by Mr. Maene in 1917.",
      },
    ],
  },
  {
    heading: "J. Wesley Pullman Building · Philadelphia, 1886",
    links: [
      {
        label: "Wilson Eyre / Pullman Building — Penn Design",
        url: "http://www.design.upenn.edu/Eyre/pulj86.html",
        note: "\"Sculptor Edward Maene collaborated with Eyre in creating the rich, decorative details of this facade.\"",
      },
    ],
  },
  {
    heading: "Rose Valley Arts & Crafts Movement",
    links: [
      {
        label: "Rose Valley Museum — Architecture",
        url: "http://www.rosevalleymuseum.org/architecture.html",
        note: "Rose Valley's records mention that some Rose Valley furniture could have been made at Edward Maene's Philadelphia workshops, probably before the Rose Valley workshop was fully operational.",
      },
    ],
  },
  {
    heading: "Historical & Biographical Research",
    links: [
      {
        label: "Edward Maene — Wikipedia",
        url: "https://en.wikipedia.org/wiki/Edward_Maene",
        note: "Biographical overview of Maene's life and principal works, including his training in Belgium, immigration to Philadelphia, and major commissions.",
      },
    ],
  },
];

export default function Links() {
  return (
    <div style={{ paddingTop: "64px" }}>
      <div style={{ background: "var(--ink)", padding: "5rem 0 4rem", borderBottom: "1px solid var(--gold)" }}>
        <div className="page-container" style={{ textAlign: "center" }}>
          <p className="caps" style={{ color: "var(--gold)", fontSize: "0.62rem", marginBottom: "1.2rem" }}>Research &amp; Resources</p>
          <h1 className="display" style={{ color: "var(--parchment)", fontSize: "clamp(2.4rem, 6vw, 4rem)", fontWeight: 300 }}>Links</h1>
          <p style={{ color: "var(--stone)", maxWidth: "480px", margin: "1.2rem auto 0", fontSize: "0.95rem" }}>
            Primary sources, photographic documentation, and architectural references 
            related to Edward Maene's known works.
          </p>
        </div>
      </div>

      <section style={{ padding: "5rem 0" }}>
        <div className="page-container" style={{ maxWidth: "760px", margin: "0 auto" }}>
          {linkGroups.map((group, gi) => (
            <RevealOnScroll key={group.heading} delay={gi * 80}>
              <div style={{ marginBottom: "3.5rem" }}>
                <p className="caps" style={{ color: "var(--gold)", fontSize: "0.62rem", marginBottom: "1.5rem", paddingBottom: "0.8rem", borderBottom: "1px solid var(--rule)" }}>
                  {group.heading}
                </p>
                {group.links.map((link) => (
                  <div key={link.label} style={{ marginBottom: "1.5rem", paddingLeft: "1.2rem", borderLeft: "2px solid var(--rule)" }}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="display" style={{ fontSize: "1.05rem", color: "var(--oak)", display: "block", marginBottom: "0.5rem" }}>
                      {link.label} ↗
                    </a>
                    <p style={{ fontSize: "0.88rem", color: "var(--stone)", fontStyle: "italic", lineHeight: 1.65 }}>{link.note}</p>
                    <p style={{ fontSize: "0.78rem", color: "#8A7860", marginTop: "0.3rem", wordBreak: "break-all" }}>{link.url}</p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          ))}

          <RevealOnScroll delay={200}>
            <div style={{ background: "var(--oak)", padding: "2rem", borderLeft: "3px solid var(--gold)", marginTop: "2rem" }}>
              <p className="caps" style={{ color: "var(--gold-light)", fontSize: "0.58rem", marginBottom: "0.8rem" }}>Know Something We Don't?</p>
              <p style={{ color: "var(--parchment)", fontSize: "0.95rem", lineHeight: 1.7 }}>
                This site is a family tribute, growing over time. If you have records, photographs,
                or knowledge of Edward Maene's work — in churches, universities, private collections,
                or public buildings — we would love to hear from you.
              </p>
              <p style={{ marginTop: "1rem" }}>
                <a href="/contact" style={{ color: "var(--gold-light)", fontSize: "0.88rem" }}>Contact us →</a>
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
