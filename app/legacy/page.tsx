import type { Metadata } from "next";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Legacy — Edward Maene",
  description: "The enduring legacy of Edward Maene — craftsman, artist, and shaper of Philadelphia's sacred architecture.",
};

export default function Legacy() {
  return (
    <div style={{ paddingTop: "64px" }}>
      <div
        style={{
          background: "var(--ink)",
          padding: "5rem 0 4rem",
          borderBottom: "1px solid var(--gold)",
        }}
      >
        <div className="page-container" style={{ textAlign: "center" }}>
          <p className="caps" style={{ color: "var(--gold)", fontSize: "0.62rem", marginBottom: "1.2rem" }}>
            A Craftsman's Enduring Mark
          </p>
          <h1
            className="display"
            style={{ color: "var(--parchment)", fontSize: "clamp(2.4rem, 6vw, 4rem)", fontWeight: 300 }}
          >
            Legacy
          </h1>
        </div>
      </div>

      <section style={{ padding: "5rem 0" }}>
        <div className="page-container">
          <div style={{ maxWidth: "680px", margin: "0 auto" }}>

            <RevealOnScroll>
              <div className="ornament" style={{ marginBottom: "3rem" }}>
                <span className="caps" style={{ color: "var(--gold)", fontSize: "0.6rem" }}>His Craft</span>
              </div>
              <div className="prose">
                <p>
                  Edward Maene arrived in America with no letters of introduction, only the
                  skill of his hands — trained in the great Gothic tradition of Belgium and refined
                  in Paris. Within two years of landing in Philadelphia he had established
                  workshops that would become a byword for excellence among the city's foremost
                  architects.
                </p>
                <p>
                  What set Maene apart was an unerring fidelity to hand work. In an age when
                  steam-powered machinery was transforming furniture making, his shop on Locust
                  Street operated by the standards of the medieval atelier: every mortise,
                  every foliated capital, every figurative panel cut with gouge and mallet by
                  men who had learned their trade at a master's bench.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <div className="ornament" style={{ margin: "3rem 0" }}>
                <span className="caps" style={{ color: "var(--gold)", fontSize: "0.6rem" }}>His Architects</span>
              </div>
              <div className="prose">
                <p>
                  The architects who collaborated with Maene represent a who's who of
                  Philadelphia's Gilded Age building boom. Wilson Eyre brought his elegant
                  Arts-and-Crafts sensibility; Willis G. Hale his exuberant eclecticism;
                  Cope and Stewardson their refined collegiate Gothic; William Lightfoot Price
                  his Arts-and-Crafts idealism; and Milton B. Medary his scholarly ecclesiastical
                  Gothic. Each trusted Maene to translate their drawings into wood and stone
                  with a fidelity and finesse that no machine could replicate.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <div className="ornament" style={{ margin: "3rem 0" }}>
                <span className="caps" style={{ color: "var(--gold)", fontSize: "0.6rem" }}>Rose Valley</span>
              </div>
              <div className="prose">
                <p>
                  Maene's connection to the short-lived but historically significant Rose Valley
                  community — William Price's utopian Arts-and-Crafts experiment outside Philadelphia —
                  is only now coming into full focus. Historians believe that much of the furniture
                  bearing the Rose Valley mark was actually produced in Maene's downtown workshops.
                  The elaborate Harrison Shakespeare Folio Cabinet, one of the most celebrated
                  pieces of American Arts-and-Crafts furniture, is believed to have originated there.
                </p>
                <p>
                  Maene's nephew John carried the family tradition forward as foreman of Rose
                  Valley's shop — a quiet but significant transfer of craft knowledge from
                  the old Belgian master to the next generation of American makers.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <div className="ornament" style={{ margin: "3rem 0" }}>
                <span className="caps" style={{ color: "var(--gold)", fontSize: "0.6rem" }}>What Remains</span>
              </div>
              <div className="prose">
                <p>
                  Maene's work is not in a museum. It is still in use — still holding
                  congregations, still welcoming worshippers, still standing in the
                  chapels, churches, and university quads of greater Philadelphia.
                  To visit the Washington Memorial Chapel at Valley Forge and sit
                  in the carved choir stalls is to understand, viscerally, what
                  craftsmanship at its highest level looks like.
                </p>
                <p>
                  His grave in the Old Pennypack Cemetery in Bustleton, Philadelphia County,
                  is modest — as befits a man who put everything he had into the work,
                  not the name.
                </p>
              </div>
            </RevealOnScroll>

            {/* Closing pull quote */}
            <RevealOnScroll delay={100}>
              <div
                style={{
                  borderTop: "1px solid var(--rule)",
                  borderBottom: "1px solid var(--rule)",
                  padding: "3rem 0",
                  margin: "3rem 0",
                  textAlign: "center",
                }}
              >
                <p
                  className="display"
                  style={{
                    fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
                    fontStyle: "italic",
                    color: "var(--oak)",
                    lineHeight: 1.5,
                  }}
                >
                  He came with his tools and his training and he gave this city
                  fifty years of extraordinary craft. The stone and the wood
                  remember him still.
                </p>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>
    </div>
  );
}
