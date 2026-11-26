"use client";

import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  IconButton,
} from "@mui/material";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dark, setDark] = useState(true);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      /* ignore */
    }
  }, [dark]);

  const handleNavClick = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: isScrolled ? "var(--t-nav)" : "transparent",
        backdropFilter: isScrolled ? "blur(20px)" : "none",
        borderBottom: isScrolled ? "1px solid var(--t-nav-border)" : "none",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: "72px" }}>
          <Link
            href="/"
            style={{ textDecoration: "none", color: "inherit", flexGrow: 1 }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: "var(--t-ink)",
                fontSize: "1.25rem",
                letterSpacing: "-0.02em",
              }}
            >
              Portfolio
            </Typography>
          </Link>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            {[
              { label: "À propos", id: "about" },
              { label: "Compétences", id: "skills" },
              { label: "Projets", id: "projects" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <Link
                key={item.id}
                href={`/#${item.id}`}
                style={{ textDecoration: "none" }}
              >
                <Button
                  onClick={() => handleNavClick(item.id)}
                  sx={{
                    color: "var(--t-ink)",
                    fontWeight: 500,
                    fontSize: "0.95rem",
                    px: 2,
                    "&:hover": {
                      bgcolor: "rgba(59, 130, 246, 0.1)",
                      color: "#3b82f6",
                    },
                    transition: "all 0.2s ease",
                  }}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            <IconButton
              onClick={() => setDark((d) => !d)}
              aria-label={dark ? "Passer au thème clair" : "Passer au thème sombre"}
              sx={{ color: "var(--t-ink)", ml: 1, "&:hover": { bgcolor: "var(--t-accent-hover-transparent, rgba(59,130,246,0.12))" } }}
            >
              {dark ? <LightModeOutlined fontSize="small" /> : <DarkModeOutlined fontSize="small" />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
