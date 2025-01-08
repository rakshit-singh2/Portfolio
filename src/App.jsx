import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Router from "./routes";
import Header from './components/Header';
import Footer from './components/Footer';
import { Box } from '@mui/material';

const App = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Minimum height of viewport
      }}
    >
      <Header />
      <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
        {Router}
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
