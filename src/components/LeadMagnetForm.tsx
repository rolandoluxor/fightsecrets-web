"use client";
import { useState } from "react";

export default function LeadMagnetForm() {
  const [submitted, setSubmitted] = useState(false);

  const inputStyle: React.CSSProperties = {
    background: "#1A1D21",
    border: "1px solid #2C3138",
    borderRadius: "2px",
    padding: "13px 16px",
    color: "#F2F4F6",
    fontFamily: "'Inter', sans-serif",
    fontSize: "14px",
    outline: "none",
    width: "100%",
  };

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "48px 24px" }}>
        <div
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "50%",
            background: "rgba(181,18,27,0.12)",
            border: "1px solid rgba(181,18,27,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 20px",
            fontSize: "20px",
            color: "#B5121B",
          }}
        >
          ✓
        </div>
        <h3
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: "22px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            color: "#F2F4F6",
            marginBottom: "10px",
          }}
        >
          You&apos;re In
        </h3>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#B7BDC5", lineHeight: "1.7" }}>
          Check your inbox for the Essential Self-Defense Guide.
        </p>
      </div>
    );
  }

  return (
    <form
      style={{ display: "flex", flexDirection: "column", gap: "14px" }}
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
    >
      <input
        type="text"
        placeholder="Your first name"
        required
        style={inputStyle}
      />
      <input
        type="email"
        placeholder="Your email address"
        required
        style={inputStyle}
      />
      <button
        type="submit"
        style={{
          background: "#B5121B",
          color: "#fff",
          fontFamily: "'Inter', sans-serif",
          fontSize: "14px",
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          padding: "15px 24px",
          border: "none",
          borderRadius: "3px",
          cursor: "pointer",
          width: "100%",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#7E0C13")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#B5121B")}
      >
        Get Free Access
      </button>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#7A828C", lineHeight: "1.6" }}>
        By providing your email, you consent to receive communications from
        Fight Secrets, including your free guide, educational content, and
        occasional promotional offers. You may unsubscribe at any time.
      </p>
    </form>
  );
}
