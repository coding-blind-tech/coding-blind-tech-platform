import React from 'react';
import Container from '@mui/material/Container';
import CopyRight from '../global/CopyRight';

import constants from '../../constants';

const Footer: React.FC = () => {
  const { company} = constants;
  return (
    <Container component="footer">
      <CopyRight companyName={company} />
    </Container>
  )
};

export default Footer;
