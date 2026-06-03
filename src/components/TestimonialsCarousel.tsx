"use client";
import { useState, useEffect, useCallback, useRef } from "react";

const testimonials = [
  {
    quote: "I brought Mr. Wilks in to train our MCMAP Instructor Trainers. His ability to elevate even the most advanced combat professionals was exceptional.",
    name: "MSgt. Rob Antczak",
    role: "Chief Instructor, Marine Corps Martial Arts Program (SOI East)",
    initial: "RA",
  },
  {
    quote: "Mr. Wilks provided the Marines under my command with the most effective hand-to-hand combat training of my military career.",
    name: "Lt. Col. Major Heatherman (ret.)",
    role: "Infantry Company Commander, Battle of Fallujah",
    initial: "MH",
  },
  {
    quote: "Mr. Wilks helped develop the Arrest, Control, and Combatives Program for the US Marshals Service. His expertise significantly strengthened operational readiness.",
    name: "Jon Frank",
    role: "Head of Arrest Response Team, United States Marshals Service",
    initial: "JF",
  },
  {
    quote: "I took my son to train with James before he left for college. We both left feeling safer, more confident, and better prepared.",
    name: "Arik Prawer",
    role: "President, Zillow",
    initial: "AP",
  },
  {
    quote: "James completely changed the way I think about personal safety as a woman. I left feeling far more confident and better prepared for the realities of the world today.",
    name: "CEO, Fortune 500 Company",
    role: "Private Client",
    initial: "CE",
  },
  {
    quote: "James studied Jeet Kune Do with me and is a protégé. I highly recommend him in any capacity.",
    name: "Paul Vunak",
    role: "Progressive Fighting Systems",
    initial: "PV",
  },
];

export default function TestimonialsCarousel() {
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (transitioning) return;
      setTransitioning(true);
      setActive((index + testimonials.length) % testimonials.length);
      setTimeout(() => setTransitioning(false), 450);
    },
    [transitioning]
  );

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    autoplayRef.current = setInterval(next, 6000);
    return () => { if (autoplayRef.current) clearInterval(autoplayRef.current); };
  }, [next]);

  const pause  = () => { if (autoplayRef.current) clearInterval(autoplayRef.current); };
  const resume = () => { autoplayRef.current = setInterval(next, 6000); };

  const handleMouseDown = (e: React.MouseEvent) => { setDragging(true); setDragStartX(e.clientX); pause(); };
  const handleMouseUp   = (e: React.MouseEvent) => {
    if (!dragging) return;
    setDragging(false);
    const d = e.clientX - dragStartX;
    if (Math.abs(d) > 60) d < 0 ? next() : prev();
    resume();
  };
  const handleTouchStart = (e: React.TouchEvent) => { setDragStartX(e.touches[0].clientX); pause(); };
  const handleTouchEnd   = (e: React.TouchEvent) => {
    const d = e.changedTouches[0].clientX - dragStartX;
    if (Math.abs(d) > 50) d < 0 ? next() : prev();
    resume();
  };

  const t = testimonials[active];

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ userSelect: "none", cursor: dragging ? "grabbing" : "grab" }}
    >
      {/* Slide */}
      <div
        key={active}
        style={{
          background: "#1A1D21",
          border: "1px solid #2C3138",
          padding: "clamp(32px, 5vw, 64px)",
          position: "relative",
          overflow: "hidden",
          animation: "carouselIn 0.45s ease both",
        }}
      >
        {/* Decorative quote mark */}
        <span
          style={{
            position: "absolute",
            top: "-20px",
            right: "32px",
            fontFamily: "Georgia, serif",
            fontSize: "180px",
            lineHeight: 1,
            color: "#B5121B",
            opacity: 0.06,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          &ldquo;
        </span>

        {/* Red accent */}
        <span
          style={{
            display: "block",
            width: "40px",
            height: "2px",
            background: "#B5121B",
            marginBottom: "28px",
          }}
        />

        <blockquote
          style={{
            fontSize: "clamp(16px, 2.2vw, 20px)",
            lineHeight: "1.75",
            color: "#F2F4F6",
            fontStyle: "italic",
            fontWeight: 300,
            marginBottom: "36px",
            maxWidth: "820px",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          &ldquo;{t.quote}&rdquo;
        </blockquote>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "rgba(181,18,27,0.12)",
              border: "1px solid rgba(181,18,27,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: "15px", fontWeight: 600, color: "#B5121B" }}>
              {t.initial}
            </span>
          </div>
          <div>
            <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "16px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#F2F4F6" }}>
              {t.name}
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#7A828C", marginTop: "3px" }}>{t.role}</div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "20px", flexWrap: "wrap", gap: "16px" }}>
        {/* Dots */}
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { pause(); goTo(i); resume(); }}
              aria-label={`Testimonial ${i + 1}`}
              style={{
                width: i === active ? "28px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: i === active ? "#B5121B" : "rgba(255,255,255,0.15)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "width 0.35s ease, background 0.25s ease",
              }}
            />
          ))}
        </div>

        {/* Arrows */}
        <div style={{ display: "flex", gap: "8px" }}>
          {(["←", "→"] as const).map((label) => (
            <button
              key={label}
              onClick={() => { pause(); label === "←" ? prev() : next(); resume(); }}
              aria-label={label === "←" ? "Previous" : "Next"}
              style={{
                width: "44px", height: "44px",
                background: "#1A1D21",
                border: "1px solid #2C3138",
                color: "#C7CCD1",
                fontSize: "18px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "2px",
                transition: "background 0.2s, border-color 0.2s, color 0.2s",
                lineHeight: 1,
                fontFamily: "sans-serif",
              }}
              onMouseEnter={(e) => {
                const b = e.currentTarget;
                b.style.background = "#B5121B";
                b.style.borderColor = "#B5121B";
                b.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                const b = e.currentTarget;
                b.style.background = "#1A1D21";
                b.style.borderColor = "#2C3138";
                b.style.color = "#C7CCD1";
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes carouselIn {
          from { opacity: 0; transform: translateX(20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes carouselIn { from { opacity: 0; } to { opacity: 1; } }
        }
      `}</style>
    </div>
  );
}
