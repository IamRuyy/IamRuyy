import React from 'react';
import { BottomNavigation, Container, Grid, Typography, BottomNavigationAction, Box, List, ListItemButton, TextField, Button, InputAdornment } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import '@fontsource/roboto/400.css';

export const MuiFooter = () => {
  return (
    <BottomNavigation sx={{ width: '100%', position: 'absolute', bottom: 0, backgroundColor: 'white' }}>
       <Container maxWidth="xl">
      <Box  sx={{ padding: '20px', marginTop: '20px', width: '100%', maxWidth: 'none' }}>
        <Grid container spacing={10}>
          {/* Part 1 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ color: 'black', fontFamily: 'roboto', fontSize: '24px', fontWeight: 'bold', textTransform: 'none'}}>
            BitBrush Studio
            </Typography>
            <Typography variant="body2" sx={{ color: '#565656', fontFamily: 'roboto'}}>
              The world's first and largest digital marketplace for crypto collectibles
              and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.
            </Typography>
            <BottomNavigationAction label="Facebook" icon={<FacebookIcon />} />
            <BottomNavigationAction label="Twitter" icon={<TwitterIcon />} />
          </Grid>

          {/* Part 2 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ color: 'black', fontFamily: 'roboto', fontSize: '18px', fontWeight: 'bold', textTransform: 'none'}}>
              Marketplace
            </Typography>
            <Typography variant="body2">
            <List>
          <ListItemButton disableRipple sx={{ '&:hover': { backgroundColor: 'transparent' }, color: '#3d3d3d', fontFamily: 'roboto' }}>
            All NFTs
          </ListItemButton>
          <ListItemButton disableRipple sx={{ '&:hover': { backgroundColor: 'transparent' }, color: '#3d3d3d', fontFamily: 'roboto' }}>
            Painting & Drawing
          </ListItemButton>
          <ListItemButton disableRipple sx={{ '&:hover': { backgroundColor: 'transparent' }, color: '#3d3d3d', fontFamily: 'roboto' }}>
            Vector Art
          </ListItemButton>
          <ListItemButton disableRipple sx={{ '&:hover': { backgroundColor: 'transparent' }, color: '#3d3d3d', fontFamily: 'roboto'  }}>
            3D Model
          </ListItemButton>
          <ListItemButton disableRipple sx={{ '&:hover': { backgroundColor: 'transparent' }, color: '#3d3d3d', fontFamily: 'roboto' }}>
            Pixel Art
          </ListItemButton>
          <ListItemButton disableRipple sx={{ '&:hover': { backgroundColor: 'transparent' }, color: '#3d3d3d', fontFamily: 'roboto' }}>
            2D Animation
          </ListItemButton>
          <ListItemButton disableRipple sx={{ '&:hover': { backgroundColor: 'transparent' }, color: '#3d3d3d', fontFamily: 'roboto' }}>
            3D Animation
          </ListItemButton>
        </List>
            </Typography>
          </Grid>

          {/* Part 3 */}
          <Grid item xs={12} sm={6} md={3}>
      <Typography variant="h6" gutterBottom sx={{ color: 'black', fontFamily: 'roboto', fontSize: '18px', fontWeight: 'bold', textTransform: 'none'}}>
        My Account
      </Typography>
      <Typography variant="body2">
        <List>
          <ListItemButton disableRipple sx={{ '&:hover': { backgroundColor: 'transparent' }, color: '#3d3d3d', fontFamily: 'roboto' }}>
            Profile
          </ListItemButton>
          <ListItemButton disableRipple sx={{ '&:hover': { backgroundColor: 'transparent' }, color: '#3d3d3d', fontFamily: 'roboto' }}>
            Favorite
          </ListItemButton>
          <ListItemButton disableRipple sx={{ '&:hover': { backgroundColor: 'transparent' }, color: '#3d3d3d', fontFamily: 'roboto' }}>
            My Collections
          </ListItemButton>
          <ListItemButton disableRipple sx={{ '&:hover': { backgroundColor: 'transparent' }, color: '#3d3d3d', fontFamily: 'roboto' }}>
            Settings
          </ListItemButton>
        </List>
      </Typography>
    </Grid>

          {/* Part 4 */}
          <Grid item xs={12} sm={6} md={3}>
      <Typography variant="h6" gutterBottom sx={{ color: 'black', fontFamily: 'roboto', fontSize: '18px', fontWeight: 'bold', textTransform: 'none'}}>
        Stay In The Loop
      </Typography>
      <Typography variant="body2" sx={{ color: '#3d3d3d', fontFamily: 'roboto'}}>
        Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.
      </Typography>
      <TextField
        id="email"
        label="Enter your email"
        variant="outlined"
        size="medium"
        margin="normal"
        InputProps={{
            sx: { borderRadius: '30px' },
          endAdornment: (
            <InputAdornment position="end">
              <Button variant="contained" sx={{
                backgroundColor: '#3d00b7',
                color: 'white',
                fontFamily: 'roboto',
                fontSize: '10px',
                borderRadius: '20px',
                fontWeight: 'bold',
                '&:hover': { backgroundColor: '#000080' },
                width: '120px',
                height: '40px',
              }}>
                Subscribe
              </Button>
            </InputAdornment>
          ),
        }}
        InputLabelProps={{ shrink: true, fontSize: '12px' }}
      />
    </Grid>
        </Grid>
      </Box>
    </Container>
    </BottomNavigation>
  );
};
