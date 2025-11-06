import type { MetadataRoute } from "next";
import { baseURL } from "@/app/resources";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BimaDev - Full Stack Developer Portfolio",
    short_name: "BimaDev",
    description:
      "Full Stack Developer from Indonesia specializing in Next.js, React, TypeScript, and AI integration. Explore modern web development projects and technical insights.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#0066FF",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    categories: ["portfolio", "developer", "technology"],
    lang: "en-US",
    dir: "ltr",
  };
}
