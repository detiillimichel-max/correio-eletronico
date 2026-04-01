import React from "react";

export function Gallery({ images }: { images: string[] }) {
  return (
    <div style={{
      display: "flex",
      gap: "12px",
      overflowX: "auto",
      padding: "12px",
      background: "rgba(255,255,255,0.05)",
      borderRadius: "12px"
    }}>
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`gallery-${i}`}
          style={{ width: "150px", borderRadius: "12px" }}
        />
      ))}
    </div>
  );
}
