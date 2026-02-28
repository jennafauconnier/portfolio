'use client';

import {
  Container,
  Typography,
  Box,
  Chip,
  Button,
  Paper,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import ImageCarousel from './ImageCarousel';
import { useColorMode } from './ThemeRegistry';
import { Project } from '@/types/project';

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const { mode } = useColorMode();

  return (
    <Box sx={{ backgroundColor: mode === 'dark' ? '#0a0a0a' : 'background.default', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="md">
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Button
            startIcon={<ArrowBackIcon />}
            sx={{ 
              mb: 4,
              color: 'text.primary',
            }}
          >
            Retour à l&apos;accueil
          </Button>
        </Link>

        <Paper 
          elevation={0} 
          sx={{ 
            p: 4,
            backgroundColor: mode === 'dark' ? '#0a0a0a' : 'background.paper',
            border: mode === 'dark' ? '1px solid #1a1a1a' : 'none',
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{ 
              fontWeight: 'bold',
              color: 'text.primary',
            }}
          >
            {project.title}
          </Typography>

          <Box sx={{ display: 'flex', gap: 1, mb: 3, flexWrap: 'wrap' }}>
            {project.tags.map((tag) => (
              <Chip 
                key={tag} 
                label={tag} 
                sx={{
                  background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
                  color: 'white',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
                    transform: 'scale(1.05)',
                  },
                  transition: 'all 0.2s ease',
                }}
              />
            ))}
          </Box>

          <Box
            sx={{
              display: 'flex',
              gap: 2,
              mb: 4,
            }}
          >
            {project.github && (
              <Button
                variant="outlined"
                startIcon={<GitHubIcon />}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  borderColor: mode === 'dark' ? '#3b82f6' : 'primary.main',
                  color: mode === 'dark' ? '#3b82f6' : 'primary.main',
                  '&:hover': {
                    borderColor: mode === 'dark' ? '#60a5fa' : 'primary.dark',
                    backgroundColor: mode === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(30, 64, 175, 0.04)',
                  },
                }}
              >
                Voir sur GitHub
              </Button>
            )}
            {project.demo && (
              <Button
                variant="contained"
                startIcon={<LaunchIcon />}
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
                  },
                }}
              >
                Voir la démo
              </Button>
            )}
          </Box>

          {(project.images && project.images.length > 0) ? (
            <Box sx={{ mb: 4, borderRadius: 2, overflow: 'hidden' }}>
              <ImageCarousel images={project.images} alt={project.title} />
            </Box>
          ) : project.image ? (
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: 400,
                mb: 4,
                borderRadius: 2,
                overflow: 'hidden',
              }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </Box>
          ) : null}

          <Box
            sx={{
              color: 'text.primary',
              '& h2': {
                mt: 4,
                mb: 2,
                fontSize: '1.75rem',
                fontWeight: 'bold',
                color: 'text.primary',
              },
              '& h3': {
                mt: 3,
                mb: 1.5,
                fontSize: '1.4rem',
                fontWeight: 'bold',
                color: 'text.primary',
              },
              '& p': {
                mb: 2,
                lineHeight: 1.8,
                fontSize: '1.05rem',
                color: 'text.primary',
              },
              '& ul, & ol': {
                mb: 2,
                pl: 3,
                color: 'text.primary',
              },
              '& li': {
                mb: 1,
                color: 'text.primary',
              },
              '& code': {
                backgroundColor: mode === 'dark' ? '#1a1a1a' : 'grey.100',
                color: mode === 'dark' ? '#e2e8f0' : 'text.primary',
                padding: '2px 6px',
                borderRadius: 1,
                fontSize: '0.9em',
              },
              '& pre': {
                backgroundColor: mode === 'dark' ? '#1a1a1a' : 'grey.100',
                color: mode === 'dark' ? '#e2e8f0' : 'text.primary',
                p: 2,
                borderRadius: 1,
                overflow: 'auto',
                mb: 2,
              },
            }}
          >
            <ReactMarkdown>{project.content}</ReactMarkdown>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}