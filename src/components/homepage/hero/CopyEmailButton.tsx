"use client";

import { useState } from "react";

interface CopyEmailButtonProps {
  email: string;
  className: string;
}

export default function CopyEmailButton({ email, className }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={className}
      title="Copy email to clipboard"
    >
      {copied ? (
        <>
          <span className="text-emerald-700 group-hover:text-emerald-400">✓ Copied!</span>
        </>
      ) : (
        <>
          <svg className="w-3.5 h-3.5 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>Email</span>
        </>
      )}
    </button>
  );
}
