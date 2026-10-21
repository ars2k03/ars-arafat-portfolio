import type { MetadataRoute } from "next";
import { site } from "@/utils/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Md Arafat Rahman Sohan (ARS) — Full-Stack Software Engineer",
    short_name: "ARS | ars2k03",
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fbf8f1",
    theme_color: "#1a1a1a",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "256x256",
        type: "image/x-icon",
      },
    ],
  };
}
