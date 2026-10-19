"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

// whole-pixel steps keep the text sharp while it moves
export default function Marquee({ children, speed = 60, className = "" }: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let x = container.offsetWidth;
    let last = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const dt = Math.min(now - last, 100) / 1000;
      last = now;

      if (!pausedRef.current) {
        x -= speed * dt;
        if (x < -track.offsetWidth) x = container.offsetWidth;
        track.style.transform = `translateX(${Math.round(x)}px)`;
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className="relative flex overflow-hidden w-full select-none"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <div ref={trackRef} className={`inline-flex whitespace-nowrap ${className}`}>
        {children}
      </div>
    </div>
  );
}
