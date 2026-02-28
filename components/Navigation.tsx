'use client';

import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton } from '@mui/material';
import Link from 'next/link';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useColorMode } from './ThemeRegistry';

export default function Navigation() {
  const { mode, toggleColorMode } = useColorMode();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const gradient = mode === 'light' 
    ? 'linear-gradient(90deg, #1e40af 0%, #1e3a8a 50%, #0f172a 100%)'
    : 'linear-gradient(90deg, #3b82f6 0%, #1e40af 50%, #1e3a8a 100%)';

  return (
    <AppBar 
      position="fixed" 
      elevation={isScrolled ? 4 : 0}
      sx={{ 
        background: isScrolled ? gradient : 'transparent',
        color: 'white',
        transition: 'all 0.3s ease',
        backdropFilter: isScrolled ? 'none' : 'blur(10px)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              Portfolio
            </Typography>
          </Link>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Link href="#about" style={{ textDecoration: 'none' }}>
              <Button sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' } }}>
                À propos
              </Button>
            </Link>
            <Link href="#skills" style={{ textDecoration: 'none' }}>
              <Button sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' } }}>
                Compétences
              </Button>
            </Link>
            <Link href="#projects" style={{ textDecoration: 'none' }}>
              <Button sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' } }}>
                Projets
              </Button>
            </Link>
            <Link href="#contact" style={{ textDecoration: 'none' }}>
              <Button sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' } }}>
                Contact
              </Button>
            </Link>
            <IconButton 
              onClick={toggleColorMode} 
              sx={{ 
                ml: 1, 
                color: 'white',
                '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' }
              }}
            >
              {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}