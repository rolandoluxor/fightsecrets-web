"use client";
import Image from "next/image";
import { useState } from "react";
import type { FormEvent } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const diagonalGrid = `
  repeating-linear-gradient(-45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 44px),
  repeating-linear-gradient( 45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 44px)
`;

const infoItems = [
  { label: "Based In",      value: "Orange County, CA" },
  { label: "Travel",        value: "Available nationwide & internationally" },
  { label: "Response Time", value: "Within 48 hours" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#1A1D21",
    border: "1px solid #2C3138",
    borderRadius: "6px",
    padding: "14px 16px",
    color: "#F2F4F6",
    fontSize: "15px",
    fontFamily: "'Inter', sans-serif",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "'Inter', sans-serif",
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "#C7CCD1",
    marginBottom: "8px",
  };

  return (
    <>
      {/* ─── HERO ─── */}
      <section style={{ position: "relative", minHeight: "60vh", display: "flex", alignItems: "center", overflow: "hidden", background: "#0A0A0A" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image src="/images/james-hero.png" alt="" fill priority style={{ objectFit: "cover", objectPosition: "center 15%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,10,10,0.99) 50%, rgba(10,10,10,0.75) 70%, rgba(10,10,10,0.3) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #0A0A0A 0%, transparent 50%)" }} />
          <div style={{ position: "absolute", inset: 0, backgroundImage: diagonalGrid }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 50% at 0% 50%, rgba(181,18,27,0.1) 0%, transparent 65%)" }} />
        </div>

        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "160px 24px 80px", position: "relative", zIndex: 1, width: "100%" }}>
          <AnimateOnScroll animation="fadeInUp">
            <span style={{ display: "block", width: "40px", height: "2px", background: "#B5121B", marginBottom: "24px" }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#B5121B", display: "block", marginBottom: "18px" }}>
              Get In Touch
            </span>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInUp" delay={100}>
            <h1 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(44px, 7vw, 88px)", fontWeight: 700, lineHeight: 1.0, textTransform: "uppercase", letterSpacing: "0.02em", color: "#F2F4F6", maxWidth: "600px", marginBottom: "24px" }}>
              Start The<br /><span style={{ color: "#B5121B" }}>Conversation</span>
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInUp" delay={200}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "18px", color: "#B7BDC5", maxWidth: "500px", lineHeight: "1.7" }}>
              James personally reviews all inquiries. Tell us about yourself and
              what you&apos;re looking for — we&apos;ll be in touch within 48 hours.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── FORM SECTION ─── */}
      <hr style={{ margin: 0, border: "none", height: "1px", background: "linear-gradient(to right, transparent, #2C3138 20%, rgba(181,18,27,0.4) 50%, #2C3138 80%, transparent)" }} />
      <section style={{ padding: "100px 24px 120px", background: "#0A0A0A" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "80px", alignItems: "start" }} className="contact-grid">

          {/* ── Info sidebar ── */}
          <AnimateOnScroll animation="fadeInLeft">
            <div>
              <span style={{ display: "block", width: "40px", height: "2px", background: "#B5121B", marginBottom: "24px" }} />
              <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "26px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#F2F4F6", marginBottom: "10px" }}>
                Training Inquiries
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "#B7BDC5", lineHeight: "1.7", marginBottom: "40px" }}>
                For private coaching, intensives, corporate seminars, and
                speaking engagements.
              </p>

              {infoItems.map((item) => (
                <div key={item.label} style={{ padding: "20px 0", borderBottom: "1px solid #2C3138" }}>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#B5121B", marginBottom: "6px" }}>
                    {item.label}
                  </div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "#F2F4F6" }}>{item.value}</div>
                </div>
              ))}

              {/* James quote box */}
              <div style={{ marginTop: "36px", padding: "28px", background: "rgba(181,18,27,0.06)", border: "1px solid rgba(181,18,27,0.2)", borderLeft: "3px solid #B5121B", borderRadius: "8px", position: "relative", overflow: "hidden" }}>
                <div aria-hidden="true" style={{ position: "absolute", top: "-10px", right: "12px", fontFamily: "Georgia, serif", fontSize: "80px", lineHeight: 1, color: "#B5121B", opacity: 0.07, userSelect: "none" }}>&ldquo;</div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", lineHeight: "1.75", color: "#C7CCD1", fontStyle: "italic", marginBottom: "14px", position: "relative" }}>
                  &ldquo;My calendar fills up quickly. If you&apos;re serious about
                  training, reach out sooner rather than later.&rdquo;
                </p>
                <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#F2F4F6", position: "relative" }}>
                  — James Wilks
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* ── Form card ── */}
          <AnimateOnScroll animation="fadeInRight" delay={120}>
            <div style={{ background: "#141619", border: "1px solid #2C3138", borderTop: "3px solid #B5121B", borderRadius: "10px", padding: "48px", boxShadow: "0 8px 40px rgba(0,0,0,0.5)" }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgba(181,18,27,0.12)", border: "1px solid rgba(181,18,27,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", fontSize: "28px", color: "#B5121B" }}>
                    ✓
                  </div>
                  <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "32px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "#F2F4F6", marginBottom: "14px" }}>
                    Message Received
                  </h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "#B7BDC5", lineHeight: "1.7" }}>
                    Thank you for reaching out. James will review your inquiry
                    personally and respond within 48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                    <div>
                      <label style={labelStyle} htmlFor="firstName">First Name *</label>
                      <input id="firstName" name="firstName" type="text" required style={inputStyle} placeholder="John" />
                    </div>
                    <div>
                      <label style={labelStyle} htmlFor="lastName">Last Name *</label>
                      <input id="lastName" name="lastName" type="text" required style={inputStyle} placeholder="Smith" />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle} htmlFor="email">Email Address *</label>
                    <input id="email" name="email" type="email" required style={inputStyle} placeholder="john@example.com" />
                  </div>

                  <div>
                    <label style={labelStyle} htmlFor="phone">Phone (optional)</label>
                    <input id="phone" name="phone" type="tel" style={inputStyle} placeholder="+1 (555) 000-0000" />
                  </div>

                  <div>
                    <label style={labelStyle} htmlFor="interest">Area of Interest *</label>
                    <select id="interest" name="interest" required style={{ ...inputStyle, cursor: "pointer" }}>
                      <option value="">Select a program...</option>
                      <option value="private">Private Coaching</option>
                      <option value="intensive">2-Day Intensive</option>
                      <option value="corporate">Corporate / Organization Training</option>
                      <option value="seminar">Seminar / Speaking</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label style={labelStyle} htmlFor="background">Your Background (optional)</label>
                    <textarea id="background" name="background" rows={2} style={{ ...inputStyle, resize: "vertical" }} placeholder="Martial arts experience, profession, etc." />
                  </div>

                  <div>
                    <label style={labelStyle} htmlFor="message">Tell James About Your Goals *</label>
                    <textarea id="message" name="message" rows={4} required style={{ ...inputStyle, resize: "vertical" }} placeholder="What do you want to achieve? What brought you here?" />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary"
                    style={{ fontSize: "14px", fontWeight: 600, padding: "17px 32px", letterSpacing: "0.1em", border: "none", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.65 : 1, textTransform: "uppercase", width: "100%" }}
                  >
                    {loading ? "Sending…" : "Send Message →"}
                  </button>

                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#7A828C", lineHeight: "1.6", textAlign: "center" }}>
                    Your information is kept completely private and never shared with third parties.
                  </p>
                </form>
              )}
            </div>
          </AnimateOnScroll>
        </div>

        <style>{`
          @media(max-width:900px){
            .contact-grid{grid-template-columns:1fr!important;gap:48px!important;}
            .form-row{grid-template-columns:1fr!important;}
          }
          input:focus, select:focus, textarea:focus {
            border-color: rgba(181,18,27,0.5) !important;
            box-shadow: 0 0 0 3px rgba(181,18,27,0.1);
          }
          select option { background: #1A1D21; }
        `}</style>
      </section>
    </>
  );
}
