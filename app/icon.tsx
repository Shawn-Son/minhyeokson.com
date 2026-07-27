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
          background: "#171613",
          color: "#f4f2ee",
          fontSize: 38,
          letterSpacing: "-0.04em",
        }}
      >
        s
      </div>
    ),
    size,
  );
}
