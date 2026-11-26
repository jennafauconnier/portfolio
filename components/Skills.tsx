"use client";

import { Box, Container, Typography, Paper, Chip } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import BuildIcon from "@mui/icons-material/Build";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const skillCategories = [
  {
    title: "Frontend",
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    skills: ["React.js", "Tanstack", "React Native", "Expo", "Next.js", "TypeScript"],
  },
  {
    title: "Backend",
    icon: <StorageIcon sx={{ fontSize: 40 }} />,
    skills: [
      "Node.js",
      "REST APIs",
      "NestJS",
      "Python",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    title: "IA & Produit",
    icon: <AutoAwesomeIcon sx={{ fontSize: 40 }} />,
    skills: ["Python LLM", "Agents IA", "Product"],
  },
  {
    title: "Design",
    icon: <DesignServicesIcon sx={{ fontSize: 40 }} />,
    skills: ["UI/UX", "Figma", "Responsive Design"],
  },
  {
    title: "Outils",
    icon: <BuildIcon sx={{ fontSize: 40 }} />,
    skills: ["Git", "Docker", "VS Code", "npm/yarn", "Vercel", "AWS", "Bun"],
  },
];

export default function Skills() {
  return (
    <Box id="skills" sx={{ py: 10, backgroundColor: "transparent" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          sx={{
            fontWeight: 300,
            letterSpacing: "-0.02em",
            mb: 6,
            color: "var(--t-ink)",
          }}
        >
          Compétences
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(5, 1fr)" },
            gap: 3,
          }}
        >
          {skillCategories.map((category) => (
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
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
                <Box
                  sx={{
                    color: "var(--t-ink)",
                    backgroundColor: "var(--t-chip)",
                    border: "1px solid var(--t-line)",
                    borderRadius: "50%",
                    width: 80,
                    height: 80,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                  }}
                >
                  {category.icon}
                </Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 500, color: "var(--t-ink)" }}
                >
                  {category.title}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                    justifyContent: "center",
                    mt: 2,
                  }}
                >
                  {category.skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      size="small"
                      sx={{
                        fontSize: "0.75rem",
                        backgroundColor: "var(--t-chip)",
                        border: "1px solid var(--t-line)",
                        color: "var(--t-ink3)",
                        fontWeight: 400,
                        "&:hover": {
                          borderColor: "var(--t-line2)",
                          color: "var(--t-ink)",
                        },
                        transition: "all 0.2s ease",
                      }}
                    />
                  ))}
                </Box>
              </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
