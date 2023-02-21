import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";

export const ParkCharges = () => {
  const [charge, setCharge] = useState(0);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const type = "parkcharges";
    const payload = Number(charge);
    const action = { type, payload };
    dispatch(action);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <TextField
          value={charge}
          onChange={(e) => setCharge(e.target.value)}
          variant="outlined"
          label="Enter Charges"
          fullWidth
          type="number"
        />
      </Grid>
      <Grid item xs={4}>
        <Button
          sx={{ height: 55 }}
          variant="contained"
          color="warning"
          fullWidth
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};
