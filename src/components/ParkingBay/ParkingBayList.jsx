import React, { useState, useEffect } from "react";
import { Grid, TextField, Button, Card, CardContent } from "@mui/material";
import { useSelector } from "react-redux";
import { ParkingBayItem } from "./ParkingBayItem";

export const ParkingBayList = () => {
  const [noInRow, setNoInRow] = useState(4);
  const [noOfRow, setNoOfRow] = useState(3);
  const [slots, setSlots] = useState(0);
  const [data, setData] = useState([]);

  const selCharges = useSelector(
    (state) => state.parkchargesReducer.parkcharges
  );

  useEffect(() => {
    const currSlots = noInRow * noOfRow;
    setSlots(currSlots);

    const parkObj = {
      slotNo: 0,
      model: "BMW",
      vehicleNo: 0,
      chargesPerHr: selCharges,
      startDt: "",
      endDt: "",
      isActive: true,
    };

    const arrSlot = [];
    for (let i = 0; i < currSlots; i++) {
      arrSlot.push({ ...parkObj, slotNo: i + 1 });
    }
    setData(arrSlot);
  }, [noInRow, noOfRow]);
  return (
    <Grid container spacing={2} align="center">
      <Grid item xs={3}>
        <TextField
          value={noInRow}
          onChange={(e) => setNoInRow(e.target.value)}
          variant="outlined"
          label="Vehicles in a Row"
          type="number"
          fullWidth
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          value={noOfRow}
          onChange={(e) => setNoOfRow(e.target.value)}
          variant="outlined"
          label="Number of Rows"
          type="number"
          fullWidth
        />
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" fullWidth sx={{ height: 55 }}>
          Genrate Parking
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Card
          sx={{
            backgroundColor: "maroon",
            color: "white",
            fontSize: 18,
            borderRadius: 20,
          }}
        >
          <CardContent>{slots} Slots</CardContent>
        </Card>
      </Grid>
      {data.map((item) => (
        <Grid item xs={12 / noInRow}>
          <Card sx={{ backgroundColor: "coral" }}>
            <CardContent>
              <ParkingBayItem item={item} />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
