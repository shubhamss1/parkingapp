import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

export const ParkLayout = () => {
  const selParklayout = useSelector(
    (state) => state.parkchargesReducer.parklayout
  );
  const [cols, setCols] = useState(selParklayout.cols);
  const [rows, setRows] = useState(selParklayout.rows);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const type = "parklayout";
    const payload = { cols, rows };
    const action = { type, payload };
    dispatch(action);
  };
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <TextField
            value={cols}
            onChange={(e) => setCols(Number(e.target.value))}
            variant="outlined"
            label="Columns"
            fullWidth
            type="number"
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            value={rows}
            onChange={(e) => setRows(Number(e.target.value))}
            variant="outlined"
            label="Rows"
            fullWidth
            type="number"
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            onClick={handleSubmit}
            fullWidth
            sx={{ height: 55 }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
