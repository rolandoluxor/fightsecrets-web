import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Private Training | Fight Secrets — James Wilks",
  description: "Train Privately with James Wilks. In-person coaching, 2-Day Elite Intensives, and Video Consults.",
};

const programs = [
  {
    id: "private",
    label: "Private Training",
    tagline: "In-Person · Orange County, CA",
    description:
      "Train consistently with James through highly personalized instruction tailored to your goals, experience level, and physical capabilities.",
    details: [
      "Hourly Sessions",
      "Customized Coaching",
      "Progressive Skill Development",
      "1–4 people (partner & small-group encouraged)",
      "No prior experience required",
    ],
    cta: "Book Private Training",
    featured: false,
  },
  {
    id: "intensive",
    label: "2-Day Elite Intensives",
    tagline: "Immersive Tactical Development",
    description:
      "For accelerated learning, James offers premium 2-day immersive experiences in Orange County, California, or can travel for on-site intensives.",
    details: [
      "Tactical development",
      "Accelerated skill acquisition",
      "Concentrated hands-on instruction",
      "Available in Orange County or on-site travel",
      "Small groups or private",
    ],
    cta: "Apply for an Intensive",
    featured: true,
  },
  {
    id: "consult",
    label: "Video Consults",
    tagline: "Remote Tactical Consulting",
    description:
      "For clients outside Southern California, James offers private video consultations tailored to your goals and self-defense development.",
    details: [
      "Self-defense philosophy & priorities",
      "Personalized training priorities",
      "Select virtual technique coaching",
      "Available worldwide",
      "Flexible scheduling",
    ],
    cta: "Schedule a Consult",
    featured: false,
  },
];

const diagonalGrid = `
  repeating-linear-gradient(-45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 44px),
  repeating-linear-gradient( 45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 44px)
`;

