"use client";

import { useState } from "react";
import Image from "next/image";
import { site } from "@/utils/site";

export default function ProfilePortrait() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="lg:col-span-5 flex justify-center lg:justify-end lg:items-start">
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-[380px] bg-[#f4efe2] border-2 border-[#1a1a1a] p-3 sm:p-4 shadow-[6px_6px_0px_#1a1a1a] relative">

        <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-[#1a1a1a] pointer-events-none"></div>
        <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-[#1a1a1a] pointer-events-none"></div>
        <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-[#1a1a1a] pointer-events-none"></div>
        <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-[#1a1a1a] pointer-events-none"></div>

        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={handleMouseMove}
          className="relative w-full aspect-[4/5] overflow-hidden border border-[#1a1a1a] bg-[#ebe3cf] cursor-crosshair select-none"
        >
          <Image
            src="/profile.jpg"
            alt={`Md Arafat Rahman Sohan (ARS / ars2k03) - ${site.role} from Rajshahi, Bangladesh`}
            fill
            preload
            loading="eager"
            sizes="(max-width: 768px) 100vw, 420px"
            className="object-cover object-top grayscale contrast-125 sepia-[0.25] brightness-[0.96]"
          />

          <div
            className="absolute inset-0 pointer-events-none opacity-25 mix-blend-multiply"
            style={{
              backgroundImage: `radial-gradient(#1a1a1a 1px, transparent 1px)`,
              backgroundSize: "4px 4px",
            }}
          />

          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-200"
            style={{
              opacity: isHovered ? 1 : 0,
              maskImage: `radial-gradient(circle 95px at ${mousePos.x}px ${mousePos.y}px, black 35%, transparent 100%)`,
              WebkitMaskImage: `radial-gradient(circle 95px at ${mousePos.x}px ${mousePos.y}px, black 35%, transparent 100%)`,
            }}
          >
            <Image
              src="/profile.jpg"
              alt={`Md Arafat Rahman Sohan (ARS / ars2k03) - ${site.role} from Rajshahi, Bangladesh`}
              fill
              loading="eager"
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover object-top"
            />
          </div>

          {isHovered && (
            <div
              className="absolute pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1a1a1a]/30 shadow-[0_0_12px_rgba(0,0,0,0.15)]"
              style={{
                left: `${mousePos.x}px`,
                top: `${mousePos.y}px`,
                width: "190px",
                height: "190px",
              }}
            />
          )}

          <div className="absolute bottom-3 right-8 sm:right-10 pointer-events-none select-none z-10">
            <svg
              width="92"
              height="92"
              viewBox="0 0 100 100"
              className="opacity-95 text-[#7a2020] drop-shadow-sm rotate-[-12deg]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="50"
                cy="50"
                r="46"
                stroke="currentColor"
                strokeWidth="2.2"
                fill="#fbf8f1"
                fillOpacity="0.92"
              />

              <circle
                cx="50"
                cy="50"
                r="33"
                stroke="currentColor"
                strokeWidth="1.2"
                fill="none"
              />

              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                <text
                  key={deg}
                  x="50"
                  y="11.5"
                  textAnchor="middle"
                  fontSize="6.5"
                  fill="currentColor"
                  transform={`rotate(${deg} 50 50)`}
                >
                  ★
                </text>
              ))}

              <text
                x="50"
                y="56"
                textAnchor="middle"
                fontSize="20"
                fontFamily="'Georgia', 'Times New Roman', serif"
                fontStyle="italic"
                fontWeight="900"
                letterSpacing="3"
                fill="currentColor"
              >
                A R S
              </text>

              <path
                d="M 28 62 C 38 59, 58 63, 72 60 C 75 59, 68 64, 56 65"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
