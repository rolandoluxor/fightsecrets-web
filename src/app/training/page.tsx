import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Training | Fight Secrets — James Wilks",
  description:
    "Private coaching, 2-day intensives, and corporate training programs from UFC champion and Special Forces instructor James Wilks.",
};

const programs = [
  {
    id: "private",
    label: "Private Coaching",
    tagline: "One-on-one. Elite access.",
    description:
      "James works personally with a small number of private clients each year. Sessions are tailored entirely to your background, goals, and threat profile — whether you're a professional requiring operational readiness or an individual focused on personal protection.",
    details: [
      "Fully customized curriculum",
      "In-person in Orange County, CA or travel available",
      "Minimum 4-session engagement",
      "Available to civilians, executives, and security professionals",
    ],
    cta: "Inquire About Private Coaching",
    href: "/contact",
    featured: false,
  },
  {
    id: "intensive",
    label: "2-Day Intensive",
    tagline: "Deep immersion. Total transformation.",
    description:
      "The signature Fight Secrets experience. Two full days with James covering all three phases of the method — Prepare, Protect, Prevail — with live drilling, stress inoculation, and Q&A. Limited to small groups to ensure personal attention.",
    details: [
      "Covers the complete Fight Secrets curriculum",
      "Small groups of 6–12 participants max",
      "Held in Orange County, CA",
      "Available for private groups and organizations",
    ],
    cta: "Apply For An Intensive",
    href: "/contact",
    featured: true,
  },
  {
    id: "corporate",
    label: "Corporate & Organization Training",
    tagline: "For teams that need to be ready.",
    description:
      "Custom training programs for corporations, security firms, law enforcement agencies, and military units. James works with your leadership to design curriculum appropriate to your team's role, environment, and risk profile.",
    details: [
      "Scalable to any team size",
      "Custom curriculum for your context",
      "Travel nationwide and internationally",
      "Ongoing program development available",
    ],
    cta: "Request A Corporate Program",
    href: "/contact",
    featured: false,
  },
];

export default function TrainingPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ padding: "140px 24px 80px", background: "var(--black)", position: "relative", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 30% 60%, rgba(204,17,34,0.07) 0%, transparent 60%)",
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
            Work With James
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
            Training
            <br />
            <span style={{ color: "var(--red-bright)" }}>Programs</span>
          </h1>
          <p style={{ fontSize: "18px", color: "var(--text-secondary)", maxWidth: "560px", lineHeight: "1.65" }}>
            James works with a carefully selected group of clients each year.
            Choose the program that matches your needs.
          </p>
        </div>
      </section>

      {/* PROGRAMS */}
      <section style={{ padding: "80px 24px 120px", background: "var(--black)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }} className="programs-grid">
            {programs.map((prog) => (
              <div
                key={prog.id}
                style={{
                  background: prog.featured ? "rgba(204,17,34,0.06)" : "var(--surface-2)",
                  border: prog.featured ? "1px solid rgba(204,17,34,0.25)" : "1px solid var(--border)",
                  padding: "48px 40px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {prog.featured && (
                  <div
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "var(--red-bright)",
                      color: "#fff",
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      padding: "6px 16px",
                    }}
                  >
                    Signature Program
                  </div>
                )}
                <div style={{ marginTop: prog.featured ? "20px" : 0 }}>
                  <h2
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "28px",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      color: prog.featured ? "var(--red-bright)" : "#fff",
                      marginBottom: "8px",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {prog.label}
                  </h2>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "12px",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--text-secondary)",
                      marginBottom: "24px",
                    }}
                  >
                    {prog.tagline}
                  </p>
                  <div style={{ width: "32px", height: "2px", background: "var(--red-bright)", marginBottom: "24px", borderRadius: "1px" }} />
                  <p style={{ fontSize: "15px", lineHeight: "1.75", color: "var(--text-secondary)", marginBottom: "32px" }}>
                    {prog.description}
                  </p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", marginBottom: "40px", flex: 1 }}>
                    {prog.details.map((d) => (
                      <li key={d} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                        <span
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: "var(--red-bright)",
                            flexShrink: 0,
                            marginTop: "7px",
                          }}
                        />
                        <span style={{ fontSize: "14px", color: "var(--text-primary)", lineHeight: "1.5" }}>{d}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={prog.href}
                    style={{
                      display: "block",
                      textAlign: "center",
                      background: prog.featured ? "var(--red-bright)" : "transparent",
                      color: "#fff",
                      border: prog.featured ? "none" : "1px solid rgba(255,255,255,0.2)",
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "15px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      padding: "14px 24px",
                      textDecoration: "none",
                      borderRadius: "2px",
                    }}
                  >
                    {prog.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.programs-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* NOTE */}
      <section
        style={{
          padding: "80px 24px",
          background: "var(--surface)",
          borderTop: "1px solid var(--border)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "var(--text-secondary)",
              fontStyle: "italic",
              marginBottom: "24px",
            }}
          >
            &ldquo;I don&apos;t take every client. I work with people who are genuinely
            committed to learning and applying these skills. If that&apos;s you,
            I want to hear from you.&rdquo;
          </p>
          <p
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "16px",
              fontWeight: 700,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              color: "#fff",
            }}
          >
            — James Wilks
          </p>
        </div>
      </section>
    </>
  );
}
