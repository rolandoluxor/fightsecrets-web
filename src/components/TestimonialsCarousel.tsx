"use client";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const testimonials = [
  {
    quote: "I brought Mr. Wilks in to train our MCMAP Instructor Trainers. His ability to elevate even the most advanced combat professionals was exceptional.",
    name: "MSgt. Rob Antczak",
    role: "Chief Instructor, Marine Corps Martial Arts Program (SOI East)",
    initial: "RA",
    featured: true,
  },
  {
    quote: "Mr. Wilks provided the Marines under my command with the most effective hand-to-hand combat training of my military career.",
    name: "Lt. Col. Major Heatherman (ret.)",
    role: "Infantry Company Commander, Battle of Fallujah",
    initial: "MH",
    featured: true,
  },
  {
    quote: "Mr. Wilks helped develop the Arrest, Control, and Combatives Program for the US Marshals Service. His expertise significantly strengthened operational readiness.",
    name: "Jon Frank",
    role: "Head of Arrest Response Team, United States Marshals Service",
    initial: "JF",
    featured: false,
  },
  {
    quote: "I took my son to train with James before he left for college. We both left feeling safer, more confident, and better prepared.",
    name: "Arik Prawer",
    role: "President, Zillow",
    initial: "AP",
    featured: false,
  },
  {
    quote: "James completely changed the way I think about personal safety as a woman. I left feeling far more confident and better prepared for the realities of the world today.",
    name: "CEO, Fortune 500 Company",
    role: "Private Client",
    initial: "CE",
    featured: false,
  },
  {
    quote: "James studied Jeet Kune Do with me and is a protégé. I highly recommend him in any capacity.",
    name: "Paul Vunak",
    role: "Progressive Fighting Systems",
    initial: "PV",
    featured: false,
  },
];

function TestimonialCard({
  quote,
  name,
  role,
  initial,
  featured,
}: {
  quote: string;
  name: string;
  role: string;
  initial: string;
  featured: boolean;
}) {
  return (
    <div
      style={{
        background: featured ? "rgba(181,18,27,0.05)" : "#1A1D21",
        border: featured ? "1px solid rgba(181,18,27,0.25)" : "1px solid #2C3138",
        borderTop: featured ? "3px solid #B5121B" : "3px solid rgba(181,18,27,0.2)",
        borderRadius: "10px",
        padding: "36px 36px 32px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        boxShadow: featured
          ? "0 8px 32px rgba(0,0,0,0.5), 0 0 20px rgba(181,18,27,0.08)"
          : "0 4px 20px rgba(0,0,0,0.35)",
        transition: "transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(-5px)";
        el.style.boxShadow = "0 20px 48px rgba(0,0,0,0.65), 0 0 24px rgba(181,18,27,0.14)";
        el.style.borderColor = featured ? "rgba(181,18,27,0.5)" : "rgba(181,18,27,0.3)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = featured
          ? "0 8px 32px rgba(0,0,0,0.5), 0 0 20px rgba(181,18,27,0.08)"
          : "0 4px 20px rgba(0,0,0,0.35)";
        el.style.borderColor = featured ? "rgba(181,18,27,0.25)" : "#2C3138";
      }}
    >
      {/* Ambient glow for featured */}
      {featured && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 50% 0%, rgba(181,18,27,0.1) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
      )}

      {/* Decorative large quote mark */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-16px",
          right: "24px",
          fontFamily: "Georgia, serif",
          fontSize: "140px",
          lineHeight: 1,
          color: "#B5121B",
          opacity: featured ? 0.09 : 0.05,
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
          width: "32px",
          height: "2px",
          background: "#B5121B",
          marginBottom: "22px",
          flexShrink: 0,
          position: "relative",
        }}
      />

      {/* Quote */}
      <blockquote
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: featured ? "17px" : "15px",
          lineHeight: "1.78",
          color: featured ? "#E8EAED" : "#C7CCD1",
          fontStyle: "italic",
          fontWeight: 300,
          marginBottom: "28px",
          flex: 1,
          position: "relative",
        }}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          position: "relative",
          borderTop: "1px solid rgba(44,49,56,0.6)",
          paddingTop: "20px",
          marginTop: "auto",
        }}
      >
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            background: featured ? "rgba(181,18,27,0.15)" : "rgba(181,18,27,0.1)",
            border: featured ? "1px solid rgba(181,18,27,0.35)" : "1px solid rgba(181,18,27,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              color: "#B5121B",
              letterSpacing: "0.06em",
            }}
          >
            {initial}
          </span>
        </div>
        <div>
          <div
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "15px",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#F2F4F6",
              lineHeight: 1.2,
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              color: "#7A828C",
              marginTop: "4px",
              lineHeight: 1.4,
            }}
          >
            {role}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsGrid() {
  return (
    <>
      <div
        className="testimonials-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {testimonials.map((t, i) => (
          <AnimateOnScroll key={t.name} animation="fadeInUp" delay={i * 80}>
            <TestimonialCard {...t} />
          </AnimateOnScroll>
        ))}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .testimonials-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
