'use client';

import { Box, Container, Typography, Grid, Paper, Chip } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import BuildIcon from '@mui/icons-material/Build';
import { useColorMode } from './ThemeRegistry';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    skills: ['React Native', 'Expo', 'Next.js', 'TypeScript'],
  },
  {
    title: 'Backend',
    icon: <StorageIcon sx={{ fontSize: 40 }} />,
    skills: ['Node.js', 'REST APIs', 'NestJS', 'Python', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Design',
    icon: <DesignServicesIcon sx={{ fontSize: 40 }} />,
    skills: ['UI/UX', 'Figma', 'Responsive Design'],
  },
  {
    title: 'Outils',
    icon: <BuildIcon sx={{ fontSize: 40 }} />,
    skills: ['Git', 'Docker', 'VS Code', 'npm/yarn', 'Vercel', 'AWS', 'Bun'],
  },
];

export default function Skills() {
  const { mode } = useColorMode();
  return (
    <Box
      id="skills"
      sx={{
        py: 8,
        backgroundColor: 'background.default',
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
          Compétences
        </Typography>
        <Grid container spacing={4}>
          {skillCategories.map((category) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={category.title}>
              <Paper
                elevation={mode === 'dark' ? 0 : 2}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  backgroundColor: mode === 'dark' ? '#0a0a0a' : 'background.paper', // Noir très foncé
                  border: mode === 'dark' ? '1px solid #1a1a1a' : 'none',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: mode === 'dark' ? '0 8px 24px rgba(59, 130, 246, 0.2)' : 6,
                  },
                }}
              >
                <Box 
                  sx={{ 
                    color: 'white',
                    background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
                    borderRadius: '50%',
                    width: 80,
                    height: 80,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                  }}
                >
                  {category.icon}
                </Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  {category.title}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center', mt: 2 }}>
                  {category.skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      size="small"
                      sx={{ 
                        fontSize: '0.75rem',
                        background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
                        color: 'white',
                        fontWeight: 500,
                        '&:hover': {
                          background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
                          transform: 'scale(1.05)',
                        },
                        transition: 'all 0.2s ease',
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

