import React, { Profiler } from "react";
import { Provider } from "react-redux";
import { Card, CardContent, dividerClasses } from "@mui/material";
import { Landing } from "./components/Landing";
import { configStore } from "./state/configStore";
import { Ludo } from "./components/Ludo";
import SnakeGame from "./components/TodoChat";
import TodoChat from "./components/TodoChat";

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
