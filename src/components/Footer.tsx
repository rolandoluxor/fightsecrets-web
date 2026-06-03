"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
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
            <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.7", maxWidth: "280px" }}>
              Elite self-defense training from UFC champion and Special Forces combatives instructor James Wilks.
            </p>
            <span
              style={{
                display: "inline-block",
                marginTop: "16px",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.2em",
                color: "var(--red-bright)",
                textTransform: "uppercase",
              }}
            >
              Prepare. Protect. Prevail.
            </span>
          </div>

          {/* Navigation */}
          <div>
            <h4
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--silver-light)",
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
                  color: "var(--text-secondary)",
                  fontSize: "14px",
                  textDecoration: "none",
                  marginBottom: "10px",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--silver-light)",
                marginBottom: "20px",
              }}
            >
              Get In Touch
            </h4>
            <p style={{ color: "var(--text-secondary)", fontSize: "14px", marginBottom: "16px", lineHeight: "1.6" }}>
              Ready to train? James works with a limited number of private clients and organizations each year.
            </p>
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                background: "var(--red-bright)",
                color: "#fff",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "10px 20px",
                textDecoration: "none",
                borderRadius: "2px",
              }}
            >
              Inquire Now
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: "24px",
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ color: "var(--text-secondary)", fontSize: "13px" }}>
            © {new Date().getFullYear()} Fight Secrets / James Wilks. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            <Link href="/privacy" style={{ color: "var(--text-secondary)", fontSize: "13px", textDecoration: "none" }}>
              Privacy Policy
            </Link>
            <Link href="/terms" style={{ color: "var(--text-secondary)", fontSize: "13px", textDecoration: "none" }}>
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
