"use client";

import { Container, Typography, Box, Chip, Button, Paper } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import ImageCarousel from "./ImageCarousel";
import EmbedFrame from "./EmbedFrame";
import { Project } from "@/types/project";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const body = (
    <Box
            sx={{
              maxWidth: project.embed ? 900 : "none", // démo large, texte lisible
              color: "#d4d4d8",
              "& h2": {
                mt: 4,
                mb: 2,
                fontSize: "1.75rem",
                fontWeight: 300,
                color: "#ffffff",
              },
              "& h3": {
                mt: 3,
                mb: 1.5,
                fontSize: "1.4rem",
                fontWeight: 400,
                color: "#ffffff",
              },
              "& p": {
                mb: 2,
                lineHeight: 1.8,
                fontSize: "1.05rem",
                color: "#d4d4d8",
              },
              "& ul, & ol": { mb: 2, pl: 3, color: "#d4d4d8" },
              "& li": { mb: 1, color: "#d4d4d8" },
              "& code": {
                backgroundColor: "#18181b",
                color: "#a1a1aa",
                padding: "2px 6px",
                borderRadius: 1,
                fontSize: "0.9em",
              },
              "& pre": {
                backgroundColor: "#18181b",
                color: "#a1a1aa",
                p: 2,
                borderRadius: 1,
                overflow: "auto",
                mb: 2,
              },
            }}
          >
            <ReactMarkdown>{project.content}</ReactMarkdown>
    </Box>
  );

  return (
    <Box sx={{ backgroundColor: "transparent", minHeight: "100vh", py: 8 }}>
      <Container maxWidth={project.embed ? "xl" : "md"}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <Button
            startIcon={<ArrowBackIcon />}
            sx={{ mb: 4, color: "#71717a", "&:hover": { color: "#ffffff" } }}
          >
            Retour
          </Button>
        </Link>

        <Paper elevation={0} sx={{ p: 4, backgroundColor: "transparent" }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 300, letterSpacing: "-0.02em", color: "#ffffff" }}
          >
            {project.title}
          </Typography>

          <Box sx={{ display: "flex", gap: 1, mb: 3, flexWrap: "wrap" }}>
            {project.tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                sx={{
                  fontSize: "0.75rem",
                  backgroundColor: "#18181b",
                  border: "1px solid #27272a",
                  color: "#a1a1aa",
                  fontWeight: 400,
                  "&:hover": { borderColor: "#3f3f46", color: "#ffffff" },
                  transition: "all 0.2s ease",
                }}
              />
            ))}
          </Box>

          <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
            {project.github && (
              <Button
                variant="outlined"
                startIcon={<GitHubIcon />}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  borderColor: "#27272a",
                  color: "#a1a1aa",
                  "&:hover": {
                    borderColor: "#3f3f46",
                    color: "#ffffff",
                    backgroundColor: "rgba(255,255,255,0.04)",
                  },
                  textTransform: "none",
                }}
              >
                GitHub
              </Button>
            )}
            {project.demo && (
              <Button
                variant="outlined"
                startIcon={<LaunchIcon />}
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  borderColor: "#27272a",
                  color: "#a1a1aa",
                  "&:hover": {
                    borderColor: "#3f3f46",
                    color: "#ffffff",
                    backgroundColor: "rgba(255,255,255,0.04)",
                  },
                  textTransform: "none",
                }}
              >
                Demo
              </Button>
            )}
          </Box>

          {project.embed ? (
            <Box sx={{ mb: 4 }}>
              <EmbedFrame src={project.embed} title={project.title} />
            </Box>
          ) : project.images && project.images.length > 0 ? (
            <Box sx={{ mb: 4, borderRadius: 2, overflow: "hidden" }}>
              <ImageCarousel images={project.images} alt={project.title} />
            </Box>
          ) : project.image ? (
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: 400,
                mb: 4,
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
          ) : null}

          {body}
        </Paper>
      </Container>
    </Box>
  );
}
