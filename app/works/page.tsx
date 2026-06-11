import type { Metadata } from "next";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Known Works — Edward Maene",
  description: "The full catalogue of Edward Maene's known architectural and decorative commissions across Philadelphia, Pennsylvania, New Jersey, Delaware, New York, Connecticut, and Ohio.",
};

const works = [
  {
    region: "Philadelphia & Surroundings",
    items: [
      {
        name: "Washington Memorial Chapel",
        address: "Rt. 23, Valley Forge Historical Park, Valley Forge, PA 19481",
        phone: "610-783-0120",
        work: "Choir stalls and screens — hand-carved oak. Completed 1913.",
        note: "Universally regarded as the finest examples of hand-carved wood in the United States.",
      },
      {
        name: "St. Clement's Episcopal Church",
        address: "20th St. and Cherry, Philadelphia",
        phone: "215-563-1876",
        work: "Stone altar, high altar, font, Lady Chapel, wood pulpit, Stations of the Cross. 1908–1917.",
        note: "The high altar (consecrated 11/22/08) was credited to \"a gifted Belgian sculptor.\"",
      },
      {
        name: "St. Luke's Episcopal Church",
        address: "5421 Germantown Ave., Philadelphia",
        phone: "215-844-8544",
        work: "Altar, screen, Rood beam, pulpit, Manger set.",
        note: "Church records credit Edward Maene. Correspondence exists regarding the manger set.",
      },
      {
        name: "St. Mark's Church",
        address: "1625 Locust St., Philadelphia",
        phone: "215-735-1416",
        work: "Great doors of the Parish Church.",
      },
      {
        name: "University of Pennsylvania",
        address: "34th St. entrance; 37th St. & Walnut St., Philadelphia",
        work: "Exterior stonework, four towers, Commemoration of the Spanish-American War.",
      },
      {
        name: "Pennsylvania Law School",
        address: "34th St. and Sansom St., Philadelphia",
        work: "Exterior stonework.",
      },
      {
        name: "Christ Church",
        address: "2nd St. and Market St., Philadelphia",
        phone: "215-922-1695",
        work: "Woodwork and stonework.",
      },
      {
        name: "First Baptist Church",
        address: "123 S. 17th Street (corner Sansom St.), Philadelphia",
        phone: "215-563-3853",
        work: "Interior commissions.",
      },
      {
        name: "New Temple University Building",
        address: "Broad and Montgomery, Philadelphia",
        work: "Exterior stonework.",
      },
      {
        name: "Building at 1610 Locust St.",
        address: "1610 Locust St., Philadelphia",
        work: "Exterior stonework.",
      },
      {
        name: "Old Evening Bulletin Building",
        address: "Philadelphia",
        work: "Exterior stonework.",
      },
      {
        name: "Rite Aid Pharmacy (Provident Building)",
        address: "Chestnut St. at 17th St., Philadelphia",
        work: "\"The Sower\" — plaques on either side of entrance doors (now covered by Rite Aid signs).",
      },
      {
        name: "Keneseth Israel Synagogue",
        address: "18th St. and Columbia Ave., Philadelphia (demolished)",
        work: "Carved architectural elements.",
      },
      {
        name: "J. Wesley Pullman Office Building Façade",
        address: "Philadelphia, 1886",
        work: "Decorative sculptural details in collaboration with architect Wilson Eyre.",
        note: "\"Sculptor Edward Maene collaborated with Eyre in creating the rich, decorative details of this facade.\"",
      },
      {
        name: "St. Luke's Episcopal Church",
        address: "Bustleton, Philadelphia",
        work: "Interior woodwork.",
      },
      {
        name: "Pennepack Baptist Church Cemetery",
        address: "8700 block, Krewstown Rd., Philadelphia",
        work: "Stone angel — Susanne Maene's grave marker.",
      },
      {
        name: "Bustleton Homes",
        address: "Banes St., Bustleton, Philadelphia",
        work: "Three houses built by Edward Maene.",
      },
      {
        name: "The Lord's Supper",
        address: "Rockledge, Philadelphia",
        work: "Decorative commission.",
      },
      {
        name: "Grey Towers Castle, Arcadia University",
        address: "450 S. Easton Rd., Glenside, PA 19038",
        phone: "215-572-2945",
        work: "Architectural stonework. Declared a National Historic Landmark in 1985. Architect: Horace Trumbauer. Completed 1898.",
      },
      {
        name: "Rose Valley Furniture",
        address: "Rose Valley, Pennsylvania",
        work: "Furniture produced in Maene's downtown Philadelphia workshops for Will Price's Arts & Crafts community. Includes likely authorship of the Harrison Shakespeare Folio Cabinet.",
        note: "Maene's nephew John served as foreman at Rose Valley. The family possesses Rose Valley style furniture handed down from Edward Maene and a metal name stamp (E.Maene) from Rose Valley.",
      },
    ],
  },
  {
    region: "Delaware",
    items: [
      {
        name: "The Cathedral Church of St. John",
        address: "10 Concord Ave., Wilmington, DE",
        phone: "302-654-6279",
        work: "Architectural work credited by author Barksdale Maynard.",
      },
      {
        name: "Trinity Episcopal Church",
        address: "1108 N. Adams St., Wilmington, DE",
        phone: "302-652-8605",
        work: "Stone altar, wainscoting, Bishop's chair (stone), choir and clergy stalls (oak).",
        note: "Church records attribute this to John Maene and Co.; author Barksdale Maynard credited Edward Maene.",
      },
    ],
  },
  {
    region: "New Jersey",
    items: [
      {
        name: "St. Peter's Episcopal Church",
        address: "183 Rector St., Perth Amboy, NJ 08861",
        phone: "732-826-1594",
        work: "Altar, pulpit, roof beam.",
        note: "Church records document Edward Maene's work.",
      },
      {
        name: "Camden County Courthouse",
        address: "520 Market St., Camden, NJ (demolished)",
        work: "Exterior marble columns.",
      },
    ],
  },
  {
    region: "New Jersey — Princeton",
    items: [
      {
        name: "Princeton University",
        address: "Princeton, NJ",
        work: "Exterior stonework and columns.",
      },
    ],
  },
  {
    region: "New York",
    items: [
      {
        name: "St. John the Divine",
        address: "New York, NY",
        work: "Architectural stonework.",
      },
      {
        name: "St. Paul's Episcopal Church",
        address: "Norwalk, CT",
        work: "Pulpit.",
      },
    ],
  },
  {
    region: "Ohio",
    items: [
      {
        name: "Cincinnati Public Library",
        address: "Cincinnati, Ohio",
        work: "Architectural commission.",
      },
    ],
  },
];

