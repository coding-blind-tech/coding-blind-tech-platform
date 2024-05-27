import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({title}) => (
  <Container maxWidth="sm">
    <Typography component="h1" variant="h4" align="center" gutterBottom>
      {title}
    </Typography>
  </Container>
);

export default Header;
