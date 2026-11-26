"use client";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Box,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import Link from "next/link";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease",
        backgroundColor: "var(--t-surface)",
        border: "1px solid var(--t-line)",
        "&:hover": {
          transform: "translateY(-8px)",
          borderColor: "var(--t-line)",
          boxShadow: "0 8px 24px rgba(255, 255, 255, 0.04)",
        },
      }}
    >
      <Link
        href={`/projects/${project.slug}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: 400,
            bgcolor: "#000000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <CardMedia
            component="img"
            image={project.image || "/images/placeholder.jpg"}
            alt={project.title}
            sx={{
              height: "100%",
              width: "auto",
              maxWidth: "100%",
              objectFit: "contain",
            }}
          />
        </Box>
      </Link>
      <CardContent
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        <Link
          href={`/projects/${project.slug}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="h3"
            sx={{
              fontWeight: 500,
              cursor: "pointer",
              color: "var(--t-ink)",
              "&:hover": { color: "var(--t-ink2)" },
            }}
          >
            {project.title}
          </Typography>
        </Link>
        <Typography variant="body2" sx={{ flexGrow: 1, mb: 2, color: "var(--t-muted)" }}>
          {project.description}
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
          {project.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{
                fontSize: "0.75rem",
                backgroundColor: "var(--t-chip)",
                border: "1px solid var(--t-line)",
                color: "var(--t-ink3)",
                fontWeight: 400,
                "&:hover": { borderColor: "var(--t-line2)", color: "var(--t-ink)" },
                transition: "all 0.2s ease",
              }}
            />
          ))}
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          {project.github && (
            <IconButton
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{
                backgroundColor: "var(--t-chip)",
                border: "1px solid var(--t-line)",
                color: "var(--t-ink3)",
                "&:hover": { borderColor: "var(--t-line2)", color: "var(--t-ink)" },
                transition: "all 0.2s ease",
              }}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
          )}
          {project.demo && (
            <IconButton
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{
                backgroundColor: "var(--t-chip)",
                border: "1px solid var(--t-line)",
                color: "var(--t-ink3)",
                "&:hover": { borderColor: "var(--t-line2)", color: "var(--t-ink)" },
                transition: "all 0.2s ease",
              }}
            >
              <LaunchIcon fontSize="small" />
            </IconButton>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}
