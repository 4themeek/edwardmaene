import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ minHeight:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center", padding:"2rem", paddingTop:"64px" }}>
      <p className="display" style={{ color:"var(--gold)", fontSize:"5rem", lineHeight:1 }}>404</p>
      <p className="display" style={{ fontSize:"1.8rem", color:"var(--oak)", margin:"1rem 0 0.5rem", fontStyle:"italic" }}>Page Not Found</p>
      <p style={{ color:"var(--stone)", marginBottom:"2rem" }}>The page you are looking for does not exist.</p>
      <Link href="/" className="caps" style={{ color:"var(--gold)", fontSize:"0.65rem", border:"1px solid var(--rule)", padding:"0.7rem 1.8rem" }}>Return Home</Link>
    </div>
  );
}
