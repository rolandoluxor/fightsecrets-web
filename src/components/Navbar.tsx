"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "/about" },
  { label: "The Method", href: "/method" },
  { label: "Training", href: "/training" },
  { label: "Seminars", href: "/seminars" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled
          ? "rgba(8,8,8,0.95)"
          : "linear-gradient(to bottom, rgba(8,8,8,0.85), transparent)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Image
            src="/images/logo.png"
            alt="Fight Secrets"
            width={140}
            height={48}
            style={{ objectFit: "contain" }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "32px" }} className="hidden-mobile">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--silver-light)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--silver-light)")}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/training"
            style={{
              background: "var(--red-bright)",
              color: "#fff",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "15px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "10px 24px",
              textDecoration: "none",
              transition: "background 0.2s",
              borderRadius: "2px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#E8192C")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--red-bright)")}
          >
            Train With James
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            display: "none",
          }}
          className="show-mobile"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "rgba(8,8,8,0.98)",
            backdropFilter: "blur(16px)",
            padding: "24px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "14px 0",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "18px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#fff",
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/training"
            onClick={() => setOpen(false)}
            style={{
              display: "block",
              marginTop: "20px",
              background: "var(--red-bright)",
              color: "#fff",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "16px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "14px 24px",
              textDecoration: "none",
              textAlign: "center",
              borderRadius: "2px",
            }}
          >
            Train With James
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
