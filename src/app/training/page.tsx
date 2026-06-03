import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Training | Fight Secrets — James Wilks",
  description:
    "Train Privately with James Wilks. In-person coaching, 2-Day Elite Intensives, and Video Consults.",
};

const programs = [
  {
    id: "private",
    label: "Private Training",
    tagline: "In-Person Training in Orange County",
    description:
      "Train consistently with James through highly personalized instruction tailored to your goals, experience level, and physical capabilities.",
    details: [
      "Hourly Sessions",
      "Customized Coaching",
      "Progressive Skill Development",
      "1–4 people (partner & small-group training encouraged)",
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
    tagline: "Remote Tactical & Self-Defense Consulting",
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

export default function TrainingPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ padding: "140px 24px 80px", background: "#0A0A0A", position: "relative", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse at 30% 60%, rgba(181,18,27,0.06) 0%, transparent 55%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <span style={{ display: "block", width: "40px", height: "2px", background: "#B5121B", marginBottom: "20px" }} />
          <span
            style={{
              fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 600,
              letterSpacing: "0.22em", textTransform: "uppercase", color: "#B5121B",
              display: "block", marginBottom: "14px",
            }}
          >
            Work With James
          </span>
          <h1
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(44px, 7vw, 88px)",
              fontWeight: 700, lineHeight: 1.0,
              textTransform: "uppercase", letterSpacing: "0.02em",
              color: "#F2F4F6", maxWidth: "700px", marginBottom: "20px",
            }}
          >
            Train Privately
            <br />
            <span style={{ color: "#B5121B" }}>with James Wilks</span>
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "17px", color: "#B7BDC5", maxWidth: "540px", lineHeight: "1.7" }}>
            Direct access to James&apos; uniquely comprehensive approach to
            real-world protection. No prior experience is required.
          </p>
        </div>
      </section>

      {/* PROGRAMS */}
      <section style={{ padding: "80px 24px 120px", background: "#0A0A0A" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }}
            className="programs-grid"
          >
            {programs.map((prog) => (
              <div
                key={prog.id}
                style={{
                  background: prog.featured ? "rgba(181,18,27,0.05)" : "#1A1D21",
                  border: prog.featured ? "1px solid rgba(181,18,27,0.25)" : "1px solid #2C3138",
                  padding: "48px 36px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  transition: "border-color 0.25s",
                }}
              >
                {prog.featured && (
                  <div
                    style={{
                      position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
                      background: "#B5121B", color: "#fff",
                      fontFamily: "'Inter', sans-serif", fontSize: "10px", fontWeight: 600,
                      letterSpacing: "0.15em", textTransform: "uppercase", padding: "5px 16px",
                    }}
                  >
                    Signature Program
                  </div>
                )}

                <div style={{ flex: 1, marginTop: prog.featured ? "16px" : 0 }}>
                  <h2
                    style={{
                      fontFamily: "'Oswald', sans-serif", fontSize: "26px", fontWeight: 600,
                      textTransform: "uppercase", letterSpacing: "0.05em",
                      color: prog.featured ? "#B5121B" : "#F2F4F6", marginBottom: "6px",
                    }}
                  >
                    {prog.label}
                  </h2>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 500,
                      letterSpacing: "0.08em", textTransform: "uppercase",
                      color: "#7A828C", marginBottom: "20px",
                    }}
                  >
                    {prog.tagline}
                  </p>
                  <span style={{ display: "block", width: "30px", height: "1px", background: "#B5121B", marginBottom: "20px" }} />
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", lineHeight: "1.75", color: "#B7BDC5", marginBottom: "28px" }}>
                    {prog.description}
                  </p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "36px" }}>
                    {prog.details.map((d) => (
                      <li key={d} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                        <span
                          style={{
                            width: "5px", height: "5px", borderRadius: "50%",
                            background: "#B5121B", flexShrink: 0, marginTop: "6px",
                          }}
                        />
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#C7CCD1", lineHeight: "1.5" }}>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className={prog.featured ? "btn-primary" : "btn-secondary"}
                  style={{
                    display: "block",
                    textAlign: "center",
                    fontSize: "13px",
                    fontWeight: prog.featured ? 600 : 500,
                    padding: "14px 24px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {prog.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.programs-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* JAMES QUOTE */}
      <section style={{ padding: "80px 24px", background: "#1A1D21", borderTop: "1px solid #2C3138", textAlign: "center" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <span style={{ display: "block", width: "40px", height: "1px", background: "#B5121B", margin: "0 auto 28px" }} />
          <p
            style={{
              fontFamily: "'Inter', sans-serif", fontSize: "17px", lineHeight: "1.8",
              color: "#C7CCD1", fontStyle: "italic", marginBottom: "20px",
            }}
          >
            &ldquo;I don&apos;t take every client. I work with people who are genuinely
            committed to learning and applying these skills. If that&apos;s you,
            I want to hear from you.&rdquo;
          </p>
          <p
            style={{
              fontFamily: "'Oswald', sans-serif", fontSize: "15px", fontWeight: 600,
              letterSpacing: "0.1em", textTransform: "uppercase", color: "#F2F4F6",
              marginBottom: "32px",
            }}
          >
            — James Wilks
          </p>
          <Link
            href="/contact"
            className="btn-primary"
            style={{ fontSize: "14px", fontWeight: 600, padding: "15px 36px", letterSpacing: "0.08em" }}
          >
            Apply for Training
          </Link>
        </div>
        <p
          style={{
            fontFamily: "'Oswald', sans-serif", fontSize: "12px", fontWeight: 500,
            letterSpacing: "0.2em", textTransform: "uppercase", color: "#7A828C",
            marginTop: "48px",
          }}
        >
          Prepare | Protect | Prevail
        </p>
      </section>
    </>
  );
}
