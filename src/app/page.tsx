import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CredentialTicker from "@/components/CredentialTicker";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import StatsCounter from "@/components/StatsCounter";
import LeadMagnetForm from "@/components/LeadMagnetForm";

const method = [
  {
    phase: "01",
    title: "Prepare",
    icon: "/images/icon-prepare.png",
    description:
      "Develop proper situational awareness, threat recognition, prevention strategies, and psychological readiness before violence occurs.",
  },
  {
    phase: "02",
    title: "Protect",
    icon: "/images/icon-protect.png",
    description:
      "Build practical, pressure-tested defensive skills and protective capabilities designed to function reliably under real-world stress.",
  },
  {
    phase: "03",
    title: "Prevail",
    icon: "/images/icon-prevail.png",
    description:
      "Apply intelligent decision-making under pressure to achieve the best possible outcome — physically, emotionally and legally.",
  },
];

const failPoints = [
  {
    icon: "/images/icon-traditional-fails.png",
    title: "Traditional Training Fails",
    points: [
      "Unrealistic drills with cooperative partners",
      "Untested methods that break under pressure",
      "Scripted techniques designed for sport, not survival",
      "No psychological readiness or stress inoculation",
    ],
  },
  {
    icon: "/images/icon-combat-fails.png",
    title: "Sport MMA Falls Short",
    points: [
      "Rules, referees, and protective equipment",
      "No weapons, multiple attackers, or environmental hazards",
      "Sport-based environments ignore pre-incident indicators",
      "Legal aftermath and emotional recovery never addressed",
    ],
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── SECTION 1: HERO ─── */}
      <section
        style={{
          position: "relative",
          minHeight: "100dvh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          background: "#0A0A0A",
        }}
      >
        {/* Background image with slow zoom */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            animation: "heroZoom 14s ease-out both",
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
              background: "linear-gradient(to right, rgba(10,10,10,0.97) 42%, rgba(10,10,10,0.6) 68%, rgba(10,10,10,0.15) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(10,10,10,1) 0%, transparent 45%)",
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
            padding: "130px 24px 80px",
            width: "100%",
          }}
        >
          <div style={{ maxWidth: "660px" }}>
            {/* Eyebrow */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: "28px",
                animation: "fadeInUp 0.6s ease 0.1s both",
              }}
            >
              <span
                style={{
                  display: "block",
                  height: "1px",
                  width: "36px",
                  background: "#B5121B",
                }}
              />
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#B5121B",
                }}
              >
                UFC Champion · Special Forces Instructor
              </span>
            </div>

            {/* Headline — staggered line reveal */}
            <div style={{ overflow: "hidden" }}>
              <h1
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "clamp(44px, 6.5vw, 80px)",
                  fontWeight: 700,
                  lineHeight: 1.05,
                  color: "#F2F4F6",
                  textTransform: "uppercase",
                  letterSpacing: "0.02em",
                  animation: "fadeInUp 0.6s ease 0.22s both",
                  marginBottom: "2px",
                }}
              >
                The Self-Defense Secrets
              </h1>
            </div>
            <div style={{ overflow: "hidden" }}>
              <h1
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "clamp(44px, 6.5vw, 80px)",
                  fontWeight: 700,
                  lineHeight: 1.05,
                  color: "#F2F4F6",
                  textTransform: "uppercase",
                  letterSpacing: "0.02em",
                  animation: "fadeInUp 0.6s ease 0.34s both",
                  marginBottom: "2px",
                }}
              >
                I&apos;ve Taught Elite Special Forces
              </h1>
            </div>
            <div style={{ overflow: "hidden", marginBottom: "28px" }}>
              <h1
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "clamp(44px, 6.5vw, 80px)",
                  fontWeight: 700,
                  lineHeight: 1.05,
                  color: "#B5121B",
                  textTransform: "uppercase",
                  letterSpacing: "0.02em",
                  animation: "fadeInUp 0.6s ease 0.46s both",
                }}
              >
                Now Available to You
              </h1>
            </div>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "17px",
                lineHeight: "1.7",
                color: "#B7BDC5",
                marginBottom: "12px",
                maxWidth: "540px",
                animation: "fadeInUp 0.6s ease 0.6s both",
              }}
            >
              Comprehensive self-defense training forged through elite combat
              experience and a lifelong study of real-world violence, built to
              help you better protect yourself and your loved ones.
            </p>
            <p
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "15px",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#C7CCD1",
                marginBottom: "40px",
                animation: "fadeInUp 0.6s ease 0.68s both",
              }}
            >
              Prepare. Protect. Prevail.
            </p>

            {/* PRIMARY CTA only */}
            <div
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
                animation: "fadeInUp 0.6s ease 0.78s both",
              }}
            >
              <Link
                href="/training"
                className="btn-primary"
                style={{ fontSize: "14px", fontWeight: 600, padding: "16px 40px", letterSpacing: "0.08em" }}
              >
                Train with James
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "36px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            animation: "fadeIn 1s ease 1.5s both",
          }}
        >
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#7A828C" }}>
            Scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "44px",
              background: "linear-gradient(to bottom, #B5121B, transparent)",
              animation: "scrollPulse 2.2s ease-in-out infinite",
            }}
          />
        </div>

        {/* Bottom gradient */}
        <div
          style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            height: "140px",
            background: "linear-gradient(to top, #0A0A0A, transparent)",
            zIndex: 3,
          }}
        />
      </section>

      {/* ─── SECTION 2: AUTHORITY TRUST STRIP (Ticker) ─── */}
      <CredentialTicker />

      {/* ─── STATS ─── */}
      <section style={{ padding: "72px 24px", background: "#0A0A0A" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <AnimateOnScroll animation="fadeInUp">
            <StatsCounter />
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── SECTION 3: TRAIN WITH A TRUSTED EXPERT ─── */}
      <section
        style={{
          padding: "100px 24px 120px",
          background: "#1A1D21",
          borderTop: "1px solid #2C3138",
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
                  top: "20px", left: "20px", right: "-20px", bottom: "-20px",
                  border: "1px solid rgba(181,18,27,0.18)",
                  borderRadius: "3px",
                  zIndex: 0,
                }}
              />
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  borderRadius: "3px",
                  overflow: "hidden",
                  aspectRatio: "4/5",
                }}
                className="photo-zoom"
              >
                <Image
                  src="/images/james-hero.png"
                  alt="James Wilks"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top", transition: "transform 0.6s ease" }}
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
                  width: "40px",
                  height: "2px",
                  background: "#B5121B",
                  marginBottom: "24px",
                }}
              />
              <h2
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "clamp(32px, 4vw, 52px)",
                  fontWeight: 700,
                  lineHeight: 1.05,
                  textTransform: "uppercase",
                  letterSpacing: "0.03em",
                  color: "#F2F4F6",
                  marginBottom: "24px",
                }}
              >
                Train with a
                <br />
                <span style={{ color: "#B5121B" }}>Trusted Expert</span>
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", lineHeight: "1.8", color: "#B7BDC5", marginBottom: "18px" }}>
                James Wilks brings together a rare combination of elite competitive
                fighting experience, advanced combatives instruction for elite Special
                Forces including U.S. Navy SEALs, and extensive expertise in practical
                self-defense, empty-hand combat, weapon defense, and protection against
                real-world violence.
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", lineHeight: "1.8", color: "#B7BDC5", marginBottom: "36px" }}>
                As the winner of The Ultimate Fighter (UFC), Brazilian Jiu-Jitsu black
                belt, and trusted combatives expert, James helps individuals, families,
                and professionals build smarter, more effective personal protection skills.
              </p>
              {/* Secondary CTA — exploratory */}
              <Link
                href="/about"
                className="btn-secondary"
                style={{ fontSize: "13px", fontWeight: 500, padding: "12px 28px", letterSpacing: "0.08em", textTransform: "uppercase" }}
              >
                Learn More About James →
              </Link>
            </div>
          </AnimateOnScroll>
        </div>

        <style>{`
          @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
          .photo-zoom:hover img { transform: scale(1.04); }
        `}</style>
      </section>

      {/* ─── SECTION 4: WHY MOST TRAINING FAILS ─── */}
      <section style={{ padding: "100px 24px 120px", background: "#0A0A0A", borderTop: "1px solid #2C3138" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <AnimateOnScroll animation="fadeInUp" style={{ marginBottom: "64px" }}>
            <span style={{ display: "block", width: "40px", height: "2px", background: "#B5121B", marginBottom: "20px" }} />
            <h2
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: 700,
                lineHeight: 1.05,
                textTransform: "uppercase",
                letterSpacing: "0.02em",
                color: "#F2F4F6",
              }}
            >
              Why Most Self-Defense
              <br />
              <span style={{ color: "#B5121B" }}>Training Fails</span>
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: "#B7BDC5", marginTop: "16px", maxWidth: "580px", lineHeight: "1.7" }}>
              The vast majority of training exists at one of two ends of the
              spectrum. True self-defense requires a more complete approach.
            </p>
          </AnimateOnScroll>

          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", marginBottom: "48px" }}
            className="fails-grid"
          >
            {failPoints.map((item, i) => (
              <AnimateOnScroll key={item.title} animation={i === 0 ? "fadeInLeft" : "fadeInRight"} delay={i * 100}>
                <div
                  className="card-hover"
                  style={{
                    background: "#1A1D21",
                    border: "1px solid #2C3138",
                    padding: "44px 40px",
                    height: "100%",
                  }}
                >
                  <Image src={item.icon} alt={item.title} width={44} height={44} style={{ marginBottom: "20px", opacity: 0.5 }} />
                  <h3
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: "22px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: "#C7CCD1",
                      marginBottom: "20px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                    {item.points.map((p) => (
                      <li key={p} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                        <span
                          style={{
                            content: "✕",
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "11px",
                            fontWeight: 700,
                            color: "#B5121B",
                            flexShrink: 0,
                            marginTop: "3px",
                          }}
                        >
                          ✕
                        </span>
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#7A828C", lineHeight: "1.65" }}>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* True self-defense bridge */}
          <AnimateOnScroll animation="scaleIn">
            <div
              style={{
                background: "linear-gradient(135deg, rgba(181,18,27,0.1), rgba(181,18,27,0.03))",
                border: "1px solid rgba(181,18,27,0.2)",
                padding: "52px 48px",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute", inset: 0,
                  background: "radial-gradient(ellipse at 50% 120%, rgba(181,18,27,0.12) 0%, transparent 55%)",
                  pointerEvents: "none",
                }}
              />
              <h3
                style={{
                  position: "relative",
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "clamp(26px, 3.5vw, 44px)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.02em",
                  color: "#F2F4F6",
                  marginBottom: "14px",
                }}
              >
                True Self-Defense Requires a More Complete Approach
              </h3>
              <p
                style={{
                  position: "relative",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "16px",
                  color: "#B7BDC5",
                  maxWidth: "560px",
                  margin: "0 auto 32px",
                  lineHeight: "1.7",
                }}
              >
                The Fight Secrets Method combines elite combat sports knowledge
                with Special Forces combatives and real-world protective strategy —
                pressure-tested under genuine resistance.
              </p>
              {/* Secondary CTA — takes them to Method page, not conversion */}
              <Link
                href="/method"
                className="btn-secondary"
                style={{ fontSize: "13px", fontWeight: 500, padding: "12px 32px", letterSpacing: "0.08em", textTransform: "uppercase" }}
              >
                Explore the Philosophy →
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
        <style>{`@media(max-width:768px){.fails-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ─── SECTION 5: THE FIGHT SECRETS METHOD ─── */}
      <section style={{ padding: "100px 24px 120px", background: "#1A1D21", borderTop: "1px solid #2C3138" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <AnimateOnScroll animation="fadeInUp" style={{ textAlign: "center", marginBottom: "64px" }}>
            <span style={{ display: "block", width: "40px", height: "2px", background: "#B5121B", margin: "0 auto 20px" }} />
            <h2
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 700,
                lineHeight: 1.05,
                textTransform: "uppercase",
                letterSpacing: "0.02em",
                color: "#F2F4F6",
                marginBottom: "8px",
              }}
            >
              The Fight Secrets Method
            </h2>
            <p
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#B5121B",
                marginBottom: "16px",
              }}
            >
              Prepare. Protect. Prevail.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: "#B7BDC5", maxWidth: "560px", margin: "0 auto", lineHeight: "1.7" }}>
              A complete personal protection system built to help everyday
              civilians better prevent, navigate, and survive real-world violence.
            </p>
          </AnimateOnScroll>

          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }}
            className="method-grid"
          >
            {method.map((m, i) => (
              <AnimateOnScroll key={m.phase} animation="fadeInUp" delay={i * 110}>
                <div
                  className="card-hover"
                  style={{
                    background: i === 1 ? "rgba(181,18,27,0.05)" : "#141619",
                    border: i === 1 ? "1px solid rgba(181,18,27,0.2)" : "1px solid #2C3138",
                    padding: "44px 36px",
                    position: "relative",
                    height: "100%",
                  }}
                >
                  {/* Ghost number */}
                  <div
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: "80px",
                      fontWeight: 700,
                      color: "rgba(255,255,255,0.03)",
                      lineHeight: 1,
                      position: "absolute",
                      top: "20px",
                      right: "28px",
                      userSelect: "none",
                    }}
                  >
                    {m.phase}
                  </div>
                  <Image
                    src={m.icon}
                    alt={m.title}
                    width={52}
                    height={52}
                    style={{ marginBottom: "20px", transition: "transform 0.3s ease" }}
                    className="method-icon"
                  />
                  <h3
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: "28px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: i === 1 ? "#B5121B" : "#F2F4F6",
                      marginBottom: "14px",
                    }}
                  >
                    {m.title}
                  </h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#B7BDC5", lineHeight: "1.75" }}>
                    {m.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll animation="fadeInUp" delay={200} style={{ textAlign: "center", marginTop: "40px" }}>
            {/* Secondary CTA — deepens curiosity, not conversion */}
            <Link
              href="/method"
              className="btn-secondary"
              style={{ fontSize: "13px", fontWeight: 500, padding: "13px 32px", letterSpacing: "0.08em", textTransform: "uppercase" }}
            >
              Learn the Method →
            </Link>
          </AnimateOnScroll>
        </div>
        <style>{`
          @media(max-width:768px){.method-grid{grid-template-columns:1fr!important;}}
          .card-hover:hover .method-icon{transform:scale(1.1) rotate(-3deg);}
        `}</style>
      </section>

      {/* ─── SECTION 5b: TESTIMONIALS ─── */}
      <section style={{ padding: "100px 24px 120px", background: "#0A0A0A", borderTop: "1px solid #2C3138" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <AnimateOnScroll animation="fadeInUp" style={{ marginBottom: "48px" }}>
            <span style={{ display: "block", width: "40px", height: "2px", background: "#B5121B", marginBottom: "20px" }} />
            <h2
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "clamp(32px, 4.5vw, 56px)",
                fontWeight: 700,
                lineHeight: 1.05,
                textTransform: "uppercase",
                letterSpacing: "0.02em",
                color: "#F2F4F6",
              }}
            >
              Trusted by Military
              <br />
              <span style={{ color: "#B5121B" }}>and Civilians Alike</span>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeInUp" delay={100}>
            <TestimonialsCarousel />
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── SECTION 6: LEAD MAGNET ─── */}
      <section style={{ padding: "100px 24px", background: "#1A1D21", borderTop: "1px solid #2C3138" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr",
              gap: "80px",
              alignItems: "center",
            }}
            className="lead-grid"
          >
            <AnimateOnScroll animation="fadeInLeft">
              <div>
                <span style={{ display: "block", width: "40px", height: "2px", background: "#B5121B", marginBottom: "20px" }} />
                <h2
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "clamp(32px, 4vw, 52px)",
                    fontWeight: 700,
                    lineHeight: 1.05,
                    textTransform: "uppercase",
                    letterSpacing: "0.02em",
                    color: "#F2F4F6",
                    marginBottom: "16px",
                  }}
                >
                  Start Building Greater
                  <br />
                  <span style={{ color: "#B5121B" }}>Preparedness Today</span>
                </h2>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: "#B7BDC5", lineHeight: "1.75", marginBottom: "24px", maxWidth: "500px" }}>
                  <strong style={{ color: "#C7CCD1" }}>Essential Self-Defense Guide</strong> — Practical
                  principles, situational awareness strategies, and proven protective concepts
                  designed to help everyday people better prevent, navigate, and survive
                  real-world violence.
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
                  {[
                    "Pre-attack indicators",
                    "Situational awareness frameworks",
                    "Violence psychology",
                    "Protective principles for everyday life",
                  ].map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "#B5121B",
                          flexShrink: 0,
                        }}
                      />
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#B7BDC5" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeInRight" delay={120}>
              <div
                style={{
                  background: "#141619",
                  border: "1px solid #2C3138",
                  padding: "40px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "22px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "#F2F4F6",
                    marginBottom: "24px",
                  }}
                >
                  Get Free Access
                </h3>
                <LeadMagnetForm />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
        <style>{`@media(max-width:768px){.lead-grid{grid-template-columns:1fr!important;gap:40px!important;}}`}</style>
      </section>

      {/* ─── SECTION 7: FINAL CTA ─── */}
      <section
        style={{
          padding: "120px 24px",
          background: "#0A0A0A",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid #2C3138",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 50% 110%, rgba(181,18,27,0.09) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <AnimateOnScroll animation="fadeInUp" style={{ position: "relative", zIndex: 1, maxWidth: "640px", margin: "0 auto" }}>
          <span style={{ display: "block", width: "40px", height: "2px", background: "#B5121B", margin: "0 auto 20px" }} />
          <h2
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(40px, 5.5vw, 72px)",
              fontWeight: 700,
              lineHeight: 1.05,
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              color: "#F2F4F6",
              marginBottom: "16px",
            }}
          >
            Train Smarter.
            <br />
            <span style={{ color: "#B5121B" }}>Protect Better.</span>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "17px", color: "#B7BDC5", marginBottom: "40px", lineHeight: "1.7", maxWidth: "520px", margin: "0 auto 40px" }}>
            Learn directly from James Wilks through elite private training,
            immersive seminars, and premium self-defense education.
          </p>
          {/* Strong primary CTAs — back to conversion mode */}
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/training"
              className="btn-primary"
              style={{ fontSize: "14px", fontWeight: 600, padding: "17px 44px", letterSpacing: "0.08em" }}
            >
              Train with James
            </Link>
            <Link
              href="/seminars"
              className="btn-secondary"
              style={{ fontSize: "14px", fontWeight: 500, padding: "17px 44px", letterSpacing: "0.08em", textTransform: "uppercase" }}
            >
              Host a Seminar
            </Link>
          </div>
          <p
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#7A828C",
              marginTop: "48px",
            }}
          >
            Prepare | Protect | Prevail
          </p>
        </AnimateOnScroll>
      </section>
    </>
  );
}
