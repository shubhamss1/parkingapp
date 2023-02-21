import React, { useState } from "react";
import { Grid, Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";

export const Earning = () => {
  const [earn, setEarn] = useState(0);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const type = "earning";
    const payload = Number(earn);
    const action = { type, payload };
    dispatch(action);
  };
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <TextField
            variant="outlined"
            label="Enter Earning"
            fullWidth
            type="number"
            onChange={(e) => setEarn(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <Button onClick={handleSubmit} fullWidth variant="contained">
            Submit
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
