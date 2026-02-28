'use client';

import { Box, Container, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { useColorMode } from './ThemeRegistry';

export default function HeroSection() {
  const { mode } = useColorMode();

  const gradient = mode === 'light'
    ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 50%, #0f172a 100%)'
    : 'linear-gradient(135deg, #3b82f6 0%, #1e40af 50%, #1e3a8a 100%)';

  return (
    <Box
      sx={{
        background: gradient,
        color: 'white',
        py: { xs: 8, md: 12 },
        pt: { xs: 12, md: 16 },
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: mode === 'light'
            ? 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)'
            : 'radial-gradient(circle at 20% 50%, rgba(96, 165, 250, 0.2) 0%, transparent 50%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '2.5rem', md: '3.5rem' },
          }}
        >
          Bienvenue sur mon Portfolio
        </Typography>
        <Typography
          variant="h5"
          paragraph
          sx={{
            mb: 4,
            opacity: 0.95,
            fontSize: { xs: '1.2rem', md: '1.5rem' },
          }}
        >
          Développeur Full Stack passionné par la création d&apos;expériences web exceptionnelles
        </Typography>
        <Link href="#projects" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: 'white',
              color: mode === 'light' ? '#1e40af' : '#1e3a8a',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
              },
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600,
              transition: 'all 0.3s ease',
            }}
          >
            Voir mes projets
          </Button>
        </Link>
      </Container>
    </Box>
  );
}