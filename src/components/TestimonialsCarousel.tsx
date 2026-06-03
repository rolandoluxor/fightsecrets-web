"use client";
import { useState, useEffect, useCallback, useRef } from "react";

const testimonials = [
  {
    quote:
      "James doesn't teach you to fight. He teaches you to survive. That distinction changed how I think about safety entirely.",
    name: "Colonel R. Harmon",
    role: "U.S. Army, Retired",
    initial: "RH",
  },
  {
    quote:
      "I've trained with a lot of instructors. James is the only one whose material I'd trust if my life actually depended on it.",
    name: "Special Agent M. Torres",
    role: "Federal Law Enforcement",
    initial: "MT",
  },
  {
    quote:
      "The awareness and pre-incident indicators section alone was worth the entire seminar. My whole unit walked away changed.",
    name: "Sarah K.",
    role: "Corporate Security Director",
    initial: "SK",
  },
  {
    quote:
      "I've attended dozens of personal protection courses. James' curriculum is the only one I've ever gone back to — twice.",
    name: "David R.",
    role: "Executive Protection Specialist",
    initial: "DR",
  },
  {
    quote:
      "The combination of mental preparation and physical technique is unlike anything else available to civilians. World-class.",
    name: "Lt. Commander T. Walsh",
    role: "U.S. Navy, Retired",
    initial: "TW",
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

  // Autoplay
  useEffect(() => {
    autoplayRef.current = setInterval(next, 5000);
    return () => { if (autoplayRef.current) clearInterval(autoplayRef.current); };
  }, [next]);

  const pauseAutoplay = () => { if (autoplayRef.current) clearInterval(autoplayRef.current); };
  const resumeAutoplay = () => { autoplayRef.current = setInterval(next, 5000); };

  // Drag / swipe
  const handleMouseDown = (e: React.MouseEvent) => { setDragging(true); setDragStartX(e.clientX); pauseAutoplay(); };
  const handleMouseUp = (e: React.MouseEvent) => {
    if (!dragging) return;
    setDragging(false);
    const delta = e.clientX - dragStartX;
    if (Math.abs(delta) > 60) delta < 0 ? next() : prev();
    resumeAutoplay();
  };
  const handleTouchStart = (e: React.TouchEvent) => { setDragStartX(e.touches[0].clientX); pauseAutoplay(); };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = e.changedTouches[0].clientX - dragStartX;
    if (Math.abs(delta) > 50) delta < 0 ? next() : prev();
    resumeAutoplay();
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
          background: "var(--surface-2)",
          border: "1px solid var(--border)",
          padding: "clamp(32px, 5vw, 64px)",
          position: "relative",
          overflow: "hidden",
          animation: "carouselIn 0.45s ease both",
        }}
      >
        {/* Decorative big quote */}
        <span
          style={{
            position: "absolute",
            top: "-24px",
            right: "40px",
            fontFamily: "Georgia, serif",
            fontSize: "200px",
            lineHeight: 1,
            color: "var(--red-bright)",
            opacity: 0.05,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          &ldquo;
        </span>

        {/* Red accent line */}
        <span
          style={{
            display: "block",
            width: "40px",
            height: "3px",
            background: "var(--red-bright)",
            marginBottom: "32px",
            borderRadius: "2px",
          }}
        />

        <blockquote
          style={{
            fontSize: "clamp(16px, 2.5vw, 22px)",
            lineHeight: "1.7",
            color: "var(--text-primary)",
            fontStyle: "italic",
            fontWeight: 300,
            marginBottom: "40px",
            maxWidth: "820px",
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
              background: "rgba(204,17,34,0.15)",
              border: "1px solid rgba(204,17,34,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "16px",
                fontWeight: 700,
                color: "var(--red-bright)",
              }}
            >
              {t.initial}
            </span>
          </div>
          <div>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "17px",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                color: "#fff",
              }}
            >
              {t.name}
            </div>
            <div style={{ fontSize: "12px", color: "var(--text-secondary)", marginTop: "3px" }}>{t.role}</div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "24px",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        {/* Dots */}
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { pauseAutoplay(); goTo(i); resumeAutoplay(); }}
              aria-label={`Go to testimonial ${i + 1}`}
              style={{
                width: i === active ? "28px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: i === active ? "var(--red-bright)" : "rgba(255,255,255,0.2)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "width 0.3s ease, background 0.3s ease",
              }}
            />
          ))}
        </div>

        {/* Arrow buttons */}
        <div style={{ display: "flex", gap: "8px" }}>
          {[
            { label: "←", action: prev },
            { label: "→", action: next },
          ].map(({ label, action }) => (
            <button
              key={label}
              onClick={() => { pauseAutoplay(); action(); resumeAutoplay(); }}
              aria-label={label === "←" ? "Previous" : "Next"}
              style={{
                width: "44px",
                height: "44px",
                background: "var(--surface-3)",
                border: "1px solid var(--border)",
                color: "#fff",
                fontSize: "18px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "2px",
                transition: "background 0.2s, border-color 0.2s",
                lineHeight: 1,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "var(--red-bright)";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--red-bright)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "var(--surface-3)";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes carouselIn {
          from { opacity: 0; transform: translateX(24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes carouselIn { from { opacity: 0; } to { opacity: 1; } }
        }
      `}</style>
    </div>
  );
}
