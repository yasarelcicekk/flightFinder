import React, { useState } from 'react';
import { TextField, Button, Grid, Box, InputAdornment, ToggleButton, ToggleButtonGroup } from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';

function FlightSearch() {
  const [alignment, setAlignment] = useState('roundtrip');

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <Box mb={4} p={2} sx={{ maxWidth: '100%' }}>
      <form noValidate autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderTopLeftRadius: '5px',
                  borderBottomLeftRadius: '5px',
                  '& fieldset': {
                    borderRadius: '20px 0 0 20px',
                  },
                },
              }}
              label="From"
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FlightTakeoffIcon sx={{color:'darkblue'}}/>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderTopRightRadius: '5px',
                  borderBottomRightRadius: '5px',
                  '& fieldset': {
                    borderRadius: '0 20px 20px 0',
                  },
                },
              }}
              label="To"
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FlightLandIcon sx={{color:'darkblue'}}/>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderTopLeftRadius: '5px',
                  borderBottomLeftRadius: '5px',
                  '& fieldset': {
                    borderRadius: '20px 0 0 20px', 
                  },
                },
              }}
              label="Departure Date"
              type="date"
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderTopRightRadius: '5px',
                  borderBottomRightRadius: '5px',
                  '& fieldset': {
                    borderRadius: '0 20px 20px 0',
                  },
                },
              }}
              label="Return Date"
              type="date"
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ToggleButtonGroup
              sx={{
                display: 'flex',
                '& .MuiToggleButtonGroup-grouped': {
                  borderRadius: '5px',
                },
                '& .MuiToggleButton-root': {
                  padding: '4px 8px', 
                  fontSize: '0.75rem', 
                },
                '& .Mui-selected': {
                  backgroundColor: 'blue',
                  color: 'white',
                },
              }}
              value={alignment}
              exclusive
              onChange={handleAlignment}
              aria-label="yolculuk tipi"
              fullWidth
            >
              <ToggleButton value="roundtrip" aria-label="Roundtrip">
                Round Trip
              </ToggleButton>
              <ToggleButton value="oneway" aria-label="Oneway">
                One Way
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button sx={{ background: 'darkblue' }} variant="contained" color="primary" fullWidth>
              Show Flights
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default FlightSearch;
