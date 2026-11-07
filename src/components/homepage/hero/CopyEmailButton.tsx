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
      aria-label={copied ? "Email copied" : "Copy email to clipboard"}
      title={copied ? "Copied!" : "Copy email to clipboard"}
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={
            copied
              ? "M5 13l4 4L19 7"
              : "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          }
        />
      </svg>
    </button>
  );
}
