import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f7f5ef",
          color: "#315cf5",
          fontSize: 28,
          fontWeight: 700,
          letterSpacing: "-0.06em",
        }}
      >
        MS
      </div>
    ),
    size,
  );
}
