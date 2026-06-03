import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seminars | Fight Secrets — James Wilks",
  description:
    "Real-world self-defense training designed to improve awareness, preparedness, decision-making, and practical protective capability under pressure.",
};

const audiences = [
  {
    title: "Corporate and Executive Groups",
    description:
      "Designed for companies, leadership teams, and executive groups seeking practical personal safety strategies for the home, the workplace, and while traveling.",
  },
  {
    title: "Military and Law Enforcement",
    description:
      "Advanced real-world protection training for military and law enforcement professionals operating in high-pressure environments.",
  },
  {
    title: "Martial Arts and Self-Defense Schools",
    description:
      "Structured to complement and build upon existing martial arts and self-defense training with integrated protection strategies and applied tactical training.",
  },
];

const focusAreas = [
  "Threat Awareness and Prevention",
  "Verbalization and De-Escalation",
  "Practical Self-Defense Techniques & Tactics",
  "Legal Considerations of Self-Defense",
];

export default function SeminarsPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ padding: "156px 24px 80px", background: "#0A0A0A", position: "relative", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse at 70% 40%, rgba(181,18,27,0.05) 0%, transparent 55%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <span style={{ display: "block", width: "40px", height: "2px", background: "#B5121B", marginBottom: "20px" }} />
          <span
            style={{
              fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 600,
              letterSpacing: "0.22em", textTransform: "uppercase", color: "#B5121B",
              display: "block", marginBottom: "14px",
            }}
          >
            Live Events
          </span>
          <h1
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(44px, 7vw, 88px)",
              fontWeight: 700, lineHeight: 1.0,
              textTransform: "uppercase", letterSpacing: "0.02em",
              color: "#F2F4F6", maxWidth: "700px", marginBottom: "20px",
            }}
          >
            Fight Secrets Seminars
            <br />
            <span style={{ color: "#B5121B" }}>with James Wilks</span>
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "17px", color: "#B7BDC5", maxWidth: "560px", lineHeight: "1.7", marginBottom: "16px" }}>
            Real-world self-defense training designed to improve awareness,
            preparedness, decision-making, and practical protective capability
            under pressure.
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#7A828C", letterSpacing: "0.04em" }}>
            No prior training experience is required.
          </p>
        </div>
      </section>

      {/* CORE FOCUS AREAS */}
      <section style={{ padding: "60px 24px 80px", background: "#1A1D21", borderTop: "1px solid #2C3138" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Oswald', sans-serif", fontSize: "18px", fontWeight: 500,
              letterSpacing: "0.14em", textTransform: "uppercase", color: "#7A828C",
              marginBottom: "24px",
            }}
          >
            Core Areas of Focus
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {focusAreas.map((f) => (
              <div
                key={f}
                style={{
                  fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 500,
                  color: "#C7CCD1", letterSpacing: "0.04em",
                  border: "1px solid #2C3138", borderRadius: "2px",
                  padding: "8px 18px",
                  background: "#141619",
                }}
              >
                {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECOMMENDED FOR */}
      <section style={{ padding: "80px 24px 100px", background: "#0A0A0A", borderTop: "1px solid #2C3138" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <span style={{ display: "block", width: "40px", height: "2px", background: "#B5121B", marginBottom: "20px" }} />
          <h2
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 700, lineHeight: 1.0,
              textTransform: "uppercase", letterSpacing: "0.02em",
              color: "#F2F4F6", marginBottom: "48px",
            }}
          >
            Recommended For
          </h2>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }}
            className="seminar-grid"
          >
            {audiences.map((a, i) => (
              <div
                key={a.title}
                style={{
                  background: i === 0 ? "rgba(181,18,27,0.04)" : "#1A1D21",
                  border: i === 0 ? "1px solid rgba(181,18,27,0.18)" : "1px solid #2C3138",
                  padding: "40px 32px",
                  transition: "border-color 0.25s",
                }}
              >
                <div
                  style={{
                    width: "28px", height: "2px", background: "#B5121B", marginBottom: "20px",
                  }}
                />
                <h3
                  style={{
                    fontFamily: "'Oswald', sans-serif", fontSize: "20px", fontWeight: 600,
                    textTransform: "uppercase", letterSpacing: "0.05em",
                    color: "#F2F4F6", marginBottom: "14px",
                  }}
                >
                  {a.title}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#B7BDC5", lineHeight: "1.75" }}>
                  {a.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.seminar-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px 100px", background: "#1A1D21", borderTop: "1px solid #2C3138", textAlign: "center" }}>
        <div style={{ maxWidth: "540px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 700, lineHeight: 1.0,
              textTransform: "uppercase", letterSpacing: "0.02em",
              color: "#F2F4F6", marginBottom: "16px",
            }}
          >
            Bring James to
            <br />
            <span style={{ color: "#B5121B" }}>Your Organization</span>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: "#B7BDC5", lineHeight: "1.7", marginBottom: "32px" }}>
            Available for corporate groups, agencies, schools, and private
            organizations. Reach out to discuss your needs.
          </p>
          <Link
            href="/contact"
            className="btn-primary"
            style={{ fontSize: "14px", fontWeight: 600, padding: "16px 40px", letterSpacing: "0.08em" }}
          >
            Request a Seminar
          </Link>
        </div>
        <p
          style={{
            fontFamily: "'Oswald', sans-serif", fontSize: "12px", fontWeight: 500,
            letterSpacing: "0.2em", textTransform: "uppercase", color: "#7A828C",
            marginTop: "48px",
          }}
        >
          Prepare | Protect | Prevail
        </p>
      </section>
    </>
  );
}
