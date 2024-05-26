import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Footer: React.FC = () => (
  <Container maxWidth="sm">
    <Typography variant="body2" color="textSecondary" align="center">
      {'© '}
      MyApp {new Date().getFullYear()}
      {'.'}
    </Typography>
  </Container>
);

export default Footer;
