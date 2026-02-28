'use client';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Box,
  IconButton,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import Link from 'next/link';
import { Project } from '@/types/project';
import { useColorMode } from './ThemeRegistry';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { mode } = useColorMode();

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        backgroundColor: mode === 'dark' ? '#0a0a0a' : 'background.paper',
        border: mode === 'dark' ? '1px solid #1a1a1a' : 'none',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: mode === 'dark' ? '0 8px 24px rgba(59, 130, 246, 0.2)' : 8,
        },
      }}
    >
      <Link href={`/projects/${project.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: 400,
            bgcolor: mode === 'dark' ? '#000000' : 'grey.900',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          <CardMedia
            component="img"
            image={project.image || '/images/placeholder.jpg'}
            alt={project.title}
            sx={{ 
              height: '100%',
              width: 'auto',
              maxWidth: '100%',
              objectFit: 'contain',
            }}
          />
        </Box>
      </Link>
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Link href={`/projects/${project.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography
            gutterBottom
            variant="h5"
            component="h3"
            sx={{
              fontWeight: 'bold',
              cursor: 'pointer',
              color: 'text.primary',
              '&:hover': { color: 'primary.main' },
            }}
          >
            {project.title}
          </Typography>
        </Link>
        <Typography 
          variant="body2" 
          color="text.secondary" 
          paragraph 
          sx={{ flexGrow: 1 }}
        >
          {project.description}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
          {project.tags.map((tag) => (
            <Chip 
              key={tag} 
              label={tag} 
              size="small" 
              sx={{
                background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
                color: 'white',
                fontWeight: 500,
                border: 'none',
                '&:hover': {
                  background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.2s ease',
              }}
            />
          ))}
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {project.github && (
            <IconButton
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{
                background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
                color: 'white',
                '&:hover': {
                  background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
                  transform: 'scale(1.1)',
                },
              }}
            >
              <GitHubIcon />
            </IconButton>
          )}
          {project.demo && (
            <IconButton
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{
                background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
                color: 'white',
                '&:hover': {
                  background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
                  transform: 'scale(1.1)',
                },
              }}
            >
              <LaunchIcon />
            </IconButton>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}