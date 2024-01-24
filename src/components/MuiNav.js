import React, { useState } from 'react'
import { AppBar, Toolbar, Button, Stack, Avatar, Menu, MenuItem, IconButton, Divider, ListItemIcon, Drawer } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import '@fontsource/roboto/400.css';

export const MuiNav = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <React.Fragment>
    <AppBar sx={{ backgroundColor: 'white' }}>
      <Toolbar sx={{ flexDirection: { xs: 'row', sm: 'row' }, justifyContent: 'space-between', paddingTop: { xs: '0px', sm: '10px' }, paddingBottom: { xs: '0px', sm: '10px' } }}>
      <IconButton
            color="inherit"
            onClick={handleDrawerOpen}
            sx={{
              display: {  xs: 'block', sm: 'block',  lg: 'none', color: 'black'},
            }}
          >
            <MenuIcon />
          </IconButton>
        <Button
          variant="text"
          sx={{
            color: '#3d00b7',
            fontFamily: 'roboto',
            fontSize: { xs: '20px', sm: '24px' },
            fontWeight: 'bold',
            textTransform: 'none',
            '&:hover': { backgroundColor: 'white' },
          }}
          disableRipple
        >
          <img 
            src='logo.png'
            alt='Logo'
            style={{ marginRight: '10px', width: '40px', height: '40px' }}
          />
          BitBrush Studio
        </Button>
        
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="space-between"
          alignItems={{ xs: 'center', sm: 'center' }}
          sx={{ flexGrow: 1, marginLeft: { xs: '10px', sm: '50px' } }}
        >
           <Stack
              direction="row"
              spacing={3}
              mb={{ xs: '10px', sm: '0' }}
              sx={{
                display: {xs: 'none', sm: 'none', lg: 'flex' }, // Hide on small screens, show on large screens
              }}
        >   
              <Button color="inherit" sx={{ color: 'black', fontFamily: 'roboto', textTransform: 'none', fontSize: '18px', fontWeight: 'bold' }}>Marketplace</Button>
              <Button color="inherit" sx={{ color: 'black', fontFamily: 'roboto', textTransform: 'none', fontSize: '18px', fontWeight: 'bold' }}>Collections</Button>
              <Button color="inherit" sx={{ color: 'black', fontFamily: 'roboto', textTransform: 'none', fontSize: '18px', fontWeight: 'bold' }}>Ranking</Button>
              </Stack>
          
          <Stack direction="row" spacing={3} style={{ marginRight: '20px', alignItems: 'center' }}
            >
            <Button
              color="inherit"
              sx={{
                backgroundColor: '#3d00b7',
                color: 'white',
                fontFamily: 'roboto',
                fontSize: '14px',
                borderRadius: '40px',
                fontWeight: 'bold',
                '&:hover': { backgroundColor: '#000080' },
                width: '180px',
                height: '40px',
                display: {xs: 'none', sm: 'none', lg: 'flex' }
              }}
            >
              Upload
            </Button>
            <Button
              color="inherit"
              sx={{
                backgroundColor: 'white',
                color: '#3d00b7',
                fontSize: '14px',
                fontFamily: 'roboto',
                border: '2px solid #3d00b7',
                borderRadius: '40px',
                fontWeight: 'bold',
                width: '180px',
                height: '40px',
                display: {xs: 'none', sm: 'none', lg: 'flex' }
              }}
            >
              Connect Wallet
            </Button>
            <IconButton
              color="inherit"
              onClick={handleClick}
              sx={{ backgroundColor: 'white', color: '#3d00b7' }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <AccountCircleIcon sx={{ fontSize: { xs: 50, sm: 50 } }} />
            </IconButton>
            
            {/* Account Menu */}
            <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <FavoriteIcon fontSize="small" />
          </ListItemIcon>
          My Favorites
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Manage Account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
   {/* Drawer for small screens */}
<Drawer anchor="top" open={drawerOpen} onClose={handleDrawerClose}>
  {/* Centered container for menu items */}
  <div
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      textAlign: 'center', // Center text horizontally
    }}
  >
    {/* Add your menu items here */}
    <MenuItem color="inherit" sx={{ color: 'black', fontFamily: 'roboto', textTransform: 'none', fontSize: '18px', fontWeight: 'bold', textAlign: 'center' }} onClick={handleDrawerClose}>Marketplace</MenuItem>
    <MenuItem color="inherit" sx={{ color: 'black', fontFamily: 'roboto', textTransform: 'none', fontSize: '18px', fontWeight: 'bold', textAlign: 'center' }} onClick={handleDrawerClose}>Collections</MenuItem>
    <MenuItem color="inherit" sx={{ color: 'black', fontFamily: 'roboto', textTransform: 'none', fontSize: '18px', fontWeight: 'bold', textAlign: 'center' }} onClick={handleDrawerClose}>Ranking</MenuItem>
    <Divider />
    <MenuItem color="inherit"
      sx={{
        backgroundColor: '#3d00b7',
        color: 'white',
        fontFamily: 'roboto',
        fontSize: '14px',
        borderRadius: '40px',
        fontWeight: 'bold',
        '&:hover': { backgroundColor: '#000080' },
        width: '180px',
        height: '40px',
        textAlign: 'center',
      }} onClick={handleDrawerClose}>Upload</MenuItem>
    <br />
    <MenuItem color="inherit"
      sx={{
        backgroundColor: 'white',
        color: '#3d00b7',
        fontSize: '14px',
        fontFamily: 'roboto',
        border: '2px solid #3d00b7',
        borderRadius: '40px',
        fontWeight: 'bold',
        width: '180px',
        height: '40px',
      }} onClick={handleDrawerClose}>Connect Wallet</MenuItem>
  </div>

  {/* Close button */}
  <div style={{ marginBottom: 'auto', marginLeft: 'auto' }}>
    <IconButton onClick={handleDrawerClose} color="inherit">
      <CloseIcon />
    </IconButton>
  </div>
</Drawer>

    </React.Fragment>
  );
};
