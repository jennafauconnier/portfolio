import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Contact() {
  return (
    <Box
      id="contact"
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
          sx={{ fontWeight: 'bold', mb: 4 }}
        >
          Contact
        </Typography>
        <Typography variant="body1" align="center" paragraph sx={{ fontSize: '1.1rem', mb: 4 }}>
          Vous avez un projet en tête ou souhaitez simplement discuter ?
          N&apos;hésitez pas à me contacter !
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <IconButton
            href="mailto:votre.email@example.com"
            size="large"
            sx={{
              background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
              color: 'white',
              '&:hover': { 
                transform: 'scale(1.2)', 
                transition: 'transform 0.2s',
                background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
              },
            }}
          >
            <EmailIcon fontSize="large" />
          </IconButton>
          <IconButton
            href="https://github.com/jennafauconnier"
            target="_blank"
            rel="noopener noreferrer"
            size="large"
            sx={{
              background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
              color: 'white',
              '&:hover': { 
                transform: 'scale(1.2)', 
                transition: 'transform 0.2s',
                background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
              },
            }}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton
            href="https://linkedin.com/in/votreprofil"
            target="_blank"
            rel="noopener noreferrer"
            size="large"
            sx={{
              background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
              color: 'white',
              '&:hover': { 
                transform: 'scale(1.2)', 
                transition: 'transform 0.2s',
                background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
              },
            }}
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton
            href="https://twitter.com/votreprofil"
            target="_blank"
            rel="noopener noreferrer"
            size="large"
            sx={{
              background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
              color: 'white',
              '&:hover': { 
                transform: 'scale(1.2)', 
                transition: 'transform 0.2s',
                background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
              },
            }}
          >
            <TwitterIcon fontSize="large" />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
}

