'use client';

import { ClerkProvider } from '@clerk/nextjs';
import Navbar from '../components/Navbar';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from '../components/theme';
import { Inter } from 'next/font/google';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({ children }) {
  const [theme, setTheme] = useState('dark');
  
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ClerkProvider>
      <html lang="en">
        <ThemeProvider theme={currentTheme}>
          <CssBaseline />
          <body className={inter.className}>
            <Navbar toggleTheme={toggleTheme} currentTheme={theme}/>
            {children}
          </body>
        </ThemeProvider>
      </html>
    </ClerkProvider>
  );
}
