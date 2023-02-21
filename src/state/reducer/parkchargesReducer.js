export const parkchargesReducer = (state = { parkcharges: 7 }, action) => {
  switch (action.type) {
    case "parkcharges":
      return {
        ...state,
        parkcharges: action.payload,
      };
    default:
      return state;
  }
  return state;
};
