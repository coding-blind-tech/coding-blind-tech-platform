import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

interface CopyRightProps {
  companyName: string;
  websiteUrl?: string;
}

const CopyRight: React.FC<CopyRightProps> = ({ companyName, websiteUrl }) => {
  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 2 }}>
      <Typography 
        variant="body2" 
        color="textSecondary" 
        align="center" 
        aria-label={`Copyright ${new Date().getFullYear()} ${companyName}`}
      >
        {'© '}
        {new Date().getFullYear()}{' '}
        {websiteUrl ? (
          <Link href={websiteUrl} color="inherit">
            {companyName}
          </Link>
        ) : (
          companyName
        )}
        {'.'}
      </Typography>
    </Container>
  );
};

export default CopyRight;
