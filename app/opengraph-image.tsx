import { ImageResponse } from "next/og";
import { profile, siteHost } from "@/content/profile";

export const alt = `${profile.displayName} — ${profile.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Link preview card. Rendered once at build time. */
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
          background: "#0b0b0e",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 24,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#a5b4fc",
            }}
          >
            {profile.headline}
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 82,
              fontWeight: 600,
              letterSpacing: "-0.03em",
              color: "#ececf1",
            }}
          >
            {profile.displayName}
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 30,
              lineHeight: 1.45,
              color: "#9d9daa",
              maxWidth: 900,
            }}
          >
            MS Data Science at Michigan · ML engineer intern at eBay · published
            in Scientific Reports
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#6f6f7c",
            borderTop: "1px solid #26262e",
            paddingTop: 28,
          }}
        >
          <span>{siteHost}</span>
          <span>{profile.email}</span>
        </div>
      </div>
    ),
    size,
  );
}
