"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "About James", href: "/about" },
  { label: "The Method", href: "/method" },
  { label: "Private Training", href: "/training" },
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
        top: 0, left: 0, right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(10,10,10,0.96)" : "linear-gradient(to bottom, rgba(10,10,10,0.8), transparent)",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid #2C3138" : "none",
        transition: "all 0.35s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1280px", margin: "0 auto", padding: "0 32px",
          height: "96px", display: "flex", alignItems: "center", justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <Image
            src="/images/logo.png"
            alt="Fight Secrets"
            width={200}
            height={76}
            style={{ objectFit: "contain", display: "block" }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "28px" }} className="nav-desktop">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#B7BDC5",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#B7BDC5")}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/training"
            className="btn-primary"
            style={{ fontSize: "13px", fontWeight: 600, padding: "10px 22px", letterSpacing: "0.08em" }}
          >
            Train with James
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", display: "none" }}
          className="nav-hamburger"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "rgba(10,10,10,0.98)",
            backdropFilter: "blur(16px)",
            padding: "20px 24px 32px",
            borderTop: "1px solid #2C3138",
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
                fontFamily: "'Oswald', sans-serif",
                fontSize: "18px",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#C7CCD1",
                textDecoration: "none",
                borderBottom: "1px solid rgba(44,49,56,0.6)",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/training"
            onClick={() => setOpen(false)}
            className="btn-primary"
            style={{
              display: "block",
              marginTop: "20px",
              fontSize: "15px",
              fontWeight: 600,
              padding: "14px 24px",
              textAlign: "center",
              letterSpacing: "0.08em",
            }}
          >
            Train with James
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop   { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
        @media (min-width: 901px) {
          .nav-hamburger { display: none !important; }
        }
      `}</style>
    </header>
  );
}
