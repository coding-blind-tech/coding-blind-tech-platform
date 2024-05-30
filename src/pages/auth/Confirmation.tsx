import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Confirmation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Registration Successful
        </Typography>
        <Typography component="p" variant="body1" sx={{ mt: 2, mb: 2 }}>
          Please check your email for a confirmation link to complete your registration.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/signin')}
        >
          Go to Sign In
        </Button>
      </Box>
    </Container>
  );
};

export default Confirmation;
