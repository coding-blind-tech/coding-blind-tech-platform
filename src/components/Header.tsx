import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Header: React.FC = () => (
  <Container maxWidth="sm">
    <Typography variant="h2" align="center" gutterBottom>
      Welcome to MyApp
    </Typography>
    <Typography variant="h5" align="center" paragraph>
      This is your landing page after login.
    </Typography>
  </Container>
);

export default Header;
