import React from "react";
import { Grid, Button, Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const ParkingBayItem = ({ item, index }) => {
  const selAllocate = useSelector((state) => state.parkReducer.allocate);
  const selModel = useSelector((state) => state.parkchargesReducer.model);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAllocate = () => {
    const type = "currveh";
    const payload = index;
    const action = { type, payload };
    dispatch(action);
    navigate("/allotment");
  };
  const handleLeave = () => {
    const myPark = selAllocate[index];
    myPark.isAllocate = false;
    myPark.vehicleNo = 0;
    myPark.model = selModel;

    selAllocate[index] = myPark;

    const type = "allocate";
    const payload = selAllocate;

    const action = { type, payload };
    dispatch(action);
    navigate("/");
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
        {item.isAllocate ? (
          <Button
            variant="contained"
            color="error"
            fullWidth
            onClick={handleLeave}
          >
            Leave
          </Button>
        ) : (
          <Button
            variant="contained"
            color="success"
            fullWidth
            onClick={handleAllocate}
          >
            Allocate
          </Button>
        )}
      </Grid>
    </Grid>
  );
};
