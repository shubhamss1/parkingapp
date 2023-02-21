export const parkchargesReducer = (
  state = { parkcharges: 7, model: "BMW", parklayout: { cols: 0, rows: 0 } },
  action
) => {
  switch (action.type) {
    case "parkcharges":
      return {
        ...state,
        parkcharges: action.payload,
      };
    case "model":
      return {
        ...state,
        model: action.payload,
      };
    case "parklayout":
      return {
        ...state,
        parklayout: action.payload,
      };
    default:
      return state;
  }
  return state;
};
