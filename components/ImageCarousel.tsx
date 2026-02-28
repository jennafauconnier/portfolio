'use client';

import { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setImageError(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setImageError(false);
  };

  if (images.length === 0) return null;

  return (
    <Box 
      sx={{ 
        position: 'relative', 
        width: '100%',
        height: { xs: 500, sm: 600, md: 700 }, // Hauteur responsive
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'grey.900',
        borderRadius: 2,
        overflow: 'hidden',
      }}
    >
      {imageError ? (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Typography variant="h6" color="white">
            Image non trouvée
          </Typography>
          <Typography variant="body2" color="grey.400">
            {images[currentIndex]}
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
            maxWidth: 400, // Largeur max pour simuler un iPhone
          }}
        >
          <Image
            src={images[currentIndex]}
            alt={`${alt} - ${currentIndex + 1}`}
            fill
            style={{ objectFit: 'contain' }} // contain pour garder les proportions
            onError={() => setImageError(true)}
            priority={currentIndex === 0}
          />
        </Box>
      )}
      
      {images.length > 1 && (
        <>
          {/* Bouton Précédent */}
          <IconButton
            onClick={goToPrevious}
            sx={{
              position: 'absolute',
              left: { xs: 8, sm: 16 },
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'rgba(0, 0, 0, 0.6)',
              color: 'white',
              '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.8)' },
              zIndex: 2,
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          
          {/* Bouton Suivant */}
          <IconButton
            onClick={goToNext}
            sx={{
              position: 'absolute',
              right: { xs: 8, sm: 16 },
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'rgba(0, 0, 0, 0.6)',
              color: 'white',
              '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.8)' },
              zIndex: 2,
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>

          {/* Indicateurs de pagination */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 16,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: 1,
              zIndex: 2,
              bgcolor: 'rgba(0, 0, 0, 0.4)',
              px: 2,
              py: 1,
              borderRadius: 2,
            }}
          >
            {images.map((_, index) => (
              <Box
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setImageError(false);
                }}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  bgcolor: index === currentIndex ? 'white' : 'rgba(255, 255, 255, 0.5)',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  border: '1px solid rgba(255, 255, 255, 0.8)',
                  '&:hover': {
                    bgcolor: 'white',
                    transform: 'scale(1.2)',
                  },
                }}
              />
            ))}
          </Box>


          <Box
            sx={{
              position: 'absolute',
              top: { xs: 32, sm: 40 },
              right: 16,
              bgcolor: 'rgba(0, 0, 0, 0.6)',
              color: 'white',
              px: 2,
              py: 0.5,
              borderRadius: 1,
              fontSize: '0.875rem',
              fontWeight: 'medium',
              zIndex: 2,
            }}
          >
            {currentIndex + 1} / {images.length}
          </Box>
        </>
      )}
    </Box>
  );
}