"use client";
import Image from "next/image";

const items = [
  { label: "Elite Special Forces Instructor",  icon: "/images/icon-prevail-new.png" },
  { label: "Winner of The Ultimate Fighter",   icon: "/images/icon-combat-fails-new.png" },
  { label: "Black Belt in Brazilian Jiu-Jitsu", icon: "/images/icon-protect-new.png" },
  { label: "World-Renowned Combatives Expert", icon: "/images/icon-traditional-fails-new.png" },
  { label: "U.S. Marshals Service Instructor", icon: "/images/icon-prepare-new.png" },
  { label: "Marine Corps MCMAP Instructor",    icon: "/images/icon-prevail-new.png" },
  { label: "Prepare · Protect · Prevail",      icon: "/images/icon-protect-new.png" },
];

const doubled = [...items, ...items];

export default function CredentialTicker() {
  return (
    <div
      style={{
        background: "#1A1D21",
        borderTop: "1px solid #2C3138",
        borderBottom: "1px solid #2C3138",
        padding: "20px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Edge fade masks */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, #1A1D21 0%, transparent 10%, transparent 90%, #1A1D21 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          animation: "ticker 40s linear infinite",
          width: "max-content",
        }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              padding: "0 48px",
              flexShrink: 0,
              whiteSpace: "nowrap",
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: "52px",
                height: "52px",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Image
                src={item.icon}
                alt=""
                width={48}
                height={48}
                style={{ objectFit: "contain", filter: "drop-shadow(0 0 6px rgba(181,18,27,0.35))" }}
              />
            </div>

            {/* Label */}
            <span
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "15px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#C7CCD1",
              }}
            >
              {item.label}
            </span>

            {/* Separator */}
            <span
              style={{
                display: "block",
                width: "1px",
                height: "32px",
                background: "#2C3138",
                marginLeft: "48px",
                flexShrink: 0,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
