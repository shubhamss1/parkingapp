import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Allotment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selAllocate = useSelector((state) => state.parkReducer.allocate);
  const selIndex = useSelector((state) => state.parkReducer.currveh);
  const selModel = useSelector((state) => state.parkchargesReducer.model);

  const [park, setPark] = useState(selAllocate[selIndex]);
  const [model, setModel] = useState(selModel);
  const [vehicleNo, setVehicleNo] = useState(0);

  const handleSubmit = () => {
    const startdt = new Date();
    const newPark = { ...park, model, vehicleNo, isAllocate: true, startdt };
    selAllocate[selIndex] = newPark;
    
    const type = "allocate";
    const payload = selAllocate;
    const action = { type, payload };

    dispatch(action);
    navigate("/parkbay");
  };
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <h1>Slot Number : {park.slotNo}</h1>
        </Grid>
        <Grid item xs={3}>
          <TextField
            value={model}
            onChange={(e) => setModel(e.target.value)}
            variant="outlined"
            label="Enter Model"
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            value={vehicleNo}
            onChange={(e) => setVehicleNo(e.target.value)}
            variant="outlined"
            label="Enter Vehicle Number"
            fullWidth
            type="number"
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            fullWidth
            sx={{ height: 55 }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
