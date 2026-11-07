"use client";

import Image from "next/image";
import { useRef } from "react";

interface TechTileProps {
  name: string;
  logo: string;
}

export default function TechTile({ name, logo }: TechTileProps) {
  const tileRef = useRef<HTMLLIElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);

  const pop = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    tileRef.current?.animate(
      [{ scale: "1" }, { scale: "0.9", offset: 0.3 }, { scale: "1.06", offset: 0.65 }, { scale: "1" }],
      { duration: 450, easing: "ease-out" },
    );
    logoRef.current?.animate(
      [{ rotate: "0deg", scale: "1" }, { rotate: "180deg", scale: "1.25" }, { rotate: "360deg", scale: "1" }],
      { duration: 450, easing: "ease-in-out" },
    );
  };

  return (
    <li
      ref={tileRef}
      onClick={pop}
      className="flex flex-col items-center justify-center gap-2 px-2 py-4 bg-[#fbf8f1] border border-[#1a1a1a]/40 text-center cursor-pointer select-none transition-[translate,box-shadow,border-color] duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-[#1a1a1a] hover:shadow-[3px_3px_0px_#1a1a1a] active:translate-x-0 active:translate-y-0 active:shadow-none"
    >
      <Image ref={logoRef} src={logo} alt="" width={40} height={40} className="w-9 h-9 sm:w-10 sm:h-10 object-contain" />
      <span className="text-sm sm:text-base font-bold font-serif text-[#1a1a1a]">{name}</span>
    </li>
  );
}
