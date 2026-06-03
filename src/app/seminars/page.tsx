import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seminars | Fight Secrets — James Wilks",
  description:
    "Live seminars from UFC champion and Special Forces combatives instructor James Wilks. Public, corporate, and women's safety events.",
};

const seminarTypes = [
  {
    title: "Public Seminars",
    description:
      "Open enrollment seminars held throughout the year. Covers the core Fight Secrets curriculum — Prepare, Protect, Prevail — in a structured half-day or full-day format. Suitable for all experience levels.",
    format: "Half-day or Full-day",
    size: "Open enrollment (30–60 participants)",
    cta: "View Upcoming Dates",
  },
  {
    title: "Corporate Safety",
    description:
      "Workplace security and personal protection seminars tailored to your organization. Addresses threat awareness, active threat response, de-escalation, and executive protection fundamentals.",
    format: "2–4 hours, customizable",
    size: "Teams of any size",
    cta: "Request Corporate Seminar",
  },
  {
    title: "Women's Safety",
    description:
      "A dedicated program designed specifically for women — covering the psychological and practical dimensions of personal protection in a supportive, focused environment.",
    format: "Full-day intensive",
    size: "Groups of 10–20",
    cta: "Inquire About Women's Safety",
  },
  {
    title: "Law Enforcement & Military",
    description:
      "Specialized curriculum for law enforcement officers, military personnel, and security professionals requiring advanced combatives and threat management training.",
    format: "Multi-day programs available",
    size: "Agency or unit-level",
    cta: "Request LEO/Military Training",
  },
];

export default function SeminarsPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ padding: "140px 24px 80px", background: "var(--black)", position: "relative", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 70% 40%, rgba(204,17,34,0.06) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <span style={{ display: "block", width: "48px", height: "3px", background: "var(--red-bright)", borderRadius: "2px", marginBottom: "24px" }} />
          <span
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--red-bright)",
              display: "block",
              marginBottom: "16px",
            }}
          >
            Live Events
          </span>
          <h1
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(48px, 8vw, 96px)",
              fontWeight: 900,
              lineHeight: 0.95,
              textTransform: "uppercase",
              color: "#fff",
              maxWidth: "700px",
              marginBottom: "24px",
            }}
          >
            Seminars &
            <br />
            <span style={{ color: "var(--red-bright)" }}>Live Events</span>
          </h1>
          <p style={{ fontSize: "18px", color: "var(--text-secondary)", maxWidth: "560px", lineHeight: "1.65" }}>
            Train with James in person. Multiple formats available for
            individuals, organizations, and specialized groups.
          </p>
        </div>
      </section>

      {/* TYPES */}
      <section style={{ padding: "80px 24px 120px", background: "var(--black)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2px" }} className="seminar-grid">
            {seminarTypes.map((s, i) => (
              <div
                key={s.title}
                style={{
                  background: i === 0 ? "rgba(204,17,34,0.05)" : "var(--surface-2)",
                  border: i === 0 ? "1px solid rgba(204,17,34,0.2)" : "1px solid var(--border)",
                  padding: "48px 40px",
                }}
              >
                <h2
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "28px",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    color: i === 0 ? "var(--red-bright)" : "#fff",
                    marginBottom: "16px",
                    letterSpacing: "0.03em",
                  }}
                >
                  {s.title}
                </h2>
                <p style={{ fontSize: "15px", lineHeight: "1.75", color: "var(--text-secondary)", marginBottom: "24px" }}>
                  {s.description}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
                  <div style={{ display: "flex", gap: "12px" }}>
                    <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--red-bright)", width: "64px", flexShrink: 0 }}>Format</span>
                    <span style={{ fontSize: "14px", color: "var(--text-secondary)" }}>{s.format}</span>
                  </div>
                  <div style={{ display: "flex", gap: "12px" }}>
                    <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--red-bright)", width: "64px", flexShrink: 0 }}>Group</span>
                    <span style={{ fontSize: "14px", color: "var(--text-secondary)" }}>{s.size}</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "14px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: i === 0 ? "var(--red-bright)" : "#fff",
                    textDecoration: "none",
                    borderBottom: `1px solid ${i === 0 ? "var(--red-bright)" : "rgba(255,255,255,0.2)"}`,
                    paddingBottom: "3px",
                  }}
                >
                  {s.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.seminar-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* UPCOMING — placeholder */}
      <section style={{ padding: "80px 24px", background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <span style={{ display: "block", width: "48px", height: "3px", background: "var(--red-bright)", borderRadius: "2px", marginBottom: "24px" }} />
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 900,
              textTransform: "uppercase",
              color: "#fff",
              marginBottom: "16px",
            }}
          >
            Upcoming Events
          </h2>
          <p style={{ fontSize: "16px", color: "var(--text-secondary)", marginBottom: "32px", lineHeight: "1.65" }}>
            Seminar dates are announced via email. Join the list to be the first
            to know when new events are scheduled.
          </p>
          <Link
            href="/contact"
            style={{
              background: "var(--red-bright)",
              color: "#fff",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "16px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "16px 36px",
              textDecoration: "none",
              borderRadius: "2px",
              display: "inline-block",
            }}
          >
            Join The Mailing List
          </Link>
        </div>
      </section>
    </>
  );
}
