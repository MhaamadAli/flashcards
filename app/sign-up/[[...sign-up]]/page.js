import React from 'react';
import { Container, Box, Typography, AppBar, Toolbar, Button } from '@mui/material';
import { SignUp } from '@clerk/nextjs';
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <Container>
      <Box sx={{ textAlign: 'center', py: 4, color: 'text.primary' }}>
        <Typography variant="h4" gutterBottom>
          Sign Up
        </Typography>
        <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
      </Box>
    </Container>
  );
}
