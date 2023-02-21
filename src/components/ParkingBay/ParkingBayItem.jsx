import React from "react";
import { Grid, Button, Avatar } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const ParkingBayItem = ({ item, index }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAllocate = () => {
    const type = "currveh";
    const payload = index;
    const action = { type, payload };
    dispatch(action);
    navigate("/allotment");
  };
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
        <Button
          variant="contained"
          color="success"
          fullWidth
          onClick={handleAllocate}
        >
          Allocate
        </Button>
      </Grid>
    </Grid>
  );
};
