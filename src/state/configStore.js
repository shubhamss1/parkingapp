import { createStore, combineReducers } from "redux";
import { parkchargesReducer } from "./reducer/parkchargesReducer";

export const configStore = () => {
  const store = createStore(
    combineReducers({ parkchargesReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
