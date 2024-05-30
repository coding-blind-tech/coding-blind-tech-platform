import React from 'react';
import { Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const UserToolbar: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 2, bgcolor: 'background.paper' }}>
      <Button color="inherit" component={RouterLink} to="/private/dashboard">
        Dashboard
      </Button>
      <Button color="inherit" component={RouterLink} to="/content">
        Content
      </Button>
      <Button color="inherit" component={RouterLink} to="/settings">
        Settings
      </Button>
    </Box>
  );
};

export default UserToolbar;
