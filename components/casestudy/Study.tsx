"use client";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, Container, Divider as MuiDivider, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Children, type ReactNode } from "react";

/* Palette commune à toutes les études de cas du portfolio. */
export const C = {
  accent: "#2563eb",
  white: "#ffffff",
  wash: "#e4e4e7",
  soft: "#d4d4d8",
  body: "#a1a1aa",
  muted: "#71717a",
  faint: "#52525b",
  line: "#27272a",
  card: "rgba(255,255,255,0.02)",
};

export function BackLink({ href, label = "Retour au projet" }: { href: string; label?: string }) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <Button startIcon={<ArrowBackIcon />} sx={{ mb: 5, color: C.muted, "&:hover": { color: C.white } }}>
        {label}
      </Button>
    </Link>
  );
}

export function Shell({ children, maxWidth = "md" }: { children: ReactNode; maxWidth?: "sm" | "md" | "lg" }) {
  return (
    <Box sx={{ minHeight: "100vh", py: { xs: 6, md: 10 } }}>
      <Container maxWidth={maxWidth}>{children}</Container>
    </Box>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <Typography sx={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: C.accent, mb: 2 }}>
      {children}
    </Typography>
  );
}

export function Title({ children }: { children: ReactNode }) {
  return (
    <Typography
      component="h1"
      sx={{ fontSize: { xs: "2rem", md: "3rem" }, fontWeight: 200, color: C.white, lineHeight: 1.1, letterSpacing: "-0.03em", mb: 3 }}
    >
      {children}
    </Typography>
  );
}

export function Lede({ children }: { children: ReactNode }) {
  return (
    <Typography sx={{ fontSize: "1.1rem", lineHeight: 1.75, color: C.body, maxWidth: 640, mb: 5 }}>
      {children}
    </Typography>
  );
}

/* Grille de métadonnées (Rôle / Stack / Livré / Coût API). */
export function Meta({ items }: { items: [string, ReactNode][] }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr 1fr", md: `repeat(${items.length}, 1fr)` },
        gap: { xs: 3, md: 4 },
        mb: 6,
      }}
    >
      {items.map(([k, v]) => (
        <Box key={k}>
          <Typography sx={{ fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: C.faint, mb: 0.5 }}>
            {k}
          </Typography>
          <Typography sx={{ fontSize: "0.95rem", color: C.wash }}>{v}</Typography>
        </Box>
      ))}
    </Box>
  );
}

export function Divider() {
  return <MuiDivider sx={{ borderColor: C.line, my: 8 }} />;
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <Typography component="h2" sx={{ fontSize: { xs: "1.5rem", md: "1.9rem" }, fontWeight: 300, color: C.white, letterSpacing: "-0.02em", mb: 1.5 }}>
      {children}
    </Typography>
  );
}

export function Body({ children, maxWidth = 640 }: { children: ReactNode; maxWidth?: number }) {
  return (
    <Typography sx={{ color: C.body, lineHeight: 1.8, mb: 4, maxWidth }}>
      {children}
    </Typography>
  );
}

/* Note indentée à liseré bleu. */
export function Callout({ children }: { children: ReactNode }) {
  return (
    <Typography sx={{ color: C.muted, fontSize: "0.9rem", fontStyle: "italic", borderLeft: "2px solid", borderColor: C.accent, pl: 2, my: 4 }}>
      {children}
    </Typography>
  );
}

/* Carte « constat » : problème à gauche, décision à droite. */
export function TwoCol({ a, b }: { a: string; b: string }) {
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2, p: 2, borderRadius: 2, backgroundColor: C.card, border: `1px solid ${C.line}` }}>
      <Typography sx={{ fontSize: "0.95rem", color: C.wash, lineHeight: 1.6 }}>{a}</Typography>
      <Typography sx={{ fontSize: "0.95rem", color: C.body, lineHeight: 1.6 }}>{b}</Typography>
    </Box>
  );
}

export function CostCard({ value, label }: { value: string; label: string }) {
  return (
    <Box sx={{ p: 2.5, borderRadius: 2, border: `1px solid ${C.line}`, backgroundColor: C.card }}>
      <Typography sx={{ fontSize: "1.5rem", fontWeight: 300, color: C.white, letterSpacing: "-0.02em", mb: 1 }}>{value}</Typography>
      <Typography sx={{ fontSize: "0.82rem", color: C.muted, lineHeight: 1.6 }}>{label}</Typography>
    </Box>
  );
}

export function CostGrid({ children }: { children: ReactNode }) {
  const n = Children.count(children);
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: n > 3 ? `repeat(${n}, 1fr)` : `repeat(${Math.min(n, 3)}, 1fr)` },
        gap: 2,
        mb: 4,
      }}
    >
      {children}
    </Box>
  );
}

/* Liste à puces ; les items acceptent du HTML (ex. <b>). */
export function BulletedList({ items }: { items: string[] }) {
  return (
    <Box component="ul" sx={{ pl: 2.5, m: 0, mb: 4, listStyle: "disc", color: C.body, lineHeight: 1.9, fontSize: "0.95rem" }}>
      {items.map((it, i) => (
        <li key={i} dangerouslySetInnerHTML={{ __html: it }} />
      ))}
    </Box>
  );
}

/* Bloc « livré / absent ». */
export function Limite({ tag, children }: { tag: string; children: ReactNode }) {
  return (
    <Box sx={{ p: 2.5, borderRadius: 2, border: `1px solid ${C.line}` }}>
      <Typography sx={{ fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: C.faint, mb: 1 }}>
        {tag}
      </Typography>
      <Typography sx={{ fontSize: "0.95rem", color: C.body, lineHeight: 1.7 }}>{children}</Typography>
    </Box>
  );
}

/* Image en boîte arrondie (captures 720×1565 ou schéma large). */
export function Shot({ src, alt, aspect = 1565 / 720 }: { src: string; alt: string; aspect?: number }) {
  return (
    <Box sx={{ borderRadius: 3, overflow: "hidden", border: `1px solid ${C.line}`, width: "100%" }}>
      <Image src={src} alt={alt} width={720} height={Math.round(720 * aspect)} style={{ width: "100%", height: "auto", display: "block" }} />
    </Box>
  );
}

/* Bloc de code (pipeline, etc.). */
export function Fence({ children }: { children: string }) {
  return (
    <Box
      component="pre"
      sx={{
        p: 3,
        borderRadius: 2,
        border: `1px solid ${C.line}`,
        backgroundColor: "#0a0a0a",
        color: C.soft,
        fontSize: "0.82rem",
        lineHeight: 1.7,
        overflowX: "auto",
        mb: 4,
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
      }}
    >
      {children}
    </Box>
  );
}

export function CtaRow({ children }: { children: ReactNode }) {
  return <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>{children}</Box>;
}

export function GhostButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Button
      variant="outlined"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{ borderColor: C.line, color: C.body, textTransform: "none", "&:hover": { borderColor: "#3f3f46", color: C.white } }}
    >
      {children}
    </Button>
  );
}

export function TextButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <Button sx={{ color: C.body, textTransform: "none" }}>{children}</Button>
    </Link>
  );
}
