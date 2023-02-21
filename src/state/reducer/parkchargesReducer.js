export const parkchargesReducer = (
  state = { parkcharges: 7, model: "BMW" },
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
    default:
      return state;
  }
  return state;
};
