import type { Metadata } from "next";
import RevealOnScroll from "@/components/RevealOnScroll";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Edward Maene",
  description: "Get in touch regarding research, historical inquiries, or the works of Edward Maene.",
};

export default function Contact() {
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
            Historical Inquiries Welcome
          </p>
          <h1
            className="display"
            style={{ color: "var(--parchment)", fontSize: "clamp(2.4rem, 6vw, 4rem)", fontWeight: 300 }}
          >
            Contact
          </h1>
        </div>
      </div>

      <section style={{ padding: "5rem 0" }}>
        <div className="page-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: "5rem",
              maxWidth: "860px",
              margin: "0 auto",
            }}
            className="contact-grid"
          >
            {/* Sidebar */}
            <RevealOnScroll>
              <div>
                <p className="caps" style={{ color: "var(--gold)", fontSize: "0.6rem", marginBottom: "1rem" }}>
                  About This Site
                </p>
                <p style={{ fontSize: "0.9rem", color: "var(--stone)", lineHeight: 1.7, marginBottom: "2rem" }}>
                  This site is dedicated to preserving the memory and legacy of Edward Maene,
                  Belgian-American master carver and sculptor, 1852–1931.
                </p>
                <p style={{ fontSize: "0.9rem", color: "var(--stone)", lineHeight: 1.7, marginBottom: "2rem" }}>
                  We welcome inquiries from historians, church archivists, museum professionals,
                  and anyone with an interest in Maene's work, his connection to Rose Valley,
                  or the ecclesiastical architecture of Philadelphia.
                </p>
                <hr className="rule-gold" style={{ marginBottom: "2rem" }} />
                <p className="caps" style={{ color: "var(--gold)", fontSize: "0.6rem", marginBottom: "0.6rem" }}>
                  Location
                </p>
                <p style={{ fontSize: "0.88rem", color: "var(--stone)", lineHeight: 1.6 }}>
                  Philadelphia, Pennsylvania<br />
                  United States
                </p>
              </div>
            </RevealOnScroll>

            {/* Form */}
            <RevealOnScroll delay={150}>
              <ContactForm />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </div>
  );
}
