import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Seminars | Fight Secrets — James Wilks",
  description: "Real-world self-defense training designed to improve awareness, preparedness, decision-making, and practical protective capability under pressure.",
};

const audiences = [
  {
    title: "Corporate & Executive Groups",
    icon: "💼",
    description:
      "Designed for companies, leadership teams, and executive groups seeking practical personal safety strategies for the home, the workplace, and while traveling.",
    featured: true,
  },
  {
    title: "Military & Law Enforcement",
    icon: "🎖",
    description:
      "Advanced real-world protection training for military and law enforcement professionals operating in high-pressure environments.",
    featured: false,
  },
  {
    title: "Martial Arts & Self-Defense Schools",
    icon: "🥋",
    description:
      "Structured to complement and build upon existing martial arts and self-defense training with integrated protection strategies and applied tactical training.",
    featured: false,
  },
];

const focusAreas = [
  { label: "Threat Awareness & Prevention", num: "01" },
  { label: "Verbalization & De-Escalation", num: "02" },
  { label: "Practical Self-Defense Techniques", num: "03" },
  { label: "Legal Considerations of Self-Defense", num: "04" },
];

const diagonalGrid = `
  repeating-linear-gradient(-45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 44px),
  repeating-linear-gradient( 45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 44px)
`;

export default function SeminarsPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section style={{ position: "relative", minHeight: "78vh", display: "flex", alignItems: "center", overflow: "hidden", background: "#0A0A0A" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image src="/images/james-hero.png" alt="" fill priority style={{ objectFit: "cover", objectPosition: "55% 15%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to left, rgba(10,10,10,0.98) 38%, rgba(10,10,10,0.72) 62%, rgba(10,10,10,0.2) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #0A0A0A 0%, transparent 45%)" }} />
          <div style={{ position: "absolute", inset: 0, backgroundImage: diagonalGrid }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 50% 40% at 100% 100%, rgba(181,18,27,0.1) 0%, transparent 70%)" }} />
        </div>

        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "160px 24px 100px", position: "relative", zIndex: 1, width: "100%", display: "flex", justifyContent: "flex-end" }}>
          <div style={{ maxWidth: "640px" }}>
            <AnimateOnScroll animation="fadeInUp">
              <span style={{ display: "block", width: "40px", height: "2px", background: "#B5121B", marginBottom: "24px" }} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#B5121B", display: "block", marginBottom: "18px" }}>
                Live Events
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInUp" delay={100}>
              <h1 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(44px, 7vw, 88px)", fontWeight: 700, lineHeight: 1.0, textTransform: "uppercase", letterSpacing: "0.02em", color: "#F2F4F6", marginBottom: "28px" }}>
                Fight Secrets<br />Seminars<br />
                <span style={{ color: "#B5121B" }}>with James Wilks</span>
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInUp" delay={200}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "18px", color: "#B7BDC5", lineHeight: "1.7", marginBottom: "10px" }}>
                Real-world self-defense training designed to improve awareness,
                preparedness, and practical protective capability under pressure.
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#7A828C", letterSpacing: "0.06em", marginBottom: "32px" }}>
                No prior training experience required.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInUp" delay={300}>
              <Link href="/contact" className="btn-primary" style={{ fontSize: "14px", fontWeight: 600, padding: "16px 40px", letterSpacing: "0.08em" }}>
                Request a Seminar
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ─── FOCUS AREAS ─── */}
      <hr style={{ margin: 0, border: "none", height: "1px", background: "linear-gradient(to right, transparent, #2C3138 20%, rgba(181,18,27,0.4) 50%, #2C3138 80%, transparent)" }} />
      <section style={{ background: "#1A1D21", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <AnimateOnScroll animation="fadeInUp" style={{ marginBottom: "48px" }}>
            <span style={{ display: "block", width: "40px", height: "2px", background: "#B5121B", marginBottom: "20px" }} />
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700, lineHeight: 1.0, textTransform: "uppercase", letterSpacing: "0.02em", color: "#F2F4F6" }}>
              Core Areas of Focus
            </h2>
          </AnimateOnScroll>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }} className="focus-grid">
            {focusAreas.map((f, i) => (
              <AnimateOnScroll key={f.num} animation="fadeInUp" delay={i * 80}>
                <div style={{ background: "#141619", border: "1px solid #2C3138", borderTop: "3px solid rgba(181,18,27,0.4)", borderRadius: "10px", padding: "28px 24px", boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}>
                  <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "13px", fontWeight: 700, color: "#B5121B", letterSpacing: "0.12em", marginBottom: "12px" }}>{f.num}</div>
                  <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "17px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em", color: "#F2F4F6", lineHeight: 1.2 }}>{f.label}</div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:900px){.focus-grid{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
      </section>

      {/* ─── RECOMMENDED FOR ─── */}
      <hr style={{ margin: 0, border: "none", height: "1px", background: "linear-gradient(to right, transparent, #2C3138 20%, rgba(181,18,27,0.4) 50%, #2C3138 80%, transparent)" }} />
      <section style={{ padding: "100px 24px 120px", background: "#0A0A0A" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <AnimateOnScroll animation="fadeInUp" style={{ marginBottom: "56px" }}>
            <span style={{ display: "block", width: "40px", height: "2px", background: "#B5121B", marginBottom: "20px" }} />
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.0, textTransform: "uppercase", letterSpacing: "0.02em", color: "#F2F4F6" }}>
              Recommended For
            </h2>
          </AnimateOnScroll>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="seminar-grid">
            {audiences.map((a, i) => (
              <AnimateOnScroll key={a.title} animation="fadeInUp" delay={i * 110}>
                <div style={{
                  background: a.featured ? "rgba(181,18,27,0.06)" : "#1A1D21",
                  border: a.featured ? "1px solid rgba(181,18,27,0.3)" : "1px solid #2C3138",
                  borderTop: a.featured ? "3px solid #B5121B" : "3px solid rgba(181,18,27,0.3)",
                  borderRadius: "10px",
                  padding: "44px 36px",
                  boxShadow: a.featured ? "0 8px 32px rgba(0,0,0,0.5), 0 0 20px rgba(181,18,27,0.08)" : "0 4px 20px rgba(0,0,0,0.3)",
                  position: "relative",
                  overflow: "hidden",
                  height: "100%",
                }}>
                  {a.featured && <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(181,18,27,0.1) 0%, transparent 60%)", pointerEvents: "none" }} />}
                  <div style={{ width: "28px", height: "2px", background: "#B5121B", marginBottom: "24px" }} />
                  <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "22px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#F2F4F6", marginBottom: "16px", lineHeight: 1.15, position: "relative" }}>
                    {a.title}
                  </h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "#B7BDC5", lineHeight: "1.75", position: "relative" }}>
                    {a.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:900px){.seminar-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ─── CTA ─── */}
      <hr style={{ margin: 0, border: "none", height: "1px", background: "linear-gradient(to right, transparent, #2C3138 20%, rgba(181,18,27,0.4) 50%, #2C3138 80%, transparent)" }} />
      <section style={{ padding: "100px 24px", background: "#1A1D21", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: diagonalGrid, pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 50% at 50% 110%, rgba(181,18,27,0.12) 0%, transparent 65%)", pointerEvents: "none" }} />
        <AnimateOnScroll animation="fadeInUp" style={{ maxWidth: "540px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <span style={{ display: "block", width: "40px", height: "2px", background: "#B5121B", margin: "0 auto 24px" }} />
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 700, lineHeight: 1.05, textTransform: "uppercase", letterSpacing: "0.02em", color: "#F2F4F6", marginBottom: "20px" }}>
            Bring James to<br /><span style={{ color: "#B5121B" }}>Your Organization</span>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: "#B7BDC5", lineHeight: "1.7", marginBottom: "36px" }}>
            Available for corporate groups, agencies, schools, and private
            organizations. Reach out to discuss your needs.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: "14px", fontWeight: 600, padding: "17px 44px", letterSpacing: "0.08em" }}>
            Request a Seminar
          </Link>
          <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "12px", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "#7A828C", marginTop: "48px" }}>
            Prepare | Protect | Prevail
          </p>
        </AnimateOnScroll>
      </section>
    </>
  );
}
