"use client";
import { useState } from "react";
import type { FormEvent } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // TODO: wire to a real form backend (Formspree, Resend, etc.)
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  }

  const inputStyle = {
    width: "100%",
    background: "var(--surface-3)",
    border: "1px solid var(--border)",
    borderRadius: "2px",
    padding: "14px 16px",
    color: "#fff",
    fontSize: "15px",
    fontFamily: "'Inter', sans-serif",
    outline: "none",
    transition: "border-color 0.2s",
  } as React.CSSProperties;

  const labelStyle = {
    display: "block",
    fontFamily: "'Inter', sans-serif",
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "var(--silver-light)",
    marginBottom: "8px",
  };

  return (
    <>
      {/* HERO */}
      <section style={{ padding: "140px 24px 80px", background: "var(--black)", position: "relative", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 50% 80%, rgba(204,17,34,0.07) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <span style={{ display: "block", width: "48px", height: "3px", background: "var(--red-bright)", borderRadius: "2px", marginBottom: "24px" }} />
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
            Get In Touch
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
              marginBottom: "24px",
            }}
          >
            Start The
            <br />
            <span style={{ color: "var(--red-bright)" }}>Conversation</span>
          </h1>
          <p style={{ fontSize: "18px", color: "var(--text-secondary)", maxWidth: "520px", lineHeight: "1.65" }}>
            James personally reviews all inquiries. Tell us about yourself and
            what you&apos;re looking for — we&apos;ll be in touch within 48 hours.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section style={{ padding: "80px 24px 120px", background: "var(--black)" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Info */}
          <div>
            <div style={{ marginBottom: "48px" }}>
              <h3
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "22px",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  color: "#fff",
                  marginBottom: "12px",
                }}
              >
                Training Inquiries
              </h3>
              <p style={{ fontSize: "15px", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                For private coaching, intensives, corporate seminars, and
                speaking engagements.
              </p>
            </div>

            {[
              { label: "Based In", value: "Orange County, CA" },
              { label: "Travel", value: "Available nationwide & internationally" },
              { label: "Response Time", value: "Within 48 hours" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  padding: "20px 0",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--red-bright)",
                    marginBottom: "6px",
                  }}
                >
                  {item.label}
                </div>
                <div style={{ fontSize: "15px", color: "var(--text-primary)" }}>{item.value}</div>
              </div>
            ))}

            <div
              style={{
                marginTop: "40px",
                padding: "24px",
                background: "rgba(204,17,34,0.06)",
                border: "1px solid rgba(204,17,34,0.15)",
                borderRadius: "2px",
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.7",
                  color: "var(--text-secondary)",
                  fontStyle: "italic",
                }}
              >
                &ldquo;My calendar fills up quickly. If you&apos;re serious about
                training, reach out sooner rather than later.&rdquo;
              </p>
              <p
                style={{
                  marginTop: "12px",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: "#fff",
                }}
              >
                — James Wilks
              </p>
            </div>
          </div>

          {/* Form */}
          <div
            style={{
              background: "var(--surface-2)",
              border: "1px solid var(--border)",
              padding: "48px",
              borderRadius: "2px",
            }}
          >
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: "rgba(204,17,34,0.12)",
                    border: "1px solid rgba(204,17,34,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 24px",
                    fontSize: "24px",
                  }}
                >
                  ✓
                </div>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "28px",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    color: "#fff",
                    marginBottom: "12px",
                  }}
                >
                  Message Received
                </h3>
                <p style={{ fontSize: "15px", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                  Thank you for reaching out. James will review your inquiry
                  personally and respond within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
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
                  <select
                    id="interest"
                    name="interest"
                    required
                    style={{ ...inputStyle, cursor: "pointer" }}
                  >
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
                  <textarea
                    id="background"
                    name="background"
                    rows={2}
                    style={{ ...inputStyle, resize: "vertical" }}
                    placeholder="Martial arts experience, profession, etc."
                  />
                </div>

                <div>
                  <label style={labelStyle} htmlFor="message">Tell James About Your Goals *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    style={{ ...inputStyle, resize: "vertical" }}
                    placeholder="What do you want to achieve? What brought you here?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    background: loading ? "rgba(204,17,34,0.6)" : "var(--red-bright)",
                    color: "#fff",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "16px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "18px 32px",
                    border: "none",
                    borderRadius: "2px",
                    cursor: loading ? "not-allowed" : "pointer",
                    transition: "background 0.2s",
                  }}
                >
                  {loading ? "Sending..." : "Send Message →"}
                </button>

                <p style={{ fontSize: "12px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                  Your information is kept completely private and never shared
                  with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
        <style>{`
          @media(max-width:768px){
            .contact-grid{grid-template-columns:1fr!important;gap:40px!important;}
            .form-row{grid-template-columns:1fr!important;}
          }
        `}</style>
      </section>
    </>
  );
}
