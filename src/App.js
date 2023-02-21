import React, { Profiler } from "react";
import { Provider } from "react-redux";
import { Card, CardContent } from "@mui/material";
import { Landing } from "./components/Landing";
import { configStore } from "./state/configStore";

function App() {
  const currStore = configStore();
  return (
    <Provider store={currStore}>
      <Card>
        <CardContent>
          <Landing />
        </CardContent>
      </Card>
    </Provider>
  );
}

export default App;
