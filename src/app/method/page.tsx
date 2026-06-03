import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "The Fight Secrets Method | James Wilks",
  description:
    "The three-phase system — Prepare, Protect, Prevail — built from decades of elite combat experience and real-world pressure testing.",
};

const phases = [
  {
    num: "01",
    title: "Prepare",
    icon: "/images/icon-prepare-new.png",
    tagline: "Awareness before action.",
    description:
      "The first phase focuses on the mental and perceptual skills that prevent encounters from ever escalating to violence. James teaches students how to read their environment, recognize pre-incident indicators, and make the split-second decisions that keep them safe.",
    points: [
      "Situational awareness frameworks used by intelligence professionals",
      "Pre-incident indicator recognition — spotting threats before they act",
      "Avoidance and de-escalation as primary survival tools",
      "Mental rehearsal and stress inoculation techniques",
      "Understanding predator vs. asocial violence patterns",
    ],
    // Radar / grid pattern — "seeing everything"
    bgPattern: `
      radial-gradient(circle at 50% 50%, rgba(181,18,27,0.18) 0%, transparent 55%),
      repeating-conic-gradient(rgba(181,18,27,0.04) 0deg, transparent 1deg, transparent 29deg, rgba(181,18,27,0.04) 30deg),
      repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 48px),
      repeating-linear-gradient(90deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 48px)
    `,
    accentGlow: "rgba(181,18,27,0.22)",
  },
  {
    num: "02",
    title: "Protect",
    icon: "/images/icon-protect-new.png",
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
    // Diagonal slash pattern — "cutting through"
    bgPattern: `
      radial-gradient(ellipse at 50% 40%, rgba(181,18,27,0.2) 0%, transparent 60%),
      repeating-linear-gradient(
        -55deg,
        rgba(181,18,27,0.06) 0px, rgba(181,18,27,0.06) 2px,
        transparent 2px, transparent 32px
      ),
      repeating-linear-gradient(
        35deg,
        rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px,
        transparent 1px, transparent 44px
      )
    `,
    accentGlow: "rgba(181,18,27,0.28)",
  },
  {
    num: "03",
    title: "Prevail",
    icon: "/images/icon-prevail-new.png",
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
    // Upward beam — "rising, prevailing"
    bgPattern: `
      radial-gradient(ellipse 60% 80% at 50% 100%, rgba(181,18,27,0.22) 0%, transparent 60%),
      linear-gradient(to top, rgba(181,18,27,0.08) 0%, transparent 50%),
      repeating-linear-gradient(
        -45deg,
        rgba(255,255,255,0.012) 0px, rgba(255,255,255,0.012) 1px,
        transparent 1px, transparent 40px
      ),
      repeating-linear-gradient(
        45deg,
        rgba(255,255,255,0.012) 0px, rgba(255,255,255,0.012) 1px,
        transparent 1px, transparent 40px
      )
    `,
    accentGlow: "rgba(181,18,27,0.18)",
  },
];

