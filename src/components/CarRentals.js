import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Box, Typography, Radio, RadioGroup, FormControlLabel, FormLabel } from '@mui/material';

function CarRentals() { 
  const [sortOption, setSortOption] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');
  const [airlinesIncluded, setAirlinesIncluded] = useState('');
  const [stops, setStops] = useState('');

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleArrivalTimeChange = (event) => {
    setArrivalTime(event.target.value);
  };

  const handleAirlinesChange = (event) => {
    setAirlinesIncluded(event.target.value);
  };

  const handleStopsChange = (event) => {
    setStops(event.target.value);
  };

  return (
    <Box sx={{ mb: 4 }}>
     
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Typography variant="body1" sx={{ mr: 2 }}>
          Sort by:
        </Typography>
        <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
          <InputLabel id="sort-by-label">Sort by</InputLabel>
          <Select
            labelId="sort-by-label"
            value={sortOption}
            onChange={handleSortChange}
            label="Sort by"
          >
            <MenuItem value="lowestPrice">Lowest Price</MenuItem>
            <MenuItem value="earliestDeparture">Earliest Departure</MenuItem>
            <MenuItem value="latestArrival">Latest Arrival</MenuItem>
          </Select>
        </FormControl>
      </Box>

     
      <FormControl component="fieldset" sx={{ mb: 2 }}>
        <FormLabel component="legend">Arrival Time</FormLabel>
        <RadioGroup
          aria-labelledby="arrival-time-group-label"
          name="arrival-time-group"
          value={arrivalTime}
          onChange={handleArrivalTimeChange}
        >
          <FormControlLabel value="morning" control={<Radio />} label="5:00 AM - 11:59 AM" />
          <FormControlLabel value="afternoon" control={<Radio />} label="12:00 PM - 5:59 PM" />
        </RadioGroup>
      </FormControl>

      
      <FormControl component="fieldset" sx={{ mb: 2 }}>
        <FormLabel id="airlines-included-label">Airlines Included</FormLabel>
        <RadioGroup
          aria-labelledby="airlines-included-label"
          name="airlines-included-group"
          value={airlinesIncluded}
          onChange={handleAirlinesChange}
        >
          <FormControlLabel value="alitalia" control={<Radio />} label="Alitalia - $300" />
          <FormControlLabel value="lufthansa" control={<Radio />} label="Lufthansa - $280" />
          <FormControlLabel value="airFrance" control={<Radio />} label="Air France - $320" />
          <FormControlLabel value="brusselsAirlines" control={<Radio />} label="Brussels Airlines - $290" />
          <FormControlLabel value="siberia" control={<Radio />} label="Siberia - $310" />
        </RadioGroup>
      </FormControl>

      
      <FormControl component="fieldset">
        <FormLabel component="legend">Stops</FormLabel>
        <RadioGroup
          aria-labelledby="stops-group-label"
          name="stops-group"
          value={stops}
          onChange={handleStopsChange}
        >
          <FormControlLabel value="nonstop" control={<Radio />} label="Nonstop - $230" />
          <FormControlLabel value="1stop" control={<Radio />} label="1 Stop - $180" />
          <FormControlLabel value="2+stops" control={<Radio />} label="2+ Stops - $150" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

export default CarRentals;
