import { Box, Container, Typography, IconButton, Stack } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Contact() {
  return (
    <Box id="contact" sx={{ py: 10, backgroundColor: "transparent" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          sx={{
            fontWeight: 300,
            letterSpacing: "-0.02em",
            mb: 3,
            color: "#ffffff",
          }}
        >
          Contact
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ fontSize: "1.1rem", mb: 5, color: "#71717a" }}
        >
          Si vous avez une opportunité à me proposer, ou si vous voulez
          discuter, n'hésites pas à me contacter !
        </Typography>
        <Stack direction="row" spacing={1.5} justifyContent="center">
          <IconButton
            href="mailto:jenna.fauconnier@gmail.com"
            size="small"
            sx={{
              backgroundColor: "#18181b",
              border: "1px solid #27272a",
              color: "#a1a1aa",
              padding: "10px",
              "&:hover": {
                borderColor: "#3f3f46",
                color: "#ffffff",
                transform: "scale(1.1)",
              },
              transition: "all 0.2s ease",
            }}
          >
            <EmailIcon fontSize="small" />
          </IconButton>
          <IconButton
            href="https://github.com/jennafauconnier"
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            sx={{
              backgroundColor: "#18181b",
              border: "1px solid #27272a",
              color: "#a1a1aa",
              padding: "10px",
              "&:hover": {
                borderColor: "#3f3f46",
                color: "#ffffff",
                transform: "scale(1.1)",
              },
              transition: "all 0.2s ease",
            }}
          >
            <GitHubIcon fontSize="small" />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/jenna-fauconnier-diop/"
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            sx={{
              backgroundColor: "#18181b",
              border: "1px solid #27272a",
              color: "#a1a1aa",
              padding: "10px",
              "&:hover": {
                borderColor: "#3f3f46",
                color: "#ffffff",
                transform: "scale(1.1)",
              },
              transition: "all 0.2s ease",
            }}
          >
            <LinkedInIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
}
