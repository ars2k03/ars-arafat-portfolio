import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Md Arafat Rahman Sohan (ARS / ars2k03) — Full-Stack Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  let profileSrc: string | null = null;
  try {
    const data = await readFile(join(process.cwd(), "public/profile.jpg"));
    profileSrc = `data:image/jpeg;base64,${data.toString("base64")}`;
  } catch {
    profileSrc = null;
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#fbf8f1",
          color: "#1a1a1a",
          padding: "36px 44px",
          border: "6px solid #1a1a1a",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 2,
            color: "#4a4336",
            borderBottom: "2px solid #1a1a1a",
            paddingBottom: 16,
            fontWeight: 700,
          }}
        >
          A SOFTWARE ENGINEER&apos;S BROADSHEET • ars2k03.online
        </div>
        <div style={{ display: "flex", flex: 1, marginTop: 28 }}>
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <div style={{ fontSize: 64, fontWeight: 900, lineHeight: 1.05 }}>
              Md Arafat
            </div>
            <div style={{ fontSize: 64, fontWeight: 900, lineHeight: 1.05 }}>
              Rahman Sohan
            </div>
            <div
              style={{
                fontSize: 38,
                fontWeight: 700,
                color: "#7a2020",
                marginTop: 14,
              }}
            >
              ARS • ars2k03
            </div>
            <div
              style={{
                fontSize: 29,
                fontWeight: 700,
                marginTop: 26,
                borderTop: "2px solid #1a1a1a",
                paddingTop: 18,
              }}
            >
              Full-Stack Software Engineer
            </div>
            <div style={{ fontSize: 24, color: "#4a4336", marginTop: 8 }}>
              Rajshahi, Bangladesh • RUET CSE
            </div>
            <div style={{ fontSize: 23, color: "#4a4336", marginTop: 4 }}>
              Founding Engineer — Chakri.ai &amp; JoldiMart
            </div>
            <div
              style={{
                fontSize: 21,
                color: "#7a2020",
                fontWeight: 700,
                marginTop: 22,
              }}
            >
              TypeScript • Next.js • NestJS • PostgreSQL
            </div>
          </div>
          {profileSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={profileSrc}
              alt=""
              width={300}
              height={400}
              style={{
                objectFit: "cover",
                border: "3px solid #1a1a1a",
                marginLeft: 32,
              }}
            />
          ) : null}
        </div>
      </div>
    ),
    { ...size },
  );
}
