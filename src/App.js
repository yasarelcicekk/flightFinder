import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import Header from './components/Header';
import FlightSearch from './components/FlightSearch';
import FlightList from './components/FlightList';
import Sidebar from './components/Sidebar';
import CarRentals from './components/CarRentals';

function App() {
  return (
    <Container maxWidth="lg">
      <Header />
      <Box mt={4}>
        <Grid container spacing={4}>
          <Grid item xs={8}>
            <FlightSearch />  
            <Grid container spacing={4} mt={2}>
              <Grid item xs={8}>
                <FlightList />  
              </Grid>
              <Grid item xs={3.5}>
                <CarRentals />  
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Sidebar />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
