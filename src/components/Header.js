import React from 'react';
import { AppBar, Toolbar, Typography, Avatar, Button, Box } from '@mui/material';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';

function Header() {
  return (
    <AppBar 
      position="static" 
      sx={{ backgroundColor: 'white' }} 
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: 'black' }}>
        <ConnectingAirportsIcon  sx={{color:'darkblue'}}/> PLANE SCAPE
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button sx={{ color: 'black' }}>Deals</Button>
          <Button sx={{ color: 'black' }}>Discover</Button>
          <Avatar alt="Y">Y</Avatar> 
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
