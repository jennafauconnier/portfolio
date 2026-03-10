"use client";

export default function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Top center */}
      <div
        className="absolute"
        style={{
          top: "-15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "900px",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.18) 0%, transparent 60%)",
        }}
      />
      {/* Mid left */}
      <div
        className="absolute"
        style={{
          top: "25%",
          left: "-10%",
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.13) 0%, transparent 60%)",
        }}
      />
      {/* Mid right */}
      <div
        className="absolute"
        style={{
          top: "45%",
          right: "-5%",
          width: "650px",
          height: "650px",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.14) 0%, transparent 60%)",
        }}
      />
      {/* Lower left */}
      <div
        className="absolute"
        style={{
          top: "65%",
          left: "0%",
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.13) 0%, transparent 60%)",
        }}
      />
      {/* Bottom right */}
      <div
        className="absolute"
        style={{
          top: "82%",
          right: "0%",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.14) 0%, transparent 60%)",
        }}
      />
    </div>
  );
}
