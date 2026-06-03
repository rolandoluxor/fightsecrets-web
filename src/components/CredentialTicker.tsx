"use client";
import Image from "next/image";

const items = [
  { label: "UFC Ultimate Fighter", sublabel: "Season 9 Champion", icon: "/images/ufc-logo.png" },
  { label: "BJJ Black Belt", sublabel: "Gracie US Nationals Gold", icon: null },
  { label: "Special Forces Instructor", sublabel: "Elite Combatives Trainer", icon: "/images/special-forces-icon.png" },
  { label: "The Game Changers", sublabel: "James Cameron Production", icon: null },
  { label: "TUF Season 9 Winner", sublabel: "Welterweight Champion", icon: "/images/ufc-logo.png" },
  { label: "Combat Veteran", sublabel: "Pressure-Tested Training", icon: null },
  { label: "Prepare · Protect · Prevail", sublabel: "The Fight Secrets Method", icon: null },
];

// Duplicate for seamless loop
const doubled = [...items, ...items];

export default function CredentialTicker() {
  return (
    <div
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "18px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Left/right fade masks */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, var(--surface) 0%, transparent 10%, transparent 90%, var(--surface) 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          gap: "0",
          animation: "ticker 32s linear infinite",
          width: "max-content",
        }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "0 40px",
              borderRight: "1px solid var(--border)",
              flexShrink: 0,
              whiteSpace: "nowrap",
            }}
          >
            {item.icon ? (
              <Image
                src={item.icon}
                alt={item.label}
                width={22}
                height={22}
                style={{ objectFit: "contain", opacity: 0.7 }}
              />
            ) : (
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "var(--red-bright)",
                  display: "block",
                  flexShrink: 0,
                }}
              />
            )}
            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#fff",
              }}
            >
              {item.label}
            </span>
            <span
              style={{
                fontSize: "12px",
                color: "var(--text-secondary)",
                letterSpacing: "0.04em",
              }}
            >
              {item.sublabel}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="ticker"] { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