export default function MethodPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section
        style={{
          position: "relative",
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          background: "#0A0A0A",
        }}
      >
        {/* Background — James hero image */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/images/james-hero.png"
            alt=""
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center 20%" }}
          />
          {/* Heavy left-side dark overlay so text reads perfectly */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to right, rgba(10,10,10,0.98) 45%, rgba(10,10,10,0.7) 70%, rgba(10,10,10,0.25) 100%)",
          }} />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, #0A0A0A 0%, transparent 40%)",
          }} />
          {/* Diagonal grid overlay */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: `
              repeating-linear-gradient(-45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 44px),
              repeating-linear-gradient( 45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 44px)
            `,
          }} />
        </div>

        {/* Content */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "160px 24px 100px", position: "relative", zIndex: 1, width: "100%" }}>
          <AnimateOnScroll animation="fadeInUp">
            <span style={{ display: "block", width: "48px", height: "3px", background: "#B5121B", borderRadius: "2px", marginBottom: "28px" }} />
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#B5121B",
              display: "block",
              marginBottom: "20px",
            }}>
              The System
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeInUp" delay={100}>
            <h1 style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(52px, 8vw, 100px)",
              fontWeight: 700,
              lineHeight: 0.95,
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              color: "#F2F4F6",
              maxWidth: "720px",
              marginBottom: "28px",
            }}>
              The Fight Secrets<br />
              <span style={{ color: "#B5121B" }}>Method</span>
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeInUp" delay={200}>
            <p style={{ fontSize: "18px", color: "#B7BDC5", maxWidth: "520px", lineHeight: "1.7", marginBottom: "56px" }}>
              Three phases. One complete system. Built from real combat
              experience and decades of teaching under pressure.
            </p>
          </AnimateOnScroll>

          {/* Phase indicator chips */}
          <AnimateOnScroll animation="fadeInUp" delay={300}>
            <div style={{ display: "flex", gap: "0", flexWrap: "wrap" }}>
              {phases.map((p, i) => (
                <div key={p.num} style={{ display: "flex", alignItems: "center" }}>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "12px 20px",
                    border: "1px solid rgba(44,49,56,0.8)",
                    borderRight: i < phases.length - 1 ? "none" : "1px solid rgba(44,49,56,0.8)",
                    background: "rgba(10,10,10,0.6)",
                    backdropFilter: "blur(8px)",
                  }}>
                    <span style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "#B5121B",
                      letterSpacing: "0.1em",
                    }}>{p.num}</span>
                    <span style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: "13px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: "#C7CCD1",
                    }}>{p.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── PHASES ─── */}
      {phases.map((p, i) => (
        <section
          key={p.num}
          style={{
            background: i % 2 === 0 ? "#1A1D21" : "#0A0A0A",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <hr style={{
            margin: 0, border: "none", height: "1px",
            background: `linear-gradient(to right, transparent, #2C3138 20%, rgba(181,18,27,0.4) 50%, #2C3138 80%, transparent)`,
          }} />

          <div style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: i % 2 === 0 ? "1fr 1.1fr" : "1.1fr 1fr",
            minHeight: "640px",
          }} className="phase-grid">

            {/* ── Odd phases: visual panel on LEFT ── */}
            {i % 2 !== 0 && (
              <div
                className="phase-visual"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  background: "#0d0f12",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "520px",
                  padding: "60px 40px",
                }}
              >
                {/* CSS texture backdrop */}
                <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: p.bgPattern }} />

                {/* Ghost number — huge */}
                <div aria-hidden="true" style={{
                  position: "absolute",
                  bottom: "-40px",
                  right: "-20px",
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "280px",
                  fontWeight: 800,
                  lineHeight: 1,
                  color: "rgba(181,18,27,0.07)",
                  letterSpacing: "-0.06em",
                  userSelect: "none",
                  pointerEvents: "none",
                }}>
                  {p.num}
                </div>

                {/* Icon with multi-layer glow */}
                <AnimateOnScroll animation="scaleIn" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                  <div style={{ position: "relative", display: "inline-flex", flexDirection: "column", alignItems: "center", gap: "28px" }}>
                    {/* Outer atmosphere */}
                    <div style={{
                      position: "absolute",
                      top: "50%", left: "50%",
                      transform: "translate(-50%, -70%)",
                      width: "260px", height: "260px",
                      borderRadius: "50%",
                      background: `radial-gradient(circle, ${p.accentGlow} 0%, transparent 70%)`,
                      pointerEvents: "none",
                    }} />
                    {/* Ring */}
                    <div style={{
                      width: "160px", height: "160px",
                      borderRadius: "50%",
                      border: "1px solid rgba(181,18,27,0.3)",
                      background: "rgba(181,18,27,0.07)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                    }}>
                      {/* Inner ring */}
                      <div style={{
                        position: "absolute",
                        inset: "12px",
                        borderRadius: "50%",
                        border: "1px solid rgba(181,18,27,0.2)",
                      }} />
                      <Image
                        src={p.icon}
                        alt={p.title}
                        width={88}
                        height={88}
                        style={{
                          objectFit: "contain",
                          filter: "drop-shadow(0 0 20px rgba(181,18,27,0.7)) drop-shadow(0 0 40px rgba(181,18,27,0.3))",
                          position: "relative",
                          zIndex: 1,
                        }}
                      />
                    </div>

                    {/* Title + tagline */}
                    <div style={{ textAlign: "center" }}>
                      <div style={{
                        fontFamily: "'Oswald', sans-serif",
                        fontSize: "52px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        color: "#F2F4F6",
                        lineHeight: 1,
                        marginBottom: "10px",
                      }}>{p.title}</div>
                      <div style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "12px",
                        fontWeight: 600,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "#B5121B",
                      }}>{p.tagline}</div>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
            )}

            {/* ── Text column ── */}
            <AnimateOnScroll
              animation={i % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
              style={{ padding: "80px 60px", display: "flex", flexDirection: "column", justifyContent: "center" }}
            >
              <span style={{ display: "block", width: "40px", height: "2px", background: "#B5121B", marginBottom: "24px" }} />
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.22em",
                color: "#B5121B",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}>
                Phase {p.num}
              </div>
              <h2 style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "clamp(40px, 5vw, 68px)",
                fontWeight: 700,
                lineHeight: 1.0,
                textTransform: "uppercase",
                letterSpacing: "0.02em",
                color: "#F2F4F6",
                marginBottom: "22px",
              }}>
                {p.title}
              </h2>
              <div style={{ width: "32px", height: "2px", background: "#B5121B", marginBottom: "24px" }} />
              <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#B7BDC5", marginBottom: "36px", maxWidth: "480px" }}>
                {p.description}
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
                {p.points.map((pt, pi) => (
                  <li key={pt} style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                    <span style={{
                      width: "22px", height: "22px",
                      borderRadius: "4px",
                      background: "rgba(181,18,27,0.12)",
                      border: "1px solid rgba(181,18,27,0.28)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "1px",
                    }}>
                      <span style={{ width: "6px", height: "6px", background: "#B5121B", borderRadius: "1px", display: "block" }} />
                    </span>
                    <span style={{ fontSize: "15px", color: "#C7CCD1", lineHeight: "1.65" }}>{pt}</span>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>

            {/* ── Even phases: visual panel on RIGHT ── */}
            {i % 2 === 0 && (
              <div
                className="phase-visual"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  background: "#0d0f12",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "520px",
                  padding: "60px 40px",
                }}
              >
                <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: p.bgPattern }} />

                <div aria-hidden="true" style={{
                  position: "absolute",
                  bottom: "-40px",
                  right: "-20px",
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "280px",
                  fontWeight: 800,
                  lineHeight: 1,
                  color: "rgba(181,18,27,0.07)",
                  letterSpacing: "-0.06em",
                  userSelect: "none",
                  pointerEvents: "none",
                }}>
                  {p.num}
                </div>

                <AnimateOnScroll animation="scaleIn" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                  <div style={{ position: "relative", display: "inline-flex", flexDirection: "column", alignItems: "center", gap: "28px" }}>
                    <div style={{
                      position: "absolute",
                      top: "50%", left: "50%",
                      transform: "translate(-50%, -70%)",
                      width: "260px", height: "260px",
                      borderRadius: "50%",
                      background: `radial-gradient(circle, ${p.accentGlow} 0%, transparent 70%)`,
                      pointerEvents: "none",
                    }} />
                    <div style={{
                      width: "160px", height: "160px",
                      borderRadius: "50%",
                      border: "1px solid rgba(181,18,27,0.3)",
                      background: "rgba(181,18,27,0.07)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                    }}>
                      <div style={{
                        position: "absolute", inset: "12px",
                        borderRadius: "50%",
                        border: "1px solid rgba(181,18,27,0.2)",
                      }} />
                      <Image
                        src={p.icon}
                        alt={p.title}
                        width={88}
                        height={88}
                        style={{
                          objectFit: "contain",
                          filter: "drop-shadow(0 0 20px rgba(181,18,27,0.7)) drop-shadow(0 0 40px rgba(181,18,27,0.3))",
                          position: "relative",
                          zIndex: 1,
                        }}
                      />
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <div style={{
                        fontFamily: "'Oswald', sans-serif",
                        fontSize: "52px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        color: "#F2F4F6",
                        lineHeight: 1,
                        marginBottom: "10px",
                      }}>{p.title}</div>
                      <div style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "12px",
                        fontWeight: 600,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "#B5121B",
                      }}>{p.tagline}</div>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* ─── CTA ─── */}
      <section style={{
        padding: "120px 24px",
        background: "#0A0A0A",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <hr style={{
          margin: "0 0 0 0", border: "none", height: "1px",
          background: "linear-gradient(to right, transparent, #2C3138 20%, rgba(181,18,27,0.4) 50%, #2C3138 80%, transparent)",
          position: "absolute", top: 0, left: 0, right: 0,
        }} />
        {/* Atmospheric glow */}
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 70% 60% at 50% 110%, rgba(181,18,27,0.12) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />
        {/* Diagonal grid */}
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0,
          backgroundImage: `
            repeating-linear-gradient(-45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 44px),
            repeating-linear-gradient( 45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 44px)
          `,
          pointerEvents: "none",
        }} />

        <AnimateOnScroll animation="fadeInUp" style={{ position: "relative", zIndex: 1, maxWidth: "600px", margin: "0 auto" }}>
          <span style={{ display: "block", width: "40px", height: "2px", background: "#B5121B", margin: "0 auto 24px" }} />
          <h2 style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: "clamp(40px, 5.5vw, 72px)",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.02em",
            lineHeight: 1.05,
            color: "#F2F4F6",
            marginBottom: "20px",
          }}>
            Ready to Apply<br />
            <span style={{ color: "#B5121B" }}>the Method?</span>
          </h2>
          <p style={{ fontSize: "17px", color: "#B7BDC5", marginBottom: "44px", lineHeight: "1.7", maxWidth: "480px", margin: "0 auto 44px" }}>
            The Fight Secrets Method is available through private coaching,
            group intensives, and corporate seminars.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/training" className="btn-primary" style={{ fontSize: "14px", fontWeight: 600, padding: "17px 44px", letterSpacing: "0.08em" }}>
              Train with James
            </Link>
            <Link href="/seminars" className="btn-secondary" style={{ fontSize: "14px", padding: "17px 44px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Host a Seminar
            </Link>
          </div>
        </AnimateOnScroll>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .phase-grid { grid-template-columns: 1fr !important; }
          .phase-visual { min-height: 400px !important; order: -1; }
        }
      `}</style>
    </>
  );
}
