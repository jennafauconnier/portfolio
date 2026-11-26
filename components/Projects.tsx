import { Box, Container, Typography, Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types/project";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <Box id="projects" sx={{ py: 10, backgroundColor: "transparent" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          sx={{
            fontWeight: 300,
            letterSpacing: "-0.02em",
            mb: 6,
            color: "var(--c-strong)",
          }}
        >
          Mes Projets
        </Typography>
        {projects.length === 0 ? (
          <Typography variant="body1" align="center" sx={{ color: "var(--c-muted)" }}>
            Aucun projet pour le moment.
          </Typography>
        ) : (
          <Grid container spacing={4}>
            {projects.map((project) => (
              <Grid key={project.slug} size={{ xs: 12, sm: 6, md: 4 }}>
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}
