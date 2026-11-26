"use client";

import { useEffect, useState } from "react";
import { IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ContrastIcon from "@mui/icons-material/Contrast";
import CheckIcon from "@mui/icons-material/Check";

type Mode = "system" | "light" | "dark";

const OPTIONS = [
  { mode: "system", label: "Automatique", Icon: ContrastIcon },
  { mode: "light", label: "Clair", Icon: LightModeOutlinedIcon },
  { mode: "dark", label: "Sombre", Icon: DarkModeOutlinedIcon },
] as const;

// Même logique que le script inline de app/layout.tsx (anti-flash au chargement).
function apply(mode: Mode) {
  const dark =
    mode === "dark" ||
    (mode === "system" && matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", dark);
}

export default function ThemeToggle() {
  const [mode, setMode] = useState<Mode>("system");
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "light" || saved === "dark") setMode(saved);
    } catch {}
  }, []);

  // En mode auto, suivre les changements du réglage de l'appareil en direct.
  useEffect(() => {
    if (mode !== "system") return;
    const mq = matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => apply("system");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [mode]);

  const choose = (m: Mode) => {
    setMode(m);
    setAnchor(null);
    try {
      if (m === "system") localStorage.removeItem("theme");
      else localStorage.setItem("theme", m);
    } catch {}
    apply(m);
  };

  const Current = OPTIONS.find((o) => o.mode === mode)!.Icon;

  return (
    <>
      <Tooltip title="Thème">
        <IconButton
          aria-label="Choisir le thème"
          aria-haspopup="menu"
          onClick={(e) => setAnchor(e.currentTarget)}
          sx={{
            ml: 1,
            color: "var(--c-muted)",
            transition: "all 0.2s ease",
            "&:hover": { color: "#3b82f6", bgcolor: "rgba(59, 130, 246, 0.1)" },
          }}
        >
          <Current fontSize="small" />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchor}
        open={Boolean(anchor)}
        onClose={() => setAnchor(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              mt: 1,
              minWidth: 180,
              borderRadius: 2,
              backgroundColor: "var(--c-card)",
              border: "1px solid var(--c-line)",
              boxShadow: "0 12px 32px rgba(15, 23, 42, 0.12)",
              backdropFilter: "blur(20px)",
            },
          },
        }}
      >
        {OPTIONS.map(({ mode: m, label, Icon }) => (
          <MenuItem
            key={m}
            selected={mode === m}
            onClick={() => choose(m)}
            sx={{
              mx: 0.5,
              borderRadius: 1.5,
              fontSize: "0.9rem",
              color: mode === m ? "var(--c-strong)" : "var(--c-body)",
              "&:hover": { bgcolor: "rgba(59, 130, 246, 0.1)", color: "#3b82f6" },
              "&.Mui-selected, &.Mui-selected:hover": { bgcolor: "rgba(59, 130, 246, 0.1)" },
              "& .MuiListItemIcon-root": { color: "inherit", minWidth: 32 },
            }}
          >
            <ListItemIcon>
              <Icon fontSize="small" />
            </ListItemIcon>
            {label}
            {mode === m && <CheckIcon fontSize="small" sx={{ ml: "auto", color: "#3b82f6" }} />}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
