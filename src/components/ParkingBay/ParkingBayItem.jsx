import React from "react";
import { Grid, Button, Avatar } from "@mui/material";

export const ParkingBayItem = ({ item }) => {
  return (
    <Grid container spacing={2} align="center">
      <Grid item xs={12}>
        <Avatar>{item.slotNo}</Avatar>
      </Grid>
      <Grid item xs={12}>
        <h4>{item.model}</h4>
      </Grid>
      <Grid item xs={12}>
        <h4>{item.vehicleNo}</h4>
      </Grid>
      <Grid item xs={12}>
        <h4>{item.chargesPerHr} Rs./hour</h4>
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Button variant="contained" color="success" fullWidth>
          Allocate
        </Button>
      </Grid>
    </Grid>
  );
};
