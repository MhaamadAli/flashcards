import { Box, Button, Grid, Typography } from '@mui/material';

export default function Home() {
  return (
    <main>
      <Box sx={{ textAlign: 'center', my: 8 }}>
        <Box sx={{ py: 4, px: 2, borderRadius: 2, backgroundColor: 'background.secondary', color: 'text.primary' }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to CodeLingo
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Your one-time stop for learning Programming concepts and algorithms
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'primary.main',
                color: 'primary.secondary',
                padding: '10px 20px',
                marginRight: 2,
                '&:hover': {
                  backgroundColor: 'primary.dark',
                },
              }}
              href="/generate"
            >
              Get Started
            </Button>
            <Button
              href="https://flashcardcodlingo.vercel.app/"
              variant="outlined"
              sx={{
                borderColor: 'primary.main',
                color: 'primary.main',
                padding: '10px 20px',
                '&:hover': {
                  borderColor: 'primary.dark',
                  color: 'primary.dark',
                },
              }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Box>

      <Box sx={{ my: 10, color: 'text.primary' }}>
        <Typography variant="h3" component="h2" gutterBottom textAlign="center">
          Features
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                py: 3,
                height: 300,
                px: 2,
                borderRadius: 2,
                backgroundColor: 'background.secondary',
              }}
            >
              <Typography variant="h6" align="center">
                Create flashcards with ease
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                py: 3,
                height: 300,
                px: 2,
                borderRadius: 2,
                backgroundColor: 'background.secondary',
              }}
            >
              <Typography variant="h6" align="center">
                Master your studies with our intelligent Spaced Repetition System (SRS) learning algorithm
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                py: 3,
                height: 300,
                px: 2,
                borderRadius: 2,
                backgroundColor: 'background.secondary',
              }}
            >
              <Typography variant="h6" align="center">
                Rate your CONFIDENCE level
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ my: 20, textAlign: 'center', color: 'text.primary' }}>
        <Typography variant="h3" component="h2" gutterBottom>
          Pricing
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                py: 3,
                height: 300,
                px: 2,
                borderRadius: 2,
                backgroundColor: 'background.secondary',
              }}
            >
              <Typography variant="h6" align="center">
                exceptional value with our affordable pricing
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                py: 3,
                height: 300,
                px: 2,
                borderRadius: 2,
                backgroundColor: 'background.secondary',
              }}
            >
              <Typography variant="h6" align="center">
                Designed to make our product accessible to everyone
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                py: 3,
                height: 300,
                px: 2,
                borderRadius: 2,
                backgroundColor: 'background.secondary',
              }}
            >
              <Typography variant="h6" align="center">
                A great investment in your education
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}
