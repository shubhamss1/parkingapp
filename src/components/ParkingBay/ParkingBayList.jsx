import React, { useState, useEffect } from "react";
import { Grid, TextField, Button, Card, CardContent } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { ParkingBayItem } from "./ParkingBayItem";

export const ParkingBayList = () => {
  const selParklayout = useSelector(
    (state) => state.parkchargesReducer.parklayout
  );
  const selAllocate = useSelector((state) => state.parkReducer.allocate);

  const dispatch = useDispatch();
  const [noInRow, setNoInRow] = useState(selParklayout.cols);
  const [noOfRow, setNoOfRow] = useState(selParklayout.rows);
  const [slots, setSlots] = useState(selAllocate.length);
  const [data, setData] = useState(selAllocate);

  const selCharges = useSelector(
    (state) => state.parkchargesReducer.parkcharges
  );

  useEffect(() => {
    if (data.length == 0) {
      const currSlots = noInRow * noOfRow;
      setSlots(currSlots);

      const parkObj = {
        slotNo: 0,
        model: "BMW",
        vehicleNo: 0,
        chargesPerHr: selCharges,
        startDt: "",
        endDt: "",
        isAllocate: false,
        isActive: true,
      };

      const arrSlot = [];
      for (let i = 0; i < currSlots; i++) {
        arrSlot.push({ ...parkObj, slotNo: i + 1 });
      }
      setData(arrSlot);
      const type = "allocate";
      const payload = arrSlot;
      const action = { type, payload };
      dispatch(action);
    }
  }, []);

  return (
    <Grid container spacing={2} align="center">
      <Grid item xs={4}>
        <TextField
          value={noInRow}
          onChange={(e) => setNoInRow(e.target.value)}
          variant="outlined"
          label="Vehicles in a Row"
          type="number"
          fullWidth
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          value={noOfRow}
          onChange={(e) => setNoOfRow(e.target.value)}
          variant="outlined"
          label="Number of Rows"
          type="number"
          fullWidth
        />
      </Grid>

      <Grid item xs={4}>
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
      {data.map((item, index) => (
        <Grid item xs={12 / noInRow}>
          <Card sx={{ backgroundColor: item.isAllocate ? "#bfff80" : "coral" }}>
            <CardContent>
              <ParkingBayItem item={item} index={index} />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
