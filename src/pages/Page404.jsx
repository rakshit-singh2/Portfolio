import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';

const Page404 = () => {
  const history = useHistory();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        flexDirection: 'column',
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
      }}
    >
      <Typography variant="h1" sx={{ fontSize: 100, fontWeight: 600, color: '#1976d2' }}>
        404
      </Typography>
      <Typography variant="h6" sx={{ marginBottom: 2, color: '#666' }}>
        Oops! The page you are looking for does not exist.
      </Typography>
      <img 
        src="https://via.placeholder.com/400x300?text=404+Image" 
        alt="404 Illustration" 
        style={{ width: '100%', maxWidth: '400px', marginBottom: '20px' }} 
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push('/')}
        sx={{
          padding: '10px 20px',
          fontSize: 16,
          fontWeight: 'bold',
          borderRadius: 2,
          transition: 'all 0.3s',
          '&:hover': {
            backgroundColor: '#1565c0',
          },
        }}
      >
        Go Back to Home
      </Button>
    </Box>
  );
};

export default Page404;
