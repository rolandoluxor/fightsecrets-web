"use client";
import { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "fadeIn" | "scaleIn";
  delay?: number; // ms
  threshold?: number;
  className?: string;
  style?: React.CSSProperties;
  once?: boolean;
}

const variants = {
  fadeInUp:    { hidden: "opacity:0;transform:translateY(40px)", visible: "opacity:1;transform:translateY(0)" },
  fadeInLeft:  { hidden: "opacity:0;transform:translateX(-40px)", visible: "opacity:1;transform:translateX(0)" },
  fadeInRight: { hidden: "opacity:0;transform:translateX(40px)", visible: "opacity:1;transform:translateX(0)" },
  fadeIn:      { hidden: "opacity:0", visible: "opacity:1" },
  scaleIn:     { hidden: "opacity:0;transform:scale(0.92)", visible: "opacity:1;transform:scale(1)" },
};

export default function AnimateOnScroll({
  children,
  animation = "fadeInUp",
  delay = 0,
  threshold = 0.15,
  className,
  style,
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const v = variants[animation];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        ...(visible
          ? {}
          : { opacity: 0, transform: animation === "fadeInUp" ? "translateY(40px)"
              : animation === "fadeInLeft" ? "translateX(-40px)"
              : animation === "fadeInRight" ? "translateX(40px)"
              : animation === "scaleIn" ? "scale(0.92)"
              : "none" }),
        ...style,
      }}
      // Force re-read of hidden state before first paint
      data-hidden={v.hidden}
      data-visible={v.visible}
    >
      {children}
    </div>
  );
}
