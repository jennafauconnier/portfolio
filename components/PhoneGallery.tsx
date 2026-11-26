"use client";

import { Box } from "@mui/material";
import Image from "next/image";

interface PhoneGalleryProps {
  images: string[];
  alt: string;
}

/* Galerie de captures mobile : chaque écran est recadré pour remplir
   un cadre téléphone uniforme, toutes les écrans visibles d'un coup. */
export default function PhoneGallery({ images, alt }: PhoneGalleryProps) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(4, 1fr)" },
        gap: 2,
        mb: 4,
      }}
    >
      {images.map((src, i) => (
        <Box
          key={src}
          sx={{
            position: "relative",
            width: "100%",
            aspectRatio: "9 / 19.5",
            borderRadius: 3,
            overflow: "hidden",
            border: "1px solid #1a1a1a",
            backgroundColor: "#0a0a0a",
            transition: "all 0.25s ease",
            "&:hover": {
              borderColor: "#3f3f46",
              transform: "translateY(-3px)",
              boxShadow: "0 10px 24px rgba(0,0,0,0.45)",
            },
          }}
        >
          <Image
            src={src}
            alt={`${alt} - ${i + 1}`}
            fill
            sizes="(max-width: 900px) 45vw, 220px"
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
        </Box>
      ))}
    </Box>
  );
}
