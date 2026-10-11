import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | The Chronicle",
  description: "The requested dispatch could not be found in our archives.",
};

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center min-h-[75vh] px-4 py-12 text-center">
      <div className="max-w-xl mx-auto w-full">

        {/* 404 Display */}
        <div className="relative my-4 py-6 sm:py-8">
          <div className="relative flex items-center justify-center">
            {/* Massive Woodblock-style 404 */}
            <h1 className="text-8xl sm:text-9xl md:text-[11rem] lg:text-[12rem] font-black font-serif text-[#1a1a1a] tracking-tighter leading-none select-none drop-shadow-[4px_4px_0px_#ded7c4]">
              404
            </h1>

            {/* Vintage Criminal "WANTED" Poster Stamp Overlay */}
            <div className="absolute rotate-[-12deg] pointer-events-none select-none">
              <span className="inline-block border-2 sm:border-[3px] border-[#7a2020] text-[#7a2020] px-4 py-1 sm:px-5 sm:py-1.5 text-sm sm:text-base md:text-lg font-serif font-black uppercase tracking-[0.3em] bg-[#fbf8f1]/95 shadow-[3px_3px_0px_#7a2020]">
                ★ WANTED ★
              </span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] text-[#fbf8f1] text-xs font-sans font-bold tracking-widest uppercase hover:bg-[#7a2020] transition-colors border border-[#1a1a1a] shadow-[3px_3px_0px_#1a1a1a]"
          >
            <span>←</span>
            <span>Back Home</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
