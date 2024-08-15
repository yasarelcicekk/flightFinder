import React from 'react';
import { Card, CardContent, Grid, Typography, Button, CardActions } from '@mui/material';

function FlightList() {
  const flights = [
    { id: 1, from: 'Milano', to: 'Madrid', price: 200, departure: '7:30 AM', arrival: '9:55 AM' },
    { id: 2, from: 'Milano', to: 'Madrid', price: 234, departure: '8:30 PM', arrival: '10:25 PM' }
    
  ];

  return (
    <Grid container spacing={2}>
      {flights.map(flight => (
        <Grid item xs={12} key={flight.id}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {flight.from} - {flight.to}
              </Typography>
              <Typography variant="body2">
                Kalkış: {flight.departure} - Varış: {flight.arrival}
              </Typography>
              <Typography variant="h6" color="primary">
                Fiyat: ${flight.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button  sx={{background: 'darkblue'}} variant="contained" color="primary" fullWidth>
              Select Flight
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default FlightList;
