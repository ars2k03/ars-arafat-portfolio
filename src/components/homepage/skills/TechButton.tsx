"use client";

import Image from "next/image";
import { useRef } from "react";
import type { TechItem } from "@/types/skills";

interface TechButtonProps {
  tech: TechItem;
  size?: "sm" | "lg";
}

const sizes = {
  sm: { button: "gap-1.5 h-9 px-2.5 text-sm border border-[#1a1a1a]/30", logo: 20, image: "w-5 h-5" },
  lg: { button: "gap-2 h-14 px-3 text-[17px] border-[1.5px] border-[#1a1a1a]", logo: 32, image: "w-8 h-8" },
};

export default function TechButton({ tech, size = "sm" }: TechButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const styles = sizes[size];

  const pop = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    buttonRef.current?.animate(
      [{ scale: "1" }, { scale: "0.9", offset: 0.3 }, { scale: "1.06", offset: 0.65 }, { scale: "1" }],
      { duration: 450, easing: "ease-out" },
    );
    logoRef.current?.animate(
      [{ rotate: "0deg", scale: "1" }, { rotate: "180deg", scale: "1.25" }, { rotate: "360deg", scale: "1" }],
      { duration: 450, easing: "ease-in-out" },
    );
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={pop}
      className={`inline-flex items-center rounded bg-[#fbf8f1] font-semibold text-[#1a1a1a] cursor-pointer select-none transition-[translate,box-shadow,border-color] duration-150 hover:-translate-y-0.5 hover:border-[#1a1a1a] hover:shadow-[2px_2px_0px_#1a1a1a] active:translate-y-0 active:shadow-none ${styles.button}`}
    >
      <Image ref={logoRef} src={tech.logo} alt="" width={styles.logo} height={styles.logo} className={`${styles.image} object-contain`} />
      <span>{tech.name}</span>
    </button>
  );
}
