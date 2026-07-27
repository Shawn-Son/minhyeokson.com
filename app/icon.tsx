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
          background: "#4338ca",
          color: "#ffffff",
          fontSize: 34,
          fontWeight: 600,
          letterSpacing: "-0.04em",
          borderRadius: 12,
        }}
      >
        MS
      </div>
    ),
    size,
  );
}
