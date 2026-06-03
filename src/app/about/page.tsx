import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About James Wilks | Fight Secrets",
  description:
    "UFC Ultimate Fighter champion, BJJ black belt, and elite Special Forces combatives instructor. James Wilks' story of combat, injury, and a lifetime dedicated to real-world protection.",
};

const timeline = [
  { year: "2003", event: "Begins professional MMA career" },
  { year: "2008", event: "Gracie US Nationals Gold Medalist, Advanced Division" },
  { year: "2009", event: "Wins The Ultimate Fighter Season 9 — USA vs UK" },
  { year: "2009–12", event: "Competes in the UFC at welterweight" },
  { year: "2012", event: "Medically retires due to fractured vertebra and injury risk" },
  { year: "2013+", event: "Becomes lead instructor for elite Special Forces combatives programs" },
  { year: "2018", event: "The Game Changers documentary released — James Cameron production" },
  { year: "2026", event: "The Game Changers sequel announced" },
];

export default function AboutPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section
        style={{
          paddingTop: "140px",
          paddingBottom: "80px",
          background: "var(--black)",
          padding: "140px 24px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 0% 50%, rgba(204,17,34,0.07) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
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
            Biography
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
            }}
          >
            Forged In
            <br />
            <span style={{ color: "var(--red-bright)" }}>Real Combat</span>
          </h1>
        </div>
      </section>

      {/* BIO SECTION */}
      <section style={{ padding: "80px 24px 120px", background: "var(--black)" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="bio-grid"
        >
          {/* Photo */}
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

            {/* Stat badges */}
            <div
              style={{
                position: "relative",
                zIndex: 2,
                marginTop: "32px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2px",
              }}
            >
              {[
                { value: "7–4", label: "Pro MMA Record" },
                { value: "#9", label: "TUF Season Winner" },
                { value: "20+", label: "Years Teaching" },
                { value: "BJJ", label: "Black Belt" },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    background: "var(--surface-2)",
                    border: "1px solid var(--border)",
                    padding: "20px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "28px",
                      fontWeight: 900,
                      color: "var(--red-bright)",
                    }}
                  >
                    {s.value}
                  </div>
                  <div style={{ fontSize: "11px", color: "var(--text-secondary)", marginTop: "4px", letterSpacing: "0.05em" }}>
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
                fontSize: "20px",
                lineHeight: "1.7",
                color: "var(--text-primary)",
                marginBottom: "24px",
                fontWeight: 300,
              }}
            >
              James Brett Wilks was born in Leicestershire, England — and from
              the very beginning, his path led toward combat. Not for sport.
              Not for glory. For understanding.
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.8", color: "var(--text-secondary)", marginBottom: "20px" }}>
              He trained across disciplines — Taekwondo (black belt), Brazilian
              Jiu-Jitsu, Jeet Kune Do, and Combat Submission Wrestling — before
              going on to a professional MMA career. In 2009, he won The Ultimate
              Fighter Season 9, defeating DaMarques Johnson via rear naked choke
              in the finale.
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.8", color: "var(--text-secondary)", marginBottom: "20px" }}>
              His UFC career was cut short in 2012 when doctors warned of a
              significantly high risk of paralysis due to a fractured vertebra.
              That moment — facing the end of fighting not by choice but by
              necessity — forged a new purpose: taking everything he had learned
              in the octagon and on the mat, and making it accessible to people
              who needed it most.
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.8", color: "var(--text-secondary)", marginBottom: "20px" }}>
              Since retiring, James has become one of the world&apos;s foremost
              combatives instructors — training elite Special Forces units,
              federal law enforcement agencies, and private clients across the
              globe. His curriculum strips away the unrealistic and the
              theatrical, leaving only what works under genuine pressure.
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.8", color: "var(--text-secondary)", marginBottom: "40px" }}>
              In 2018, James appeared in the James Cameron-produced documentary
              <em style={{ color: "var(--text-primary)" }}> The Game Changers</em>,
              bringing his investigative approach to the science of plant-based
              performance and strength. A sequel is now in production.
            </p>
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
              Train With James →
            </Link>
          </div>
        </div>
        <style>{`@media(max-width:768px){.bio-grid{grid-template-columns:1fr!important;gap:48px!important;}}`}</style>
      </section>

      {/* TIMELINE */}
      <section
        style={{
          padding: "80px 24px 120px",
          background: "var(--surface)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
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
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 900,
              lineHeight: 1.0,
              textTransform: "uppercase",
              color: "#fff",
              marginBottom: "56px",
            }}
          >
            Career Timeline
          </h2>
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                left: "72px",
                top: 0,
                bottom: 0,
                width: "1px",
                background: "var(--border)",
              }}
            />
            {timeline.map((t, i) => (
              <div
                key={t.year}
                style={{
                  display: "flex",
                  gap: "32px",
                  alignItems: "flex-start",
                  marginBottom: i < timeline.length - 1 ? "40px" : 0,
                  position: "relative",
                }}
              >
                <div style={{ width: "72px", flexShrink: 0, textAlign: "right", paddingRight: "16px", position: "relative" }}>
                  <span
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "var(--red-bright)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {t.year}
                  </span>
                  {/* dot */}
                  <span
                    style={{
                      position: "absolute",
                      right: "-5px",
                      top: "5px",
                      width: "9px",
                      height: "9px",
                      borderRadius: "50%",
                      background: "var(--red-bright)",
                      border: "2px solid var(--surface)",
                    }}
                  />
                </div>
                <p style={{ fontSize: "15px", color: "var(--text-secondary)", lineHeight: "1.6", paddingTop: "1px" }}>
                  {t.event}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
