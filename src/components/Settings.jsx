import React from "react";
import { Grid } from "@mui/material";
import { ParkCharges } from "./Settings/ParkCharges";

export const Settings = () => {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <ParkCharges />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
