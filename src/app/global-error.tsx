"use client";

interface GlobalErrorProps {
  retry: () => void;
}

export default function GlobalError({ retry }: GlobalErrorProps) {
  return (
    <html lang="en">
      <body style={{ margin: 0, minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2rem", background: "#fbf8f1", color: "#1a1a1a", fontFamily: "Georgia, serif", textAlign: "center" }}>
        <title>Something went wrong</title>
        <h1 style={{ margin: 0, fontSize: "2.5rem" }}>Something went wrong</h1>
        <button
          type="button"
          onClick={() => retry()}
          style={{ padding: "0.75rem 1.5rem", background: "#1a1a1a", color: "#fbf8f1", border: "1px solid #1a1a1a", cursor: "pointer" }}
        >
          Try Again
        </button>
      </body>
    </html>
  );
}
