"use client";

import { Box, Container, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function HeroSection() {
  return (
    <Box
      sx={{
        background: "transparent",
        color: "#ffffff",
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
            background: "linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)",
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
            color: "#71717a",
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
                backgroundColor: "#ffffff",
                color: "#000000",
                "&:hover": {
                  backgroundColor: "#e4e4e7",
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
                borderColor: "#27272a",
                color: "#ffffff",
                "&:hover": {
                  borderColor: "#52525b",
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
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