export default function Works() {
  return (
    <div style={{ paddingTop: "64px" }}>
      <div style={{ background: "var(--ink)", padding: "5rem 0 4rem", borderBottom: "1px solid var(--gold)" }}>
        <div className="page-container" style={{ textAlign: "center" }}>
          <p className="caps" style={{ color: "var(--gold)", fontSize: "0.62rem", marginBottom: "1.2rem" }}>
            A Legacy Carved Across a Nation
          </p>
          <h1 className="display" style={{ color: "var(--parchment)", fontSize: "clamp(2.4rem, 6vw, 4rem)", fontWeight: 300 }}>
            Known Works
          </h1>
          <p style={{ color: "var(--stone)", maxWidth: "540px", margin: "1.2rem auto 0", fontSize: "0.95rem" }}>
            A catalogue of Edward Maene's documented commissions spanning Philadelphia, 
            Delaware, New Jersey, New York, Connecticut, and Ohio.
          </p>
        </div>
      </div>

      <section style={{ padding: "5rem 0" }}>
        <div className="page-container">
          {works.map((region, ri) => (
            <RevealOnScroll key={region.region} delay={ri * 40}>
              <div style={{ marginBottom: "4rem" }}>
                <div className="ornament" style={{ marginBottom: "2.5rem" }}>
                  <span className="caps" style={{ color: "var(--gold)", fontSize: "0.6rem", whiteSpace: "nowrap" }}>
                    {region.region}
                  </span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                  {region.items.map((item, ii) => (
                    <RevealOnScroll key={item.name} delay={ii * 40}>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 2fr",
                          gap: "2.5rem",
                          padding: "1.8rem 0",
                          borderBottom: "1px solid var(--rule)",
                        }}
                        className="work-row"
                      >
                        <div>
                          <p className="display" style={{ color: "var(--oak)", fontSize: "1.1rem", fontWeight: 400, marginBottom: "0.3rem" }}>
                            {item.name}
                          </p>
                          <p style={{ color: "var(--stone)", fontSize: "0.8rem", lineHeight: 1.5 }}>{item.address}</p>
                          {item.phone && (
                            <p style={{ color: "var(--stone)", fontSize: "0.78rem", marginTop: "0.2rem" }}>{item.phone}</p>
                          )}
                        </div>
                        <div>
                          <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: item.note ? "0.6rem" : 0 }}>
                            {item.work}
                          </p>
                          {item.note && (
                            <p style={{ fontSize: "0.85rem", fontStyle: "italic", color: "var(--stone)", lineHeight: 1.6 }}>
                              {item.note}
                            </p>
                          )}
                        </div>
                      </div>
                    </RevealOnScroll>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .work-row { grid-template-columns: 1fr !important; gap: 0.8rem !important; }
        }
      `}</style>
    </div>
  );
}
