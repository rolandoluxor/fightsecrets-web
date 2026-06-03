import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About James Wilks | Fight Secrets",
  description:
    "Elite Fighter. World-Class Instructor. Ruthless Pursuer of Truth in Combat. James Wilks' story.",
};

const timeline = [
  { year: "2003", event: "Begins professional MMA career" },
  { year: "2008", event: "Gracie US Nationals Gold Medalist, Advanced Division" },
  { year: "2009", event: "Wins The Ultimate Fighter Season 9 — USA vs UK" },
  { year: "2009–12", event: "Competes in the UFC welterweight division" },
  { year: "2012", event: "Medically retires due to fractured vertebra risk of paralysis" },
  { year: "2013+", event: "Becomes lead instructor for elite Special Forces combatives programs including U.S. Navy SEALs" },
  { year: "2015+", event: "Develops Arrest, Control & Combatives Program for U.S. Marshals Service" },
  { year: "2018", event: "The Game Changers documentary released — James Cameron production" },
  { year: "2026", event: "The Game Changers sequel announced" },
];

const trustItems = [
  { label: "Elite Special Forces Instructor", icon: "/images/special-forces-icon.png" },
  { label: "Winner of The Ultimate Fighter", icon: "/images/ufc-logo.png" },
  { label: "Black Belt in Brazilian Jiu-Jitsu", icon: null },
  { label: "World-Renowned Combatives Expert", icon: null },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          padding: "156px 24px 80px",
          background: "#0A0A0A",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 0% 60%, rgba(181,18,27,0.06) 0%, transparent 55%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <span style={{ display: "block", width: "40px", height: "2px", background: "#B5121B", marginBottom: "20px" }} />
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#B5121B",
              display: "block",
              marginBottom: "14px",
            }}
          >
            Biography
          </span>
          <h1
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(44px, 7vw, 88px)",
              fontWeight: 700,
              lineHeight: 1.0,
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              color: "#F2F4F6",
              maxWidth: "700px",
            }}
          >
            Elite Fighter.
            <br />
            World-Class Instructor.
            <br />
            <span style={{ color: "#B5121B" }}>Ruthless Pursuer of Truth in Combat.</span>
          </h1>
        </div>
      </section>

      {/* TRUST BAR */}
      <section style={{ background: "#1A1D21", borderTop: "1px solid #2C3138", borderBottom: "1px solid #2C3138", padding: "32px 24px" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "24px",
          }}
        >
          {trustItems.map((t) => (
            <div key={t.label} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "rgba(181,18,27,0.1)",
                  border: "1px solid rgba(181,18,27,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  overflow: "hidden",
                }}
              >
                {t.icon ? (
                  <Image src={t.icon} alt={t.label} width={24} height={24} style={{ objectFit: "contain" }} />
                ) : (
                  <div style={{ width: "8px", height: "8px", background: "#B5121B", borderRadius: "50%" }} />
                )}
              </div>
              <span
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#C7CCD1",
                }}
              >
                {t.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* BIO */}
      <section style={{ padding: "80px 24px 120px", background: "#0A0A0A" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.3fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="bio-grid"
        >
          {/* Photo + stats */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: "20px", left: "20px", right: "-20px", bottom: "-20px",
                border: "1px solid rgba(181,18,27,0.15)",
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
                aspectRatio: "3/4",
              }}
            >
              <Image
                src="/images/james-hero.png"
                alt="James Wilks"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>

            <div
              style={{
                position: "relative",
                zIndex: 2,
                marginTop: "24px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2px",
              }}
            >
              {[
                { value: "7–4", label: "Pro MMA Record" },
                { value: "TUF 9", label: "Season Winner" },
                { value: "20+", label: "Years Teaching" },
                { value: "BJJ", label: "Black Belt" },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    background: "#1A1D21",
                    border: "1px solid #2C3138",
                    padding: "18px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: "26px",
                      fontWeight: 700,
                      color: "#B5121B",
                    }}
                  >
                    {s.value}
                  </div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#7A828C", marginTop: "4px", letterSpacing: "0.04em" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text */}
          <div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "19px",
                lineHeight: "1.75",
                color: "#C7CCD1",
                marginBottom: "20px",
                fontWeight: 300,
              }}
            >
              James Wilks&apos; reputation is often built around his achievements at
              the highest levels of professional fighting, including winning The
              Ultimate Fighter and competing among elite-level combat athletes.
              But public success in sport represents only one chapter in a far
              deeper lifelong mission.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", lineHeight: "1.85", color: "#B7BDC5", marginBottom: "18px" }}>
              At the core of James&apos; journey has been a relentless pursuit of
              what Bruce Lee described as the &ldquo;truth in combat&rdquo; — a continual
              search for what genuinely works under pressure, against resistance,
              and within the unpredictable realities of violence. Over decades,
              he has studied under many of the world&apos;s leading coaches, martial
              artists, combatives experts, and self-defense instructors, while
              also training alongside some of the highest-level fighters on the
              planet.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", lineHeight: "1.85", color: "#B7BDC5", marginBottom: "18px" }}>
              While elite combat sports provided one of the most powerful
              laboratories for pressure-testing performance against skilled,
              resisting opponents, James has always understood that real-world
              violence presents entirely different variables and demands.
              Situational awareness, psychology, environmental factors, weapons,
              legal considerations, and the protection of loved ones all require
              a broader and more complete approach to personal safety.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", lineHeight: "1.85", color: "#B7BDC5", marginBottom: "18px" }}>
              Operating in the rare space where elite competitive fighting,
              advanced combatives instruction, and lifelong study of practical
              self-defense converge, James has developed a uniquely
              comprehensive approach to personal protection grounded in both
              proven combat effectiveness and real-world defensive application.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", lineHeight: "1.85", color: "#B7BDC5", marginBottom: "36px" }}>
              Through Fight Secrets, James is passionate about sharing what he
              has learned to help individuals, families, and organizations become
              more aware, more prepared, and more capable of protecting
              themselves and those they care about.
            </p>
            <Link
              href="/training"
              className="btn-primary"
              style={{ fontSize: "14px", fontWeight: 600, padding: "15px 36px", letterSpacing: "0.08em" }}
            >
              Train with James
            </Link>
          </div>
        </div>
        <style>{`@media(max-width:768px){.bio-grid{grid-template-columns:1fr!important;gap:40px!important;}}`}</style>
      </section>

      {/* TIMELINE */}
      <section style={{ padding: "80px 24px 120px", background: "#1A1D21", borderTop: "1px solid #2C3138" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <span style={{ display: "block", width: "40px", height: "2px", background: "#B5121B", marginBottom: "20px" }} />
          <h2
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 700,
              lineHeight: 1.0,
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              color: "#F2F4F6",
              marginBottom: "52px",
            }}
          >
            Career Timeline
          </h2>
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                left: "68px",
                top: 0, bottom: 0,
                width: "1px",
                background: "#2C3138",
              }}
            />
            {timeline.map((t, i) => (
              <div
                key={t.year}
                style={{
                  display: "flex",
                  gap: "28px",
                  alignItems: "flex-start",
                  marginBottom: i < timeline.length - 1 ? "36px" : 0,
                  position: "relative",
                }}
              >
                <div style={{ width: "68px", flexShrink: 0, textAlign: "right", paddingRight: "16px", position: "relative" }}>
                  <span
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#B5121B",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {t.year}
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      right: "-5px",
                      top: "4px",
                      width: "9px",
                      height: "9px",
                      borderRadius: "50%",
                      background: "#B5121B",
                      border: "2px solid #1A1D21",
                    }}
                  />
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#B7BDC5", lineHeight: "1.65", paddingTop: "1px" }}>
                  {t.event}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM TAGLINE */}
      <section style={{ padding: "48px 24px", background: "#0A0A0A", borderTop: "1px solid #2C3138", textAlign: "center" }}>
        <p
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: "13px",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#7A828C",
          }}
        >
          Prepare | Protect | Prevail
        </p>
      </section>
    </>
  );
}
