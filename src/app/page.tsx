import Image from "next/image";
import Link from "next/link";

const credentials = [
  { label: "UFC Ultimate Fighter", sublabel: "Season 9 Champion", icon: "/images/ufc-logo.png" },
  { label: "BJJ Black Belt", sublabel: "Gracie US Nationals Gold", icon: null },
  { label: "Special Forces Instructor", sublabel: "Elite Combatives Trainer", icon: "/images/special-forces-icon.png" },
  { label: "The Game Changers", sublabel: "James Cameron Production", icon: null },
];

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

const testimonials = [
  {
    quote:
      "James doesn't teach you to fight. He teaches you to survive. That distinction changed how I think about safety entirely.",
    name: "Colonel R. Harmon",
    role: "U.S. Army, Retired",
  },
  {
    quote:
      "I've trained with a lot of instructors. James is the only one whose material I'd trust if my life actually depended on it.",
    name: "Special Agent M. Torres",
    role: "Federal Law Enforcement",
  },
  {
    quote:
      "The awareness and pre-incident indicators section alone was worth the entire seminar. My whole unit walked away changed.",
    name: "Sarah K.",
    role: "Corporate Security Director",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
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
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
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
                "linear-gradient(to right, rgba(8,8,8,0.97) 45%, rgba(8,8,8,0.5) 70%, rgba(8,8,8,0.1) 100%)",
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
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "24px",
                animation: "fadeInUp 0.7s ease 0.1s both",
              }}
            >
              <span style={{ display: "block", width: "32px", height: "2px", background: "var(--red-bright)" }} />
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

            <h1
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(56px, 8vw, 96px)",
                fontWeight: 900,
                lineHeight: 0.95,
                color: "#fff",
                textTransform: "uppercase",
                marginBottom: "24px",
                animation: "fadeInUp 0.7s ease 0.2s both",
              }}
            >
              Real Experience.
              <br />
              Real Training.
              <br />
              <span style={{ color: "var(--red-bright)" }}>Real Results.</span>
            </h1>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.65",
                color: "var(--silver-light)",
                marginBottom: "40px",
                maxWidth: "500px",
                animation: "fadeInUp 0.7s ease 0.35s both",
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
                animation: "fadeInUp 0.7s ease 0.5s both",
              }}
            >
              <Link
                href="/training"
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
                }}
              >
                About James
              </Link>
            </div>

            <div
              style={{
                display: "flex",
                gap: "24px",
                marginTop: "56px",
                flexWrap: "wrap",
                animation: "fadeInUp 0.7s ease 0.65s both",
              }}
            >
              {["Prepare", "Protect", "Prevail"].map((w) => (
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
                  }}
                >
                  {w}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "120px",
            background: "linear-gradient(to top, var(--black), transparent)",
            zIndex: 3,
          }}
        />
      </section>

      {/* CREDENTIALS STRIP */}
      <section
        style={{
          background: "var(--surface)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "40px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "32px",
          }}
        >
          {credentials.map((c) => (
            <div key={c.label} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "rgba(204,17,34,0.12)",
                  border: "1px solid rgba(204,17,34,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  overflow: "hidden",
                }}
              >
                {c.icon ? (
                  <Image src={c.icon} alt={c.label} width={28} height={28} style={{ objectFit: "contain" }} />
                ) : (
                  <div style={{ width: "10px", height: "10px", background: "var(--red-bright)", borderRadius: "50%" }} />
                )}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "15px",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    color: "#fff",
                  }}
                >
                  {c.label}
                </div>
                <div style={{ fontSize: "12px", color: "var(--text-secondary)", marginTop: "2px" }}>{c.sublabel}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section style={{ padding: "120px 24px", background: "var(--black)" }}>
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
              }}
            />
            <div
              style={{
                position: "relative",
                zIndex: 1,
                borderRadius: "4px",
                overflow: "hidden",
                aspectRatio: "4/5",
              }}
            >
              <Image
                src="/images/james-hero.png"
                alt="James Wilks"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
          </div>

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
              }}
            >
              Read His Story →
            </Link>
          </div>
        </div>
        <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important;gap:48px!important;}}`}</style>
      </section>

      {/* THE METHOD */}
      <section
        style={{
          padding: "120px 24px",
          background: "var(--surface)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "72px" }}>
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
            <p style={{ fontSize: "17px", color: "var(--text-secondary)", maxWidth: "560px", margin: "0 auto", lineHeight: "1.65" }}>
              A complete system built on three principles — awareness, protection, and psychological resilience.
            </p>
          </div>

          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }}
            className="method-grid"
          >
            {method.map((m, i) => (
              <div
                key={m.phase}
                style={{
                  background: i === 1 ? "rgba(204,17,34,0.06)" : "var(--surface-2)",
                  border: i === 1 ? "1px solid rgba(204,17,34,0.2)" : "1px solid var(--border)",
                  padding: "48px 40px",
                  position: "relative",
                }}
              >
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
                <Image src={m.icon} alt={m.title} width={56} height={56} style={{ marginBottom: "24px" }} />
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
                <p style={{ fontSize: "15px", color: "var(--text-secondary)", lineHeight: "1.7" }}>{m.description}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "48px" }}>
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
              }}
            >
              Learn The Full Method →
            </Link>
          </div>
        </div>
        <style>{`@media(max-width:768px){.method-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* TESTIMONIALS */}
      <section
        style={{
          padding: "120px 24px",
          background: "var(--black)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "72px" }}>
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
              Real People.{" "}
              <span style={{ color: "var(--red-bright)" }}>Real Protection.</span>
            </h2>
          </div>

          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }}
            className="testimonial-grid"
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                style={{
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                  padding: "40px",
                }}
              >
                <span
                  style={{
                    fontSize: "64px",
                    lineHeight: 1,
                    color: "var(--red-bright)",
                    opacity: 0.3,
                    fontFamily: "Georgia, serif",
                    display: "block",
                    marginBottom: "16px",
                    userSelect: "none",
                  }}
                >
                  &ldquo;
                </span>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.75",
                    color: "var(--text-primary)",
                    marginBottom: "32px",
                    fontStyle: "italic",
                  }}
                >
                  {t.quote}
                </p>
                <div style={{ borderTop: "1px solid var(--border)", paddingTop: "20px" }}>
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "16px",
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      color: "#fff",
                      textTransform: "uppercase",
                    }}
                  >
                    {t.name}
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--text-secondary)", marginTop: "4px" }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.testimonial-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* FINAL CTA */}
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
        <div style={{ position: "relative", zIndex: 1, maxWidth: "640px", margin: "0 auto" }}>
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
              }}
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
