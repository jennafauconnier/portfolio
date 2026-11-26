"use client";

import { Box, Container, Typography, Avatar } from "@mui/material";

export default function About() {
  return (
    <Box id="about" sx={{ py: 10, backgroundColor: "transparent" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 6,
          }}
        >
          <Box
            sx={{
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: -3,
                left: -3,
                right: -3,
                bottom: -3,
                background: "linear-gradient(135deg, var(--c-line) 0%, var(--c-line-strong) 100%)",
                borderRadius: "50%",
                zIndex: 0,
              },
            }}
          >
            <Avatar
              alt="Jenna Fauconnier"
              src="/images/profile.jpeg"
              sx={{
                width: { xs: 150, md: 200 },
                height: { xs: 150, md: 200 },
                position: "relative",
                zIndex: 1,
                border: "4px solid var(--c-bg)",
              }}
            />
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 300,
                letterSpacing: "-0.02em",
                color: "var(--c-strong)",
                mb: 3,
              }}
            >
              À propos de moi
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.1rem", lineHeight: 1.8, color: "var(--c-soft)" }}
            >
              Bonjour ! Je suis une développeuse passionnée par la création
              d&apos;applications mobiles performantes. Ayant une expertise en
              React Native / React, TypeScript et Next.js, j&apos;aime aussi
              énormément penser à l&apos;UX/UI de l&apos;application.
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.1rem", lineHeight: 1.8, color: "var(--c-muted)" }}
            >
              Mon approche combine une attention particulière aux détails avec
              une volonté constante d&apos;apprendre et d&apos;adopter les
              meilleures pratiques du développement web.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