export default function TrainingPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section style={{ position: "relative", minHeight: "78vh", display: "flex", alignItems: "center", overflow: "hidden", background: "#0A0A0A" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image src="/images/james-hero.png" alt="" fill priority style={{ objectFit: "cover", objectPosition: "60% 15%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,10,10,0.97) 40%, rgba(10,10,10,0.75) 65%, rgba(10,10,10,0.25) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #0A0A0A 0%, transparent 45%)" }} />
          <div style={{ position: "absolute", inset: 0, backgroundImage: diagonalGrid }} />
          {/* Red atmospheric glow bottom-left */}
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 50% 40% at 0% 100%, rgba(181,18,27,0.12) 0%, transparent 70%)" }} />
        </div>

        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "160px 24px 100px", position: "relative", zIndex: 1, width: "100%" }}>
          <AnimateOnScroll animation="fadeInUp">
            <span style={{ display: "block", width: "40px", height: "2px", background: "#B5121B", marginBottom: "24px" }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#B5121B", display: "block", marginBottom: "18px" }}>
              Work With James
            </span>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInUp" delay={100}>
            <h1 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(44px, 7vw, 88px)", fontWeight: 700, lineHeight: 1.0, textTransform: "uppercase", letterSpacing: "0.02em", color: "#F2F4F6", maxWidth: "700px", marginBottom: "28px" }}>
              Train Privately<br />
              <span style={{ color: "#B5121B" }}>with James Wilks</span>
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInUp" delay={200}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "18px", color: "#B7BDC5", maxWidth: "520px", lineHeight: "1.7", marginBottom: "20px" }}>
              Direct access to James&apos; uniquely comprehensive approach to
              real-world protection. No prior experience is required.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInUp" delay={300}>
            <Link href="/contact" className="btn-primary" style={{ fontSize: "14px", fontWeight: 600, padding: "16px 40px", letterSpacing: "0.08em" }}>
              Apply for Training
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── PROGRAMS ─── */}
      <hr style={{ margin: 0, border: "none", height: "1px", background: "linear-gradient(to right, transparent, #2C3138 20%, rgba(181,18,27,0.4) 50%, #2C3138 80%, transparent)" }} />
      <section style={{ padding: "100px 24px 120px", background: "#0A0A0A" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <AnimateOnScroll animation="fadeInUp" style={{ marginBottom: "56px" }}>
            <span style={{ display: "block", width: "40px", height: "2px", background: "#B5121B", marginBottom: "20px" }} />
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.0, textTransform: "uppercase", letterSpacing: "0.02em", color: "#F2F4F6" }}>
              Training Options
            </h2>
          </AnimateOnScroll>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="programs-grid">
            {programs.map((prog, i) => (
              <AnimateOnScroll key={prog.id} animation="fadeInUp" delay={i * 100}>
                <div style={{
                  background: prog.featured ? "rgba(181,18,27,0.06)" : "#1A1D21",
                  border: prog.featured ? "1px solid rgba(181,18,27,0.3)" : "1px solid #2C3138",
                  borderTop: prog.featured ? "3px solid #B5121B" : "3px solid rgba(181,18,27,0.3)",
                  borderRadius: "10px",
                  padding: "0",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  boxShadow: prog.featured ? "0 8px 32px rgba(0,0,0,0.5), 0 0 20px rgba(181,18,27,0.08)" : "0 4px 20px rgba(0,0,0,0.35)",
                  height: "100%",
                }}>
                  {prog.featured && (
                    <>
                      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(181,18,27,0.12) 0%, transparent 60%)", pointerEvents: "none" }} />
                      <div style={{ background: "#B5121B", color: "#fff", fontFamily: "'Inter', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", padding: "7px 0", textAlign: "center" }}>
                        Signature Program
                      </div>
                    </>
                  )}

                  <div style={{ padding: "36px 32px 32px", flex: 1, display: "flex", flexDirection: "column", position: "relative" }}>
                    <span style={{ display: "block", width: "28px", height: "2px", background: "#B5121B", marginBottom: "20px" }} />
                    <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "26px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: prog.featured ? "#F2F4F6" : "#F2F4F6", marginBottom: "6px", lineHeight: 1.1 }}>
                      {prog.label}
                    </h2>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#B5121B", marginBottom: "20px" }}>
                      {prog.tagline}
                    </p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", lineHeight: "1.78", color: "#B7BDC5", marginBottom: "28px" }}>
                      {prog.description}
                    </p>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "36px", flex: 1 }}>
                      {prog.details.map((d) => (
                        <li key={d} style={{ display: "flex", alignItems: "flex-start", gap: "12px", borderBottom: "1px solid rgba(44,49,56,0.5)", paddingBottom: "10px" }}>
                          <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#B5121B", flexShrink: 0, marginTop: "6px" }} />
                          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#C7CCD1", lineHeight: "1.5" }}>{d}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className={prog.featured ? "btn-primary" : "btn-secondary"}
                      style={{ display: "block", textAlign: "center", fontSize: "13px", fontWeight: prog.featured ? 600 : 500, padding: "14px 24px", letterSpacing: "0.08em", textTransform: "uppercase" }}
                    >
                      {prog.cta}
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:900px){.programs-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ─── JAMES QUOTE ─── */}
      <hr style={{ margin: 0, border: "none", height: "1px", background: "linear-gradient(to right, transparent, #2C3138 20%, rgba(181,18,27,0.4) 50%, #2C3138 80%, transparent)" }} />
      <section style={{ padding: "100px 24px", background: "#1A1D21", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: diagonalGrid, pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(181,18,27,0.09) 0%, transparent 65%)", pointerEvents: "none" }} />

        <AnimateOnScroll animation="fadeInUp" style={{ maxWidth: "640px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <span style={{ display: "block", width: "40px", height: "1px", background: "#B5121B", margin: "0 auto 32px" }} />
          {/* Big decorative quote mark */}
          <div aria-hidden="true" style={{ fontFamily: "Georgia, serif", fontSize: "120px", lineHeight: 1, color: "#B5121B", opacity: 0.07, userSelect: "none", marginBottom: "-40px", marginTop: "-20px" }}>&ldquo;</div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "19px", lineHeight: "1.8", color: "#C7CCD1", fontStyle: "italic", marginBottom: "24px", position: "relative" }}>
            &ldquo;I don&apos;t take every client. I work with people who are genuinely
            committed to learning and applying these skills. If that&apos;s you,
            I want to hear from you.&rdquo;
          </p>
          <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "16px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#F2F4F6", marginBottom: "36px" }}>
            — James Wilks
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: "14px", fontWeight: 600, padding: "16px 44px", letterSpacing: "0.08em" }}>
            Apply for Training
          </Link>
          <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "12px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#7A828C", marginTop: "48px" }}>
            Prepare | Protect | Prevail
          </p>
        </AnimateOnScroll>
      </section>
    </>
  );
}
