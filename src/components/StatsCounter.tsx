"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 20, suffix: "+", label: "Years Experience", sublabel: "Combat & instruction" },
  { value: 7,  suffix: "",  label: "UFC Wins",          sublabel: "Professional MMA" },
  { value: 100, suffix: "+", label: "Elite Units Trained", sublabel: "Military & federal" },
  { value: 3,  suffix: "",  label: "Championship Titles", sublabel: "TUF · BJJ · Gladiator" },
];

function Counter({ value, suffix, duration = 1800 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsCounter() {
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2px" }}
      className="stats-grid"
    >
      {stats.map((s, i) => (
        <div
          key={s.label}
          style={{
            background: "#1A1D21",
            border: "1px solid #2C3138",
            padding: "36px 28px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            transition: "border-color 0.25s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(181,18,27,0.3)")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#2C3138")}
        >
          <div
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(44px, 5vw, 64px)",
              fontWeight: 700,
              lineHeight: 1,
              color: "#B5121B",
              marginBottom: "8px",
            }}
          >
            <Counter value={s.value} suffix={s.suffix} />
          </div>
          <div
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "15px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#F2F4F6",
              marginBottom: "4px",
            }}
          >
            {s.label}
          </div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#7A828C" }}>
            {s.sublabel}
          </div>
          {/* Bottom left accent */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: i === 0 ? "100%" : "32px",
              height: "1px",
              background: "#B5121B",
              opacity: 0.25,
              transition: "width 0.4s ease",
            }}
          />
        </div>
      ))}

      <style>{`
        @media (max-width: 768px) { .stats-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .stats-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
