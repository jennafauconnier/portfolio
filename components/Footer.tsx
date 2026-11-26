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
        borderTop: "1px solid var(--c-line)",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" align="center" sx={{ color: "var(--c-muted)" }}>
          © {new Date().getFullYear()} Imaginé et réalisé avec ❤️ par Jenna
          Diop.
        </Typography>
      </Container>
    </Box>
  );
}
