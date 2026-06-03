"use client";
import Image from "next/image";

const items = [
  { label: "Elite Special Forces Instructor", icon: "/images/special-forces-icon.png" },
  { label: "Winner of The Ultimate Fighter", icon: "/images/ufc-logo.png" },
  { label: "Black Belt in Brazilian Jiu-Jitsu", icon: null },
  { label: "World-Renowned Combatives Expert", icon: null },
  { label: "U.S. Marshals Service Instructor", icon: null },
  { label: "Marine Corps MCMAP Instructor", icon: "/images/special-forces-icon.png" },
  { label: "Prepare · Protect · Prevail", icon: null },
];

const doubled = [...items, ...items];

export default function CredentialTicker() {
  return (
    <div
      style={{
        background: "#1A1D21",
        borderTop: "1px solid #2C3138",
        borderBottom: "1px solid #2C3138",
        padding: "16px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Edge fade masks */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, #1A1D21 0%, transparent 8%, transparent 92%, #1A1D21 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          animation: "ticker 36s linear infinite",
          width: "max-content",
        }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "0 36px",
              borderRight: "1px solid #2C3138",
              flexShrink: 0,
              whiteSpace: "nowrap",
            }}
          >
            {item.icon ? (
              <Image
                src={item.icon}
                alt={item.label}
                width={18}
                height={18}
                style={{ objectFit: "contain", opacity: 0.6 }}
              />
            ) : (
              <span
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: "#B5121B",
                  display: "block",
                  flexShrink: 0,
                }}
              />
            )}
            <span
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#C7CCD1",
              }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
