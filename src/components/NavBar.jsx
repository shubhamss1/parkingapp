import React, { useState } from "react";
import { Grid } from "@mui/material";
import { NavBarItem } from "./NavBarItem";

export const NavBar = () => {
  const [data] = useState([
    {
      xs: 1,
      path: "/",
      label: "Home",
    },
    {
      xs: 2,
      path: "/parkbay",
      label: "Parking Bay",
    },
    {
      xs: 1,
      path: "/settings",
      label: "Settings",
    },
  ]);
  return (
    <Grid container spacing={1} sx={{ marginBottom: 3 }}>
      {data.map((item) => (
        <NavBarItem item={item} />
      ))}
    </Grid>
  );
};
