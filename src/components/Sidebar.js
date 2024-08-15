import React from 'react';
import { Card, CardMedia, Typography, Grid, Box } from '@mui/material';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import ApartmentIcon from '@mui/icons-material/Apartment';
import DeckIcon from '@mui/icons-material/Deck';
import carRentals from '../image/car-rentals.jpeg';
import hotel from '../image/hotels.jpeg';
import travel from '../image/travel-packages.jpeg';

function Sidebar() {
  const items = [
    { id: 1, title: 'Car Rentals', image: carRentals, icon: <DriveEtaIcon sx={{ color: 'white'}} /> },
    { id: 2, title: 'Hotels', image: hotel , icon: <ApartmentIcon sx={{ color: 'white'}} /> },
    { id: 3, title: 'Travel Packages', image: travel , icon: <DeckIcon sx={{ color: 'white'}} /> }
  ];

  return (
    <Grid container spacing={2}>
      {items.map(item => (
        <Grid item xs={12} key={item.id}>
          <Card sx={{ 
            maxWidth: 300,
            width: '100%',
            margin: 'auto',
            borderRadius: 2,
            position: 'relative', 
            overflow: 'hidden', 
          }}>
            <CardMedia
              component="img"
              height="200"
              sx={{
                objectFit: 'cover',
                width: '100%',
              }}
              image={item.image}
              alt={item.title}
            />
            <Typography
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: 2,
                background: 'rgba(0, 0, 0, 0.3)', 
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center', 
                justifyContent: 'center',
                gap: 1,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {item.icon} 
                {item.title}
              </Box>
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Sidebar;
