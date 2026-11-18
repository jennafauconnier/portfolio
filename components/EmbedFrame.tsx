"use client";

import { useEffect, useState } from "react";

interface EmbedFrameProps {
  src: string;
  title: string;
}

/** Intègre une page du même site et suit sa hauteur (postMessage) pour éviter un second défilement. */
export default function EmbedFrame({ src, title }: EmbedFrameProps) {
  const [height, setHeight] = useState(900);

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== window.location.origin) return;
      const h = e.data?.agentsTeamHeight;
      if (typeof h === "number" && h > 0) setHeight(h);
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <iframe
      src={src}
      title={title}
      style={{
        width: "100%",
        height,
        border: 0,
        background: "transparent",
        display: "block",
      }}
    />
  );
}
