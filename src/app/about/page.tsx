import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import TimelineSection from "@/components/TimelineSection";

export const metadata: Metadata = {
  title: "About James Wilks | Fight Secrets",
  description: "Elite Fighter. World-Class Instructor. Ruthless Pursuer of Truth in Combat. James Wilks' story.",
};

const stats = [
  { value: "7–4", label: "Pro MMA Record" },
  { value: "TUF 9", label: "Season Winner" },
  { value: "20+", label: "Years Teaching" },
  { value: "BJJ", label: "Black Belt" },
];

const credentials = [
  "Winner — The Ultimate Fighter (UFC)",
  "BJJ Black Belt",
  "Elite Special Forces Combatives Instructor",
  "U.S. Marshals Service — Program Developer",
  "Marine Corps MCMAP Instructor",
  "The Game Changers — James Cameron Production",
];

const diagonalGrid = `
  repeating-linear-gradient(-45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 44px),
  repeating-linear-gradient( 45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 44px)
`;

export default function AboutPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section style={{ position: "relative", minHeight: "80vh", display: "flex", alignItems: "center", overflow: "hidden", background: "#0A0A0A" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image src="/images/james-hero.png" alt="" fill priority style={{ objectFit: "cover", objectPosition: "center 15%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,10,10,0.98) 42%, rgba(10,10,10,0.72) 65%, rgba(10,10,10,0.2) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #0A0A0A 0%, transparent 40%)" }} />
          <div style={{ position: "absolute", inset: 0, backgroundImage: diagonalGrid }} />
        </div>

        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "160px 24px 100px", position: "relative", zIndex: 1, width: "100%" }}>
          <AnimateOnScroll animation="fadeInUp">
            <span style={{ display: "block", width: "40px", height: "2px", background: "#B5121B", marginBottom: "24px" }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#B5121B", display: "block", marginBottom: "18px" }}>
              Biography
            </span>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInUp" delay={100}>
            <h1 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(44px, 7vw, 88px)", fontWeight: 700, lineHeight: 1.0, textTransform: "uppercase", letterSpacing: "0.02em", color: "#F2F4F6", maxWidth: "720px", marginBottom: "28px" }}>
              Elite Fighter.<br />
              World-Class Instructor.<br />
              <span style={{ color: "#B5121B" }}>Ruthless Pursuer of Truth.</span>
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInUp" delay={200}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "18px", color: "#B7BDC5", maxWidth: "520px", lineHeight: "1.7" }}>
              Decades of elite competitive fighting, Special Forces instruction,
              and real-world protective training — now available to you.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── CREDENTIALS STRIP ─── */}
      <hr style={{ margin: 0, border: "none", height: "1px", background: "linear-gradient(to right, transparent, #2C3138 20%, rgba(181,18,27,0.4) 50%, #2C3138 80%, transparent)" }} />
      <section style={{ background: "#1A1D21", padding: "28px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "0" }}>
          {credentials.map((c, i) => (
            <div key={c} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 24px", borderRight: i < credentials.length - 1 ? "1px solid #2C3138" : "none" }}>
              <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#B5121B", flexShrink: 0 }} />
              <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: "12px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#C7CCD1", whiteSpace: "nowrap" }}>{c}</span>
            </div>
          ))}
        </div>
      </section>
      <hr style={{ margin: 0, border: "none", height: "1px", background: "linear-gradient(to right, transparent, #2C3138 20%, rgba(181,18,27,0.4) 50%, #2C3138 80%, transparent)" }} />

      {/* ─── BIO ─── */}
      <section style={{ padding: "100px 24px 120px", background: "#0A0A0A" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "80px", alignItems: "start" }} className="bio-grid">

          {/* Photo + stats */}
          <AnimateOnScroll animation="fadeInLeft">
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", top: "20px", left: "20px", right: "-20px", bottom: "-20px", border: "1px solid rgba(181,18,27,0.18)", borderRadius: "10px", zIndex: 0 }} />
              <div style={{ position: "relative", zIndex: 1, borderRadius: "10px", overflow: "hidden", aspectRatio: "3/4" }}>
                <Image src="/images/james-hero.png" alt="James Wilks" fill style={{ objectFit: "cover", objectPosition: "center top" }} />
              </div>
              <div style={{ position: "relative", zIndex: 2, marginTop: "20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {stats.map((s) => (
                  <div key={s.label} style={{ background: "#1A1D21", border: "1px solid #2C3138", borderTop: "3px solid rgba(181,18,27,0.4)", borderRadius: "8px", padding: "20px", textAlign: "center", boxShadow: "0 4px 16px rgba(0,0,0,0.35)" }}>
                    <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "28px", fontWeight: 700, color: "#B5121B" }}>{s.value}</div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#7A828C", marginTop: "4px", letterSpacing: "0.06em", textTransform: "uppercase" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Text */}
          <AnimateOnScroll animation="fadeInRight" delay={150}>
            <div>
              <span style={{ display: "block", width: "40px", height: "2px", background: "#B5121B", marginBottom: "24px" }} />
              <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.02em", color: "#F2F4F6", marginBottom: "28px", lineHeight: 1.1 }}>
                A Lifelong Pursuit of<br /><span style={{ color: "#B5121B" }}>Truth in Combat</span>
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "18px", lineHeight: "1.8", color: "#C7CCD1", marginBottom: "20px", fontWeight: 300 }}>
                James Wilks&apos; reputation is often built around his achievements at
                the highest levels of professional fighting. But public success in sport
                represents only one chapter in a far deeper lifelong mission.
              </p>
              {[
                "At the core of James' journey has been a relentless pursuit of what Bruce Lee described as the \"truth in combat\" — a continual search for what genuinely works under pressure, against resistance, and within the unpredictable realities of violence.",
                "While elite combat sports provided one of the most powerful laboratories for pressure-testing performance, James has always understood that real-world violence presents entirely different variables. Situational awareness, psychology, weapons, legal considerations, and protection of loved ones all require a broader approach.",
                "Through Fight Secrets, James is passionate about sharing what he has learned — to help individuals, families, and organizations become more aware, more prepared, and more capable of protecting themselves and those they care about.",
              ].map((para) => (
                <p key={para.slice(0, 20)} style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", lineHeight: "1.85", color: "#B7BDC5", marginBottom: "18px" }}>
                  {para}
                </p>
              ))}
              <Link href="/training" className="btn-primary" style={{ fontSize: "14px", fontWeight: 600, padding: "15px 36px", letterSpacing: "0.08em", marginTop: "12px", display: "inline-block" }}>
                Train with James
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
        <style>{`@media(max-width:900px){.bio-grid{grid-template-columns:1fr!important;gap:48px!important;}}`}</style>
      </section>

      {/* ─── TIMELINE ─── */}
      <hr style={{ margin: 0, border: "none", height: "1px", background: "linear-gradient(to right, transparent, #2C3138 20%, rgba(181,18,27,0.4) 50%, #2C3138 80%, transparent)" }} />
      <section style={{ padding: "100px 24px 120px", background: "#1A1D21", position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: diagonalGrid, pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(181,18,27,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <AnimateOnScroll animation="fadeInUp">
            <span style={{ display: "block", width: "40px", height: "2px", background: "#B5121B", marginBottom: "20px" }} />
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.0, textTransform: "uppercase", letterSpacing: "0.02em", color: "#F2F4F6", marginBottom: "56px" }}>
              Career Timeline
            </h2>
          </AnimateOnScroll>
          <TimelineSection />
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <hr style={{ margin: 0, border: "none", height: "1px", background: "linear-gradient(to right, transparent, #2C3138 20%, rgba(181,18,27,0.4) 50%, #2C3138 80%, transparent)" }} />
      <section style={{ padding: "80px 24px", background: "#0A0A0A", textAlign: "center" }}>
        <AnimateOnScroll animation="fadeInUp">
          <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "13px", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "#7A828C" }}>
            Prepare | Protect | Prevail
          </p>
        </AnimateOnScroll>
      </section>
    </>
  );
}
