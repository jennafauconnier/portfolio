"use client";

import { Box, Container, Typography, Grid, Paper, Chip } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import BuildIcon from "@mui/icons-material/Build";

const skillCategories = [
  {
    title: "Frontend",
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    skills: ["React Native", "Expo", "Next.js", "TypeScript"],
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
            color: "#ffffff",
          }}
        >
          Compétences
        </Typography>
        <Grid container spacing={4}>
          {skillCategories.map((category) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={category.title}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  transition: "all 0.3s ease",
                  backgroundColor: "#0a0a0a",
                  border: "1px solid #1a1a1a",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    borderColor: "#27272a",
                    boxShadow: "0 8px 24px rgba(255, 255, 255, 0.04)",
                  },
                }}
              >
                <Box
                  sx={{
                    color: "#ffffff",
                    backgroundColor: "#18181b",
                    border: "1px solid #27272a",
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
                  sx={{ fontWeight: 500, color: "#ffffff" }}
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
                        backgroundColor: "#18181b",
                        border: "1px solid #27272a",
                        color: "#a1a1aa",
                        fontWeight: 400,
                        "&:hover": {
                          borderColor: "#3f3f46",
                          color: "#ffffff",
                        },
                        transition: "all 0.2s ease",
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
