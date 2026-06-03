"use client";
import { useEffect, useRef, useState, useCallback } from "react";

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

export default function TimelineSection() {
  const sectionRef   = useRef<HTMLDivElement>(null);
  const lineTrackRef = useRef<HTMLDivElement>(null);
  const dotRefs      = useRef<(HTMLSpanElement | null)[]>([]);
  const [lineH,      setLineH]      = useState(0);          // px drawn so far
  const [activated,  setActivated]  = useState<boolean[]>(Array(timeline.length).fill(false));
  const [pinging,    setPinging]    = useState<boolean[]>(Array(timeline.length).fill(false));
  const totalH = useRef(0);

  const onScroll = useCallback(() => {
    const section = sectionRef.current;
    const track   = lineTrackRef.current;
    if (!section || !track) return;

    const sectionTop    = section.getBoundingClientRect().top + window.scrollY;
    const sectionHeight = section.offsetHeight;
    const viewportH     = window.innerHeight;

    // How far the "reading line" (viewport center) has travelled through the section
    const scrolled  = window.scrollY + viewportH * 0.7 - sectionTop;
    const progress  = Math.min(Math.max(scrolled / sectionHeight, 0), 1);
    const trackH    = totalH.current || track.offsetHeight;
    totalH.current  = trackH;
    const drawn     = progress * trackH;
    setLineH(drawn);

    // Activate each dot when the line reaches it
    const trackTop = track.getBoundingClientRect().top + window.scrollY;
    setActivated(prev => {
      const next = [...prev];
      dotRefs.current.forEach((dot, i) => {
        if (!dot) return;
        const dotTop = dot.getBoundingClientRect().top + window.scrollY - trackTop;
        if (drawn >= dotTop && !next[i]) {
          next[i] = true;
          // Trigger ping — clear after 1.8s
          setTimeout(() => {
            setPinging(p => { const n = [...p]; n[i] = true;  return n; });
          }, 0);
          setTimeout(() => {
            setPinging(p => { const n = [...p]; n[i] = false; return n; });
          }, 1800);
        }
      });
      return next;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <>
      <div ref={sectionRef} style={{ position: "relative" }}>
        {/* ── Line track ── */}
        <div
          ref={lineTrackRef}
          style={{ position: "absolute", left: "88px", top: 0, bottom: 0, width: "2px", zIndex: 0 }}
        >
          {/* Ghost track */}
          <div style={{ position: "absolute", inset: 0, background: "rgba(44,49,56,0.5)" }} />
          {/* Animated fill */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: `${lineH}px`,
              background: "linear-gradient(to bottom, #B5121B 0%, rgba(181,18,27,0.4) 80%, rgba(181,18,27,0.1) 100%)",
              boxShadow: lineH > 0 ? "0 0 10px 1px rgba(181,18,27,0.4)" : "none",
              transition: "box-shadow 0.3s ease",
            }}
          />
          {/* Glowing tip */}
          {lineH > 4 && (
            <div
              style={{
                position: "absolute",
                top: `${lineH - 4}px`,
                left: "50%",
                transform: "translateX(-50%)",
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#ff3a44",
                boxShadow: "0 0 10px 4px rgba(181,18,27,0.8), 0 0 20px 8px rgba(181,18,27,0.3)",
              }}
            />
          )}
        </div>

        {/* ── Items ── */}
        {timeline.map((t, i) => (
          <div
            key={t.year}
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: i < timeline.length - 1 ? "44px" : 0,
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Year column */}
            <div
              style={{
                width: "80px",
                flexShrink: 0,
                textAlign: "right",
                paddingRight: "24px",
                paddingTop: "1px",
                position: "relative",
              }}
            >
              <span
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  display: "block",
                  opacity: activated[i] ? 1 : 0,
                  transform: activated[i] ? "translateX(0)" : "translateX(-12px)",
                  transition: "opacity 0.4s ease, transform 0.4s ease",
                  color: activated[i] ? "#B5121B" : "#7A828C",
                  textShadow: activated[i] ? "0 0 12px rgba(181,18,27,0.6)" : "none",
                }}
              >
                {t.year}
              </span>

              {/* Dot + radar rings */}
              <span
                ref={el => { dotRefs.current[i] = el; }}
                style={{
                  position: "absolute",
                  right: "-6px",
                  top: "4px",
                  width: "12px",
                  height: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Radar ping rings — only when pinging */}
                {pinging[i] && (
                  <>
                    <span className="radar-ring radar-ring-1" />
                    <span className="radar-ring radar-ring-2" />
                    <span className="radar-ring radar-ring-3" />
                  </>
                )}
                {/* Core dot */}
                <span
                  style={{
                    display: "block",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: activated[i] ? "#B5121B" : "#2C3138",
                    border: activated[i] ? "2px solid rgba(255,255,255,0.15)" : "2px solid #2C3138",
                    boxShadow: activated[i] ? "0 0 0 3px rgba(181,18,27,0.25), 0 0 14px rgba(181,18,27,0.5)" : "none",
                    transform: activated[i] ? "scale(1)" : "scale(0.4)",
                    transition: "transform 0.45s cubic-bezier(0.34,1.56,0.64,1), background 0.3s ease, box-shadow 0.4s ease",
                    position: "relative",
                    zIndex: 2,
                  }}
                />
              </span>
            </div>

            {/* Event text — clip-path wipe reveal */}
            <div
              style={{
                flex: 1,
                paddingLeft: "20px",
                paddingTop: "0px",
                overflow: "hidden",
              }}
            >
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "15px",
                  color: activated[i] ? "#C7CCD1" : "#4A5059",
                  lineHeight: "1.7",
                  clipPath: activated[i] ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
                  transition: `clip-path 0.6s cubic-bezier(0.22,1,0.36,1) ${activated[i] ? "0.15s" : "0s"},
                               color 0.4s ease`,
                  willChange: "clip-path",
                }}
              >
                {t.event}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .radar-ring {
          position: absolute;
          border-radius: 50%;
          border: 1.5px solid rgba(181,18,27,0.7);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0);
          pointer-events: none;
        }
        .radar-ring-1 {
          width: 24px; height: 24px;
          animation: radarPing 1.4s ease-out forwards;
        }
        .radar-ring-2 {
          width: 36px; height: 36px;
          animation: radarPing 1.4s ease-out 0.2s forwards;
        }
        .radar-ring-3 {
          width: 52px; height: 52px;
          animation: radarPing 1.4s ease-out 0.4s forwards;
        }
        @keyframes radarPing {
          0%   { transform: translate(-50%,-50%) scale(0); opacity: 0.9; }
          70%  { opacity: 0.3; }
          100% { transform: translate(-50%,-50%) scale(1); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .radar-ring { display: none; }
        }
      `}</style>
    </>
  );
}
