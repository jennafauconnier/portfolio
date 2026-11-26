"use client";

import { Box, Container, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function HeroSection() {
  return (
    <Box
      sx={{
        background: "transparent",
        color: "var(--c-strong)",
        py: { xs: 12, md: 16 },
        pt: { xs: 16, md: 20 },
        textAlign: "center",
        position: "relative",
      }}
    >
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontWeight: 300,
            fontSize: { xs: "2.8rem", sm: "4rem", md: "5.5rem" },
            lineHeight: 1.05,
            mb: 2,
            letterSpacing: "-0.03em",
            background: "linear-gradient(135deg, var(--c-strong) 0%, var(--c-hero-end) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Jenna Fauconnier
        </Typography>
        <Typography
          variant="h5"
          sx={{
            mb: 5,
            color: "var(--c-muted)",
            fontSize: { xs: "1rem", md: "1.25rem" },
            fontWeight: 400,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          Développeuse React.js & React Native
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link href="#projects" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "var(--c-strong)",
                color: "var(--c-bg)",
                "&:hover": {
                  backgroundColor: "var(--c-wash)",
                  transform: "translateY(-2px)",
                },
                px: 4,
                py: 1.5,
                fontSize: "0.9rem",
                fontWeight: 500,
                borderRadius: "10px",
                transition: "all 0.2s ease",
                textTransform: "none",
              }}
            >
              Voir mes projets
            </Button>
          </Link>
          <Link href="#contact" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: "var(--c-line)",
                color: "var(--c-strong)",
                "&:hover": {
                  borderColor: "var(--c-faint)",
                  backgroundColor: "var(--c-hover)",
                  transform: "translateY(-2px)",
                },
                px: 4,
                py: 1.5,
                fontSize: "0.9rem",
                fontWeight: 500,
                borderRadius: "10px",
                transition: "all 0.2s ease",
                textTransform: "none",
              }}
            >
              Me contacter
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
