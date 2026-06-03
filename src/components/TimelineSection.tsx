"use client";
import { useEffect, useRef, useState } from "react";

const timeline = [
  { year: "2003",    event: "Begins professional MMA career" },
  { year: "2008",    event: "Gracie US Nationals Gold Medalist, Advanced Division" },
  { year: "2009",    event: "Wins The Ultimate Fighter Season 9 — USA vs UK" },
  { year: "2009–12", event: "Competes in the UFC welterweight division" },
  { year: "2012",    event: "Medically retires due to fractured vertebra risk of paralysis" },
  { year: "2013+",   event: "Becomes lead instructor for elite Special Forces combatives programs including U.S. Navy SEALs" },
  { year: "2015+",   event: "Develops Arrest, Control & Combatives Program for U.S. Marshals Service" },
  { year: "2018",    event: "The Game Changers documentary released — James Cameron production" },
  { year: "2026",    event: "The Game Changers sequel announced" },
];

function TimelineItem({
  year,
  event,
  index,
}: {
  year: string;
  event: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delay = `${index * 90}ms`;

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        gap: "0",
        alignItems: "flex-start",
        marginBottom: index < timeline.length - 1 ? "0" : "0",
        position: "relative",
      }}
    >
      {/* Year + dot column */}
      <div
        style={{
          width: "80px",
          flexShrink: 0,
          textAlign: "right",
          paddingRight: "0",
          position: "relative",
          paddingTop: "2px",
        }}
      >
        {/* Year label */}
        <span
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: "13px",
            fontWeight: 700,
            color: "#B5121B",
            letterSpacing: "0.08em",
            display: "block",
            paddingRight: "22px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-16px)",
            transition: `opacity 0.5s ease ${delay}, transform 0.5s ease ${delay}`,
          }}
        >
          {year}
        </span>

        {/* Dot */}
        <span
          style={{
            position: "absolute",
            right: "-1px",
            top: "5px",
            width: "11px",
            height: "11px",
            borderRadius: "50%",
            background: visible ? "#B5121B" : "transparent",
            border: visible ? "2px solid #0A0A0A" : "2px solid #2C3138",
            boxShadow: visible ? "0 0 0 2px #B5121B, 0 0 12px rgba(181,18,27,0.5)" : "none",
            transform: visible ? "scale(1)" : "scale(0)",
            transition: `transform 0.4s cubic-bezier(0.34,1.56,0.64,1) ${delay},
                         background 0.3s ease ${delay},
                         box-shadow 0.4s ease ${delay},
                         border-color 0.3s ease ${delay}`,
            zIndex: 2,
          }}
        />
      </div>

      {/* Connector line segment */}
      <div style={{ width: "24px", flexShrink: 0, position: "relative" }}>
        {/* Horizontal tick from dot to content */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "0",
            right: "0",
            height: "1px",
            background: "#2C3138",
            transformOrigin: "left",
            transform: visible ? "scaleX(1)" : "scaleX(0)",
            transition: `transform 0.35s ease ${delay}`,
          }}
        />
      </div>

      {/* Event content card */}
      <div
        style={{
          flex: 1,
          paddingBottom: index < timeline.length - 1 ? "40px" : "0",
          paddingLeft: "12px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateX(0)" : "translateX(-20px)",
          transition: `opacity 0.55s ease ${String(parseInt(delay) + 60)}ms,
                       transform 0.55s ease ${String(parseInt(delay) + 60)}ms`,
        }}
      >
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "15px",
            color: "#C7CCD1",
            lineHeight: "1.65",
            paddingTop: "0px",
          }}
        >
          {event}
        </p>
      </div>
    </div>
  );
}

export default function TimelineSection() {
  const lineRef = useRef<HTMLDivElement>(null);
  const [lineVisible, setLineVisible] = useState(false);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setLineVisible(true); observer.disconnect(); } },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ position: "relative" }} ref={lineRef}>
      {/* Vertical line that draws downward */}
      <div
        style={{
          position: "absolute",
          left: "79px",
          top: 0,
          bottom: 0,
          width: "2px",
          background: "linear-gradient(to bottom, #B5121B 0%, rgba(181,18,27,0.3) 60%, transparent 100%)",
          transformOrigin: "top",
          transform: lineVisible ? "scaleY(1)" : "scaleY(0)",
          transition: "transform 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.1s",
          zIndex: 1,
        }}
      />

      {/* Static grey track behind */}
      <div
        style={{
          position: "absolute",
          left: "79px",
          top: 0,
          bottom: 0,
          width: "2px",
          background: "#2C3138",
          opacity: 0.4,
        }}
      />

      {timeline.map((t, i) => (
        <TimelineItem key={t.year} year={t.year} event={t.event} index={i} />
      ))}
    </div>
  );
}
