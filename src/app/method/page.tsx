import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Fight Secrets Method | James Wilks",
  description:
    "The three-phase system — Prepare, Protect, Prevail — built from decades of elite combat experience and real-world pressure testing.",
};

const phases = [
  {
    num: "01",
    title: "Prepare",
    color: "var(--red-bright)",
    icon: "/images/icon-prepare.png",
    tagline: "Awareness before action.",
    description:
      "The first phase of the Fight Secrets method focuses on the mental and perceptual skills that prevent encounters from ever escalating to violence. James teaches students how to read their environment, recognize pre-incident indicators, and make the split-second decisions that keep them safe.",
    points: [
      "Situational awareness frameworks used by intelligence professionals",
      "Pre-incident indicator recognition — spotting threats before they act",
      "Avoidance and de-escalation as primary survival tools",
      "Mental rehearsal and stress inoculation techniques",
      "Understanding predator vs. asocial violence patterns",
    ],
  },
  {
    num: "02",
    title: "Protect",
    color: "var(--red-bright)",
    icon: "/images/icon-protect.png",
    tagline: "When awareness isn't enough.",
    description:
      "When avoidance has failed and confrontation is unavoidable, the Protect phase delivers the pressure-tested physical skills you need. Built from BJJ, combat submission wrestling, Special Forces close-quarters techniques, and James' career in professional MMA.",
    points: [
      "Clinch control and weapon-threat defense",
      "Ground survival and escape protocols",
      "Multiple-attacker awareness and positioning",
      "Strike efficiency under stress — not gym punches",
      "Weapon retention and disengagement tactics",
    ],
  },
  {
    num: "03",
    title: "Prevail",
    color: "var(--red-bright)",
    icon: "/images/icon-prevail.png",
    tagline: "After the storm.",
    description:
      "Surviving an encounter is only part of the challenge. The Prevail phase addresses the psychological, legal, and recovery dimensions that most self-defense courses completely ignore — the things that determine whether you truly come out whole on the other side.",
    points: [
      "Post-incident psychological first aid and recovery",
      "Legal and law enforcement interaction protocols",
      "Communicating clearly after an adrenaline event",
      "Building long-term confidence and mental resilience",
      "Integration training: responding well, not just reacting",
    ],
  },
];

export default function MethodPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ padding: "140px 24px 80px", background: "var(--black)", position: "relative", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 100% 50%, rgba(204,17,34,0.06) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <span
            style={{ display: "block", width: "48px", height: "3px", background: "var(--red-bright)", borderRadius: "2px", marginBottom: "24px" }}
          />
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
            The System
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
            The Fight Secrets
            <br />
            <span style={{ color: "var(--red-bright)" }}>Method</span>
          </h1>
          <p style={{ fontSize: "18px", color: "var(--text-secondary)", maxWidth: "560px", lineHeight: "1.65" }}>
            Three phases. One complete system. Built from real combat
            experience and decades of teaching under pressure.
          </p>
        </div>
      </section>

      {/* PHASES */}
      {phases.map((p, i) => (
        <section
          key={p.num}
          style={{
            padding: "100px 24px",
            background: i % 2 === 0 ? "var(--surface)" : "var(--black)",
            borderTop: "1px solid var(--border)",
          }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: i % 2 === 0 ? "1fr 1.2fr" : "1.2fr 1fr",
                gap: "80px",
                alignItems: "center",
              }}
              className="phase-grid"
            >
              {/* Left or right image-style block */}
              {i % 2 !== 0 && (
                <div
                  style={{
                    background: "var(--surface-2)",
                    border: "1px solid rgba(204,17,34,0.15)",
                    padding: "64px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: "24px",
                  }}
                  className="phase-visual"
                >
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "96px",
                      fontWeight: 900,
                      color: "rgba(204,17,34,0.12)",
                      lineHeight: 1,
                    }}
                  >
                    {p.num}
                  </div>
                  <Image src={p.icon} alt={p.title} width={80} height={80} />
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "48px",
                      fontWeight: 900,
                      textTransform: "uppercase",
                      color: "var(--red-bright)",
                    }}
                  >
                    {p.title}
                  </div>
                  <p style={{ fontSize: "14px", color: "var(--text-secondary)", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
                    {p.tagline}
                  </p>
                </div>
              )}

              {/* Text */}
              <div>
                <span
                  style={{
                    display: "block",
                    width: "48px",
                    height: "3px",
                    background: "var(--red-bright)",
                    borderRadius: "2px",
                    marginBottom: "24px",
                  }}
                />
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.25em",
                    color: "var(--red-bright)",
                    textTransform: "uppercase",
                    marginBottom: "12px",
                  }}
                >
                  Phase {p.num}
                </div>
                <h2
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "clamp(40px, 5vw, 64px)",
                    fontWeight: 900,
                    lineHeight: 1.0,
                    textTransform: "uppercase",
                    color: "#fff",
                    marginBottom: "20px",
                  }}
                >
                  {p.title}
                </h2>
                <p style={{ fontSize: "16px", lineHeight: "1.8", color: "var(--text-secondary)", marginBottom: "32px" }}>
                  {p.description}
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
                  {p.points.map((pt) => (
                    <li key={pt} style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                      <span
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "2px",
                          background: "rgba(204,17,34,0.15)",
                          border: "1px solid rgba(204,17,34,0.3)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: "2px",
                        }}
                      >
                        <span
                          style={{
                            width: "6px",
                            height: "6px",
                            background: "var(--red-bright)",
                            borderRadius: "1px",
                            display: "block",
                          }}
                        />
                      </span>
                      <span style={{ fontSize: "15px", color: "var(--text-primary)", lineHeight: "1.6" }}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right visual block for even-indexed */}
              {i % 2 === 0 && (
                <div
                  style={{
                    background: "var(--surface-3)",
                    border: "1px solid rgba(204,17,34,0.15)",
                    padding: "64px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: "24px",
                  }}
                  className="phase-visual"
                >
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "96px",
                      fontWeight: 900,
                      color: "rgba(204,17,34,0.12)",
                      lineHeight: 1,
                    }}
                  >
                    {p.num}
                  </div>
                  <Image src={p.icon} alt={p.title} width={80} height={80} />
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "48px",
                      fontWeight: 900,
                      textTransform: "uppercase",
                      color: "var(--red-bright)",
                    }}
                  >
                    {p.title}
                  </div>
                  <p style={{ fontSize: "14px", color: "var(--text-secondary)", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
                    {p.tagline}
                  </p>
                </div>
              )}
            </div>
          </div>
          <style>{`@media(max-width:768px){.phase-grid{grid-template-columns:1fr!important;}.phase-visual{order:-1;}}`}</style>
        </section>
      ))}

      {/* CTA */}
      <section style={{ padding: "100px 24px", background: "var(--black)", textAlign: "center", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 900,
              textTransform: "uppercase",
              color: "#fff",
              marginBottom: "20px",
            }}
          >
            Ready To Apply
            <br />
            <span style={{ color: "var(--red-bright)" }}>The Method?</span>
          </h2>
          <p style={{ fontSize: "17px", color: "var(--text-secondary)", marginBottom: "40px", lineHeight: "1.65" }}>
            The Fight Secrets Method is available through private coaching,
            group intensives, and corporate seminars.
          </p>
          <Link
            href="/training"
            style={{
              background: "var(--red-bright)",
              color: "#fff",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "17px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "18px 44px",
              textDecoration: "none",
              borderRadius: "2px",
              display: "inline-block",
            }}
          >
            View Training Options →
          </Link>
        </div>
      </section>
    </>
  );
}
