"use client";

import { Box, Container, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: "transparent",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" align="center" sx={{ color: "var(--t-muted)" }}>
          © {new Date().getFullYear()} Imaginé et réalisé avec ❤️ par Jenna
          Diop.
        </Typography>
      </Container>
    </Box>
  );
}
