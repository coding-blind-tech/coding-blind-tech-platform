import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Box, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [profileEl, setProfileEl] = useState<null | HTMLElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isLoggedIn = sessionStorage.getItem('loggedIn') === 'true';

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenu = (event: React.MouseEvent<HTMLElement>) => {
    setProfileEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setProfileEl(null);
  };

  const handleSignOut = () => {
    sessionStorage.removeItem('loggedIn');
    navigate('/');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <RouterLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Coding Blind Tech
          </RouterLink>
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/help">
            Help
          </Button>
          {!isLoggedIn ? (
            <>
              {location.pathname !== '/signin' && (
                <Button color="inherit" component={RouterLink} to="signin">
                  Sign In
                </Button>
              )}
              <Button color="inherit" component={RouterLink} to="register">
                Register
              </Button>
            </>
          ) : (
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              onClick={handleProfileMenu}
            >
              <Avatar alt="User Profile" />
            </IconButton>
          )}
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} component={RouterLink} to="/">
              Home
            </MenuItem>
            <MenuItem onClick={handleClose} component={RouterLink} to="/help">
              Help
            </MenuItem>
            {!isLoggedIn ? (
              <>
                {location.pathname !== '/signin' && (
                  <MenuItem onClick={handleClose} component={RouterLink} to="/signin">
                    Sign In
                  </MenuItem>
                )}
                <MenuItem onClick={handleClose} component={RouterLink} to="/register">
                  Sign Up
                </MenuItem>
              </>
            ) : null}
          </Menu>
        </Box>
        <Menu
          id="profile-menu"
          anchorEl={profileEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(profileEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} component={RouterLink} to="/profile">
            Edit Profile
          </MenuItem>
          <MenuItem onClick={handleSignOut}>
            Sign Out
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
