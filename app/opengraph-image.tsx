import { ImageResponse } from "next/og";
import { site, siteHost } from "@/content/site";

export const alt = `${site.displayName} — ML Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f4f2ee",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, color: "#171613", letterSpacing: "-0.02em" }}>
            {site.greeting}
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 30,
              lineHeight: 1.5,
              color: "#6c6960",
              maxWidth: 880,
            }}
          >
            {site.intro}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#a09c92",
            borderTop: "1px solid #e2ded6",
            paddingTop: 28,
          }}
        >
          <span>{site.displayName}</span>
          <span>{siteHost}</span>
        </div>
      </div>
    ),
    size,
  );
}
