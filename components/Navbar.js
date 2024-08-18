import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { Brightness4, Brightness7 } from '@mui/icons-material';

export default function Navbar({ toggleTheme, currentTheme }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }} >
          CodeLingo
        </Typography>
        <IconButton color="inherit" onClick={toggleTheme}>
          {currentTheme === 'light' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
        <SignedOut>
          <Button color="inherit" href="/sign-in">
            Login
          </Button>
          <Button color="inherit" href="/sign-up">
            Sign Up
          </Button>
        </SignedOut>
        <SignedIn>
          <div>
            <Button color="inherit" component={Link} href="/">
              Home
            </Button>
            <Button color="inherit" component={Link} href="/generate">
              Generate
            </Button>
            <Button color="inherit" component={Link} href="/flashcards">
              My Flashcards
            </Button>
            <UserButton />
          </div>
        </SignedIn>
      </Toolbar>
    </AppBar>
  );
}
