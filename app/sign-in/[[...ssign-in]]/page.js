import React from 'react';
import { Container, Box, Typography, AppBar, Toolbar, Button } from '@mui/material';
import { SignIn } from '@clerk/nextjs';
import Link from 'next/link';

export default function SingInPage() {
  return (
    <Container>
      <Box sx={{ textAlign: 'center', py: 4, color: 'text.primary' }}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <SignIn path="/sign-in" routing="path" signInUrl="/sign-in" />
      </Box>
    </Container>
  );
}
