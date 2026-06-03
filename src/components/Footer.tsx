"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#1A1D21",
        borderTop: "1px solid #2C3138",
        padding: "64px 24px 32px",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "48px",
            marginBottom: "48px",
          }}
        >
          {/* Brand */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Fight Secrets"
              width={140}
              height={48}
              style={{ objectFit: "contain", marginBottom: "16px" }}
            />
            <p style={{ fontFamily: "'Inter', sans-serif", color: "#B7BDC5", fontSize: "13px", lineHeight: "1.7", maxWidth: "280px", marginBottom: "16px" }}>
              Elite self-defense training from UFC champion and Special Forces
              combatives instructor James Wilks.
            </p>
            <span
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.22em",
                color: "#B5121B",
                textTransform: "uppercase",
                display: "block",
              }}
            >
              Prepare · Protect · Prevail
            </span>
          </div>

          {/* Navigation */}
          <div>
            <h4
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#C7CCD1",
                marginBottom: "20px",
              }}
            >
              Navigation
            </h4>
            {[
              ["Home", "/"],
              ["About James", "/about"],
              ["The Method", "/method"],
              ["Private Training", "/training"],
              ["Seminars", "/seminars"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: "block",
                  fontFamily: "'Inter', sans-serif",
                  color: "#7A828C",
                  fontSize: "13px",
                  textDecoration: "none",
                  marginBottom: "10px",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C7CCD1")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#7A828C")}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#C7CCD1",
                marginBottom: "20px",
              }}
            >
              Get In Touch
            </h4>
            <p style={{ fontFamily: "'Inter', sans-serif", color: "#B7BDC5", fontSize: "13px", marginBottom: "20px", lineHeight: "1.7" }}>
              Ready to train? James works with a limited number of private
              clients and organizations each year.
            </p>
            <Link
              href="/contact"
              className="btn-primary"
              style={{ fontSize: "12px", fontWeight: 600, padding: "10px 20px", letterSpacing: "0.08em", display: "inline-block" }}
            >
              Inquire Now
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: "1px solid #2C3138",
            paddingTop: "24px",
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ fontFamily: "'Inter', sans-serif", color: "#7A828C", fontSize: "12px" }}>
            © {new Date().getFullYear()} Fight Secrets / James Wilks. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {[["Privacy Policy", "/privacy"], ["Terms", "/terms"]].map(([l, h]) => (
              <Link
                key={h}
                href={h}
                style={{ fontFamily: "'Inter', sans-serif", color: "#7A828C", fontSize: "12px", textDecoration: "none" }}
              >
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
