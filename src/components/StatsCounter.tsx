"use client";
import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  sublabel?: string;
}

const stats: Stat[] = [
  { value: 20, suffix: "+", label: "Years Experience", sublabel: "Combat & instruction" },
  { value: 7, suffix: "", label: "UFC Wins", sublabel: "Professional MMA" },
  { value: 100, suffix: "+", label: "Elite Units Trained", sublabel: "Military & federal" },
  { value: 3, suffix: "", label: "Championship Titles", sublabel: "TUF · BJJ · Gladiator" },
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
            // ease-out cubic
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

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "2px",
      }}
      className="stats-grid"
    >
      {stats.map((s) => (
        <div
          key={s.label}
          style={{
            background: "var(--surface-2)",
            border: "1px solid var(--border)",
            padding: "40px 32px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            transition: "border-color 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(204,17,34,0.3)")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
        >
          <div
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(48px, 5vw, 72px)",
              fontWeight: 900,
              lineHeight: 1,
              color: "var(--red-bright)",
              marginBottom: "8px",
            }}
          >
            <Counter value={s.value} suffix={s.suffix} />
          </div>
          <div
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "16px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#fff",
              marginBottom: "4px",
            }}
          >
            {s.label}
          </div>
          {s.sublabel && (
            <div style={{ fontSize: "12px", color: "var(--text-secondary)" }}>{s.sublabel}</div>
          )}
          {/* Corner accent */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "40px",
              height: "2px",
              background: "var(--red-bright)",
              opacity: 0.4,
            }}
          />
        </div>
      ))}

      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
