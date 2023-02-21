import React, { useState } from "react";
import { Grid, Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";

export const Model = () => {
  const [model, setModel] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const type = "model";
    const payload = model;
    const action = { type, payload };
    dispatch(action);
  };
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField
            variant="outlined"
            fullWidth
            label="Enter Model"
            onChange={(e) => setModel(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" fullWidth onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
