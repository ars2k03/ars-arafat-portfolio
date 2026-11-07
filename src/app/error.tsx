"use client";

import { useEffect } from "react";

interface ErrorPageProps {
  error: unknown;
  retry: () => void;
}

export default function ErrorPage({ error, retry }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex-1 flex flex-col items-center justify-center min-h-[75vh] px-4 py-12 text-center">
      <h1 className="text-4xl sm:text-5xl font-black font-serif text-[#1a1a1a] tracking-tight mb-8">
        Something went wrong
      </h1>
      <button
        type="button"
        onClick={() => retry()}
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] text-[#fbf8f1] text-xs font-sans font-bold tracking-widest uppercase hover:bg-[#7a2020] transition-colors border border-[#1a1a1a] shadow-[3px_3px_0px_#1a1a1a] cursor-pointer"
      >
        Try Again
      </button>
    </main>
  );
}
