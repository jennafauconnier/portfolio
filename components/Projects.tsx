import { Box, Container, Typography, Grid } from '@mui/material';
import ProjectCard from './ProjectCard';
import { Project } from '@/types/project';

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <Box
      id="projects"
      sx={{
        py: 8,
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', mb: 6 }}
        >
          Mes Projets
        </Typography>
        {projects.length === 0 ? (
          <Typography variant="body1" align="center" color="text.secondary">
            Aucun projet pour le moment. Ajoutez vos projets dans le dossier content/projects/
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

