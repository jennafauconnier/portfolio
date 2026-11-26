"use client";

import { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setImageError(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setImageError(false);
  };

  if (images.length === 0) return null;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {/* Image area - fixed aspect ratio */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          aspectRatio: "9 / 16",
          maxHeight: 700,
          maxWidth: 380,
          mx: "auto",
          backgroundColor: "var(--c-card)",
          border: "1px solid var(--c-card-line)",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        {imageError ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography sx={{ color: "var(--c-muted)" }}>Image non trouvée</Typography>
            <Typography sx={{ color: "var(--c-line-strong)", fontSize: "0.8rem" }}>
              {images[currentIndex]}
            </Typography>
          </Box>
        ) : (
          <Image
            src={images[currentIndex]}
            alt={`${alt} - ${currentIndex + 1}`}
            fill
            sizes="380px"
            style={{ objectFit: "contain" }}
            onError={() => setImageError(true)}
            priority={currentIndex === 0}
          />
        )}

        {images.length > 1 && (
          <>
            <IconButton
              onClick={goToPrevious}
              sx={{
                position: "absolute",
                left: 8,
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "var(--c-chip)",
                border: "1px solid var(--c-line)",
                color: "var(--c-body)",
                "&:hover": { borderColor: "var(--c-line-strong)", color: "var(--c-strong)" },
                zIndex: 2,
              }}
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>

            <IconButton
              onClick={goToNext}
              sx={{
                position: "absolute",
                right: 8,
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "var(--c-chip)",
                border: "1px solid var(--c-line)",
                color: "var(--c-body)",
                "&:hover": { borderColor: "var(--c-line-strong)", color: "var(--c-strong)" },
                zIndex: 2,
              }}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </>
        )}
      </Box>

      {/* Dots + counter - below the image */}
      {images.length > 1 && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", gap: 0.8 }}>
            {images.map((_, index) => (
              <Box
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setImageError(false);
                }}
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: index === currentIndex ? "var(--c-strong)" : "var(--c-line-strong)",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  "&:hover": { bgcolor: "var(--c-muted)" },
                }}
              />
            ))}
          </Box>
          <Typography sx={{ color: "var(--c-faint)", fontSize: "0.75rem" }}>
            {currentIndex + 1} / {images.length}
          </Typography>
        </Box>
      )}
    </Box>
  );
}
