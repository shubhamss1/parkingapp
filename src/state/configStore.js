import { createStore, combineReducers } from "redux";
import { parkchargesReducer } from "./reducer/parkchargesReducer";
import { parkReducer } from "./reducer/parkReducer";

export const configStore = () => {
  const store = createStore(
    combineReducers({ parkchargesReducer, parkReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
