import React from "react";
import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const NavBarItem = ({ item }) => {
  return (
    <Grid item xs={item.xs}>
      <Link to={item.path}>
        <Button fullWidth variant="contained" color="secondary">
          {item.label}
        </Button>
      </Link>
    </Grid>
  );
};
