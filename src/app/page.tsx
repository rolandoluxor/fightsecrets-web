import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CredentialTicker from "@/components/CredentialTicker";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import StatsCounter from "@/components/StatsCounter";

const method = [
  {
    phase: "01",
    title: "Prepare",
    icon: "/images/icon-prepare.png",
    description:
      "Develop the situational awareness and threat-recognition skills to avoid danger before it starts. Real protection begins long before any physical confrontation.",
  },
  {
    phase: "02",
    title: "Protect",
    icon: "/images/icon-protect.png",
    description:
      "Learn pressure-tested defensive techniques drawn from combat sports, Special Forces training, and real-world law enforcement scenarios.",
  },
  {
    phase: "03",
    title: "Prevail",
    icon: "/images/icon-prevail.png",
    description:
      "Master the mindset and tactical response skills to control any situation — and the psychological recovery tools to move forward with confidence.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section
        style={{
          position: "relative",
          minHeight: "100dvh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          background: "var(--black)",
        }}
      >
        {/* Background photo with subtle zoom */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            animation: "heroZoom 12s ease-out both",
          }}
        >
          <Image
            src="/images/james-hero.png"
            alt="James Wilks"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, rgba(8,8,8,0.97) 45%, rgba(8,8,8,0.55) 70%, rgba(8,8,8,0.15) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(8,8,8,1) 0%, transparent 40%)",
            }}
          />
        </div>

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "120px 24px 80px",
            width: "100%",
          }}
        >
          <div style={{ maxWidth: "640px" }}>
            {/* Eyebrow */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "24px",
                animation: "fadeInUp 0.7s ease 0.15s both",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: "32px",
                  height: "2px",
                  background: "var(--red-bright)",
                  animation: "redLineGrow 0.6s ease 0.5s both",
                }}
              />
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--red-bright)",
                }}
              >
                UFC Champion · Special Forces Instructor
              </span>
            </div>

            {/* Headline — each line staggers */}
            <div style={{ overflow: "hidden", marginBottom: "4px" }}>
              <h1
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "clamp(56px, 8vw, 96px)",
                  fontWeight: 900,
                  lineHeight: 0.95,
                  color: "#fff",
                  textTransform: "uppercase",
                  animation: "fadeInUp 0.65s ease 0.25s both",
                }}
              >
                Real Experience.
              </h1>
            </div>
            <div style={{ overflow: "hidden", marginBottom: "4px" }}>
              <h1
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "clamp(56px, 8vw, 96px)",
                  fontWeight: 900,
                  lineHeight: 0.95,
                  color: "#fff",
                  textTransform: "uppercase",
                  animation: "fadeInUp 0.65s ease 0.38s both",
                }}
              >
                Real Training.
              </h1>
            </div>
            <div style={{ overflow: "hidden", marginBottom: "28px" }}>
              <h1
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "clamp(56px, 8vw, 96px)",
                  fontWeight: 900,
                  lineHeight: 0.95,
                  color: "var(--red-bright)",
                  textTransform: "uppercase",
                  animation: "fadeInUp 0.65s ease 0.51s both",
                }}
              >
                Real Results.
              </h1>
            </div>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.65",
                color: "var(--silver-light)",
                marginBottom: "40px",
                maxWidth: "500px",
                animation: "fadeInUp 0.7s ease 0.65s both",
              }}
            >
              Elite self-defense strategies from UFC Ultimate Fighter champion
              and Special Forces combatives instructor James Wilks — built for
              those who refuse to be a victim.
            </p>

            <div
              style={{
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
                animation: "fadeInUp 0.7s ease 0.78s both",
              }}
            >
              <Link
                href="/training"
                className="btn-red"
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
                Explore Training →
              </Link>
              <Link
                href="/about"
                style={{
                  border: "1px solid rgba(255,255,255,0.2)",
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
                  background: "rgba(255,255,255,0.04)",
                  transition: "border-color 0.2s, background 0.2s",
                }}
              >
                About James
              </Link>
            </div>

            {/* Tagline badges */}
            <div
              style={{
                display: "flex",
                gap: "24px",
                marginTop: "56px",
                flexWrap: "wrap",
                animation: "fadeInUp 0.7s ease 0.9s both",
              }}
            >
              {["Prepare", "Protect", "Prevail"].map((w, i) => (
                <span
                  key={w}
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--silver)",
                    borderLeft: "2px solid var(--red-bright)",
                    paddingLeft: "10px",
                    animation: `fadeIn 0.5s ease ${0.9 + i * 0.12}s both`,
                  }}
                >
                  {w}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            animation: "fadeIn 1s ease 1.4s both",
          }}
        >
          <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--silver)" }}>
            Scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "48px",
              background: "linear-gradient(to bottom, var(--red-bright), transparent)",
              animation: "scrollPulse 2s ease-in-out infinite",
            }}
          />
        </div>

        {/* Bottom fade */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "140px",
            background: "linear-gradient(to top, var(--black), transparent)",
            zIndex: 3,
          }}
        />
      </section>

      {/* ─── CREDENTIAL TICKER ─── */}
      <CredentialTicker />

      {/* ─── STATS ─── */}
      <section style={{ padding: "80px 24px", background: "var(--black)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <AnimateOnScroll animation="fadeInUp">
            <StatsCounter />
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── ABOUT TEASER ─── */}
      <section
        style={{
          padding: "100px 24px 120px",
          background: "var(--surface)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Photo */}
          <AnimateOnScroll animation="fadeInLeft">
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  top: "24px",
                  left: "24px",
                  right: "-24px",
                  bottom: "-24px",
                  border: "1px solid rgba(204,17,34,0.2)",
                  borderRadius: "4px",
                  zIndex: 0,
                  transition: "border-color 0.3s",
                }}
              />
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  borderRadius: "4px",
                  overflow: "hidden",
                  aspectRatio: "4/5",
                  transition: "transform 0.4s ease",
                }}
                className="photo-zoom"
              >
                <Image
                  src="/images/james-hero.png"
                  alt="James Wilks"
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center top",
                    transition: "transform 0.6s ease",
                  }}
                />
              </div>
            </div>
          </AnimateOnScroll>

          {/* Text */}
          <AnimateOnScroll animation="fadeInRight" delay={150}>
            <div>
              <span
                style={{
                  display: "block",
                  width: "48px",
                  height: "3px",
                  background: "var(--red-bright)",
                  borderRadius: "2px",
                  marginBottom: "24px",
                  animation: "redLineGrow 0.6s ease both",
                }}
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
                About James Wilks
              </span>
              <h2
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "clamp(36px, 5vw, 60px)",
                  fontWeight: 900,
                  lineHeight: 1.0,
                  textTransform: "uppercase",
                  color: "#fff",
                  marginBottom: "24px",
                }}
              >
                Forged In
                <br />
                Real Combat
              </h2>
              <p style={{ fontSize: "16px", lineHeight: "1.75", color: "var(--text-secondary)", marginBottom: "20px" }}>
                James Wilks is the winner of The Ultimate Fighter Season 9,
                a BJJ black belt, and one of the world&apos;s most respected
                combatives instructors — trusted by elite military units, federal
                agencies, and private clients worldwide.
              </p>
              <p style={{ fontSize: "16px", lineHeight: "1.75", color: "var(--text-secondary)", marginBottom: "40px" }}>
                His methods bridge the gap between sport-based martial arts and
                real-world survival — with decades of experience testing every
                technique under pressure.
              </p>
              <Link
                href="/about"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "15px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--red-bright)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--red-bright)",
                  paddingBottom: "4px",
                  transition: "opacity 0.2s",
                }}
              >
                Read His Story →
              </Link>
            </div>
          </AnimateOnScroll>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          }
          .photo-zoom:hover img { transform: scale(1.04); }
        `}</style>
      </section>

      {/* ─── THE METHOD ─── */}
      <section
        style={{
          padding: "120px 24px",
          background: "var(--black)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <AnimateOnScroll animation="fadeInUp" style={{ textAlign: "center", marginBottom: "72px" }}>
            <span
              style={{
                display: "block",
                width: "48px",
                height: "3px",
                background: "var(--red-bright)",
                borderRadius: "2px",
                margin: "0 auto 24px",
              }}
            />
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(40px, 6vw, 72px)",
                fontWeight: 900,
                lineHeight: 1.0,
                textTransform: "uppercase",
                color: "#fff",
                marginBottom: "16px",
              }}
            >
              The Fight Secrets Method
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: "var(--text-secondary)",
                maxWidth: "560px",
                margin: "0 auto",
                lineHeight: "1.65",
              }}
            >
              A complete system built on three principles — awareness,
              protection, and psychological resilience.
            </p>
          </AnimateOnScroll>

          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }}
            className="method-grid"
          >
            {method.map((m, i) => (
              <AnimateOnScroll key={m.phase} animation="fadeInUp" delay={i * 120}>
                <div
                  className="card-hover"
                  style={{
                    background: i === 1 ? "rgba(204,17,34,0.06)" : "var(--surface-2)",
                    border: i === 1 ? "1px solid rgba(204,17,34,0.2)" : "1px solid var(--border)",
                    padding: "48px 40px",
                    position: "relative",
                    height: "100%",
                  }}
                >
                  {/* Ghost number */}
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "72px",
                      fontWeight: 900,
                      color: "rgba(255,255,255,0.04)",
                      lineHeight: 1,
                      position: "absolute",
                      top: "24px",
                      right: "32px",
                      userSelect: "none",
                    }}
                  >
                    {m.phase}
                  </div>
                  <Image
                    src={m.icon}
                    alt={m.title}
                    width={56}
                    height={56}
                    style={{
                      marginBottom: "24px",
                      transition: "transform 0.3s ease",
                    }}
                    className="method-icon"
                  />
                  <h3
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "32px",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      color: i === 1 ? "var(--red-bright)" : "#fff",
                      marginBottom: "16px",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {m.title}
                  </h3>
                  <p style={{ fontSize: "15px", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                    {m.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll animation="fadeInUp" delay={200} style={{ textAlign: "center", marginTop: "48px" }}>
            <Link
              href="/method"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "15px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#fff",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.15)",
                padding: "14px 32px",
                borderRadius: "2px",
                display: "inline-block",
                transition: "border-color 0.2s, color 0.2s",
              }}
            >
              Learn The Full Method →
            </Link>
          </AnimateOnScroll>
        </div>
        <style>{`
          @media (max-width: 768px) { .method-grid { grid-template-columns: 1fr !important; } }
          .card-hover:hover .method-icon { transform: scale(1.1) rotate(-4deg); }
        `}</style>
      </section>

      {/* ─── WHY MOST TRAINING FAILS ─── */}
      <section
        style={{
          padding: "120px 24px",
          background: "var(--surface)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <AnimateOnScroll animation="fadeInUp" style={{ textAlign: "center", marginBottom: "72px" }}>
            <span
              style={{
                display: "block",
                width: "48px",
                height: "3px",
                background: "var(--red-bright)",
                borderRadius: "2px",
                margin: "0 auto 24px",
              }}
            />
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 900,
                lineHeight: 1.0,
                textTransform: "uppercase",
                color: "#fff",
              }}
            >
              Why Most Self-Defense
              <br />
              <span style={{ color: "var(--red-bright)" }}>Training Fails</span>
            </h2>
          </AnimateOnScroll>

          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", marginBottom: "64px" }}
            className="fails-grid"
          >
            {[
              {
                icon: "/images/icon-traditional-fails.png",
                title: "Traditional Fails",
                points: [
                  "Unrealistic drills that don't work under stress",
                  "No pressure testing or live resistance",
                  "Techniques designed for sport, not survival",
                  "Poor situational awareness training",
                ],
              },
              {
                icon: "/images/icon-combat-fails.png",
                title: "Sport MMA Fails",
                points: [
                  "Rules, referees, and protective gear",
                  "Ignores weapon threats and multiple attackers",
                  "No pre-incident indicators training",
                  "Legal aftermath is never addressed",
                ],
              },
            ].map((item, i) => (
              <AnimateOnScroll key={item.title} animation={i === 0 ? "fadeInLeft" : "fadeInRight"} delay={i * 100}>
                <div
                  className="card-hover"
                  style={{
                    background: "var(--surface-2)",
                    border: "1px solid var(--border)",
                    padding: "48px 40px",
                    height: "100%",
                  }}
                >
                  <Image src={item.icon} alt={item.title} width={48} height={48} style={{ marginBottom: "24px", opacity: 0.55 }} />
                  <h3
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "24px",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      color: "var(--silver-light)",
                      marginBottom: "24px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                    {item.points.map((p) => (
                      <li key={p} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
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
                        <span style={{ fontSize: "15px", color: "var(--text-secondary)", lineHeight: "1.6" }}>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Solution callout */}
          <AnimateOnScroll animation="scaleIn">
            <div
              style={{
                background: "linear-gradient(135deg, rgba(204,17,34,0.12), rgba(204,17,34,0.04))",
                border: "1px solid rgba(204,17,34,0.25)",
                padding: "56px 48px",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "radial-gradient(ellipse at 50% 150%, rgba(204,17,34,0.15) 0%, transparent 60%)",
                  pointerEvents: "none",
                }}
              />
              <h3
                style={{
                  position: "relative",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "clamp(28px, 4vw, 48px)",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  color: "#fff",
                  marginBottom: "16px",
                }}
              >
                Fight Secrets Bridges The Gap
              </h3>
              <p
                style={{
                  position: "relative",
                  fontSize: "17px",
                  color: "var(--text-secondary)",
                  maxWidth: "560px",
                  margin: "0 auto 32px",
                  lineHeight: "1.65",
                }}
              >
                James&apos; curriculum combines the proven techniques of combat
                sports with the real-world tactics used by Special Forces —
                pressure-tested on every training partner he&apos;s ever worked with.
              </p>
              <Link
                href="/training"
                className="btn-red"
                style={{
                  position: "relative",
                  background: "var(--red-bright)",
                  color: "#fff",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "16px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "16px 40px",
                  textDecoration: "none",
                  borderRadius: "2px",
                  display: "inline-block",
                }}
              >
                Train With James →
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
        <style>{`@media (max-width: 768px) { .fails-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* ─── TESTIMONIALS CAROUSEL ─── */}
      <section
        style={{
          padding: "120px 24px",
          background: "var(--black)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <AnimateOnScroll animation="fadeInUp" style={{ marginBottom: "56px" }}>
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
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 900,
                lineHeight: 1.0,
                textTransform: "uppercase",
                color: "#fff",
              }}
            >
              Real People.{" "}
              <span style={{ color: "var(--red-bright)" }}>Real Protection.</span>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeInUp" delay={100}>
            <TestimonialsCarousel />
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section
        style={{
          padding: "120px 24px",
          background: "var(--surface)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 50% 100%, rgba(204,17,34,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <AnimateOnScroll animation="fadeInUp" style={{ position: "relative", zIndex: 1, maxWidth: "640px", margin: "0 auto" }}>
          <span
            style={{
              display: "block",
              width: "48px",
              height: "3px",
              background: "var(--red-bright)",
              borderRadius: "2px",
              margin: "0 auto 24px",
            }}
          />
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(40px, 6vw, 80px)",
              fontWeight: 900,
              lineHeight: 1.0,
              textTransform: "uppercase",
              color: "#fff",
              marginBottom: "24px",
            }}
          >
            Start Building{" "}
            <span style={{ color: "var(--red-bright)" }}>Real-World</span>{" "}
            Protection
          </h2>
          <p style={{ fontSize: "17px", color: "var(--text-secondary)", marginBottom: "40px", lineHeight: "1.65" }}>
            Private coaching, corporate seminars, and intensive programs
            available. James works with a select number of clients each year.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/training"
              className="btn-red"
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
              Explore Training
            </Link>
            <Link
              href="/contact"
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
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
                background: "rgba(255,255,255,0.04)",
                transition: "border-color 0.2s, background 0.2s",
              }}
            >
              Get In Touch
            </Link>
          </div>
        </AnimateOnScroll>
      </section>

      <style>{`
        @keyframes heroZoom {
          from { transform: scale(1.06); }
          to   { transform: scale(1); }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 1; transform: scaleY(1); transform-origin: top; }
          50%       { opacity: 0.4; transform: scaleY(0.6); transform-origin: top; }
        }
        @keyframes redLineGrow {
          from { width: 0; opacity: 0; }
          to   { width: 32px; opacity: 1; }
        }
      `}</style>
    </>
  );
}
