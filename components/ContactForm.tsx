"use client";
import { useState } from "react";

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid var(--rule)",
  padding: "0.6rem 0",
  fontSize: "1rem",
  color: "var(--ink)",
  fontFamily: "'EB Garamond', Georgia, serif",
  outline: "none",
  marginBottom: "2rem",
  transition: "border-color 0.2s",
};

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [fields, setFields] = useState({ name: "", email: "", subject: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFields((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In production, wire to an API route / Resend / Formspree
    setSent(true);
  }

  if (sent) {
    return (
      <div style={{ textAlign: "center", padding: "4rem 2rem" }}>
        <p style={{ color: "var(--gold)", fontSize: "2rem", marginBottom: "1rem" }}>✦</p>
        <p className="display" style={{ fontSize: "1.6rem", color: "var(--oak)", marginBottom: "0.8rem" }}>
          Thank you
        </p>
        <p style={{ color: "var(--stone)" }}>Your message has been received. We will be in touch.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 2rem" }} className="form-row">
        <div>
          <label className="caps" style={{ fontSize: "0.58rem", color: "var(--stone)", display: "block", marginBottom: "0.4rem" }}>
            Your Name
          </label>
          <input
            type="text"
            name="name"
            required
            value={fields.name}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div>
          <label className="caps" style={{ fontSize: "0.58rem", color: "var(--stone)", display: "block", marginBottom: "0.4rem" }}>
            Email Address
          </label>
          <input
            type="email"
            name="email"
            required
            value={fields.email}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
      </div>

      <div>
        <label className="caps" style={{ fontSize: "0.58rem", color: "var(--stone)", display: "block", marginBottom: "0.4rem" }}>
          Subject
        </label>
        <input
          type="text"
          name="subject"
          value={fields.subject}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      <div>
        <label className="caps" style={{ fontSize: "0.58rem", color: "var(--stone)", display: "block", marginBottom: "0.4rem" }}>
          Message
        </label>
        <textarea
          name="message"
          required
          rows={6}
          value={fields.message}
          onChange={handleChange}
          style={{
            ...inputStyle,
            resize: "vertical",
            borderBottom: "none",
            border: "1px solid var(--rule)",
            padding: "0.8rem",
            marginBottom: "2rem",
          }}
        />
      </div>

      <button
        type="submit"
        style={{
          background: "var(--oak)",
          color: "var(--parchment)",
          border: "1px solid var(--gold)",
          padding: "0.9rem 2.5rem",
          cursor: "pointer",
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 500,
          fontSize: "0.65rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          transition: "background 0.2s, color 0.2s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "var(--gold)";
          (e.currentTarget as HTMLButtonElement).style.color = "var(--ink)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "var(--oak)";
          (e.currentTarget as HTMLButtonElement).style.color = "var(--parchment)";
        }}
      >
        Send Message
      </button>

      <style>{`
        @media (max-width: 480px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </form>
  );
}
