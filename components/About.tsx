'use client';

import { Box, Container, Typography, Avatar } from '@mui/material';
import { useColorMode } from './ThemeRegistry';

export default function About() {
  const { mode } = useColorMode();

  const gradient = mode === 'light'
    ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 50%, #0f172a 100%)'
    : 'linear-gradient(135deg, #3b82f6 0%, #1e40af 50%, #1e3a8a 100%)';

  return (
    <Box
      id="about"
      sx={{
        py: 8,
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 4,
          }}
        >
          {/* Photo de profil avec bordure dégradé */}
          <Box
            sx={{
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: -4,
                left: -4,
                right: -4,
                bottom: -4,
                background: gradient,
                borderRadius: '50%',
                zIndex: 0,
              },
            }}
          >
            <Avatar
              alt="Photo de profil"
              src="/images/profile.jpeg"
              sx={{
                width: { xs: 150, md: 200 },
                height: { xs: 150, md: 200 },
                position: 'relative',
                zIndex: 1,
                border: mode === 'light' ? '4px solid white' : '4px solid #1e293b',
              }}
            />
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{ 
                fontWeight: 'bold',
                background: gradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              À propos de moi
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              Bonjour ! Je suis une développeuse passionnée par la création d&apos;applications
              mobiles performantes. Ayant une expertise en React Native / React, TypeScript et
              Next.js, j'aime aussi énormément penser à l'UX/UI de l'application.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              Mon approche combine une attention particulière aux détails avec une
              volonté constante d&apos;apprendre et d&apos;adopter les meilleures pratiques
              du développement web.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
