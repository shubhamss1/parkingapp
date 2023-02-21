import React from "react";
import { Grid } from "@mui/material";
import { ParkCharges } from "./Settings/ParkCharges";
import { Model } from "./Settings/Model";
import { ParkLayout } from "./Settings/ParkLayout";
import { Earning } from "./Settings/Earning";

export const Settings = () => {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <ParkCharges />
        </Grid>
        <Grid item xs={3}>
          <Model />
        </Grid>
        <Grid item xs={6}>
          <ParkLayout />
        </Grid>
        <Grid item xs={4}>
          <Earning />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
