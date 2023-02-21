export const parkReducer = (
  state = { currveh: 0, earning: 0, allocate: [] },
  action
) => {
  switch (action.type) {
    case "allocate":
      return {
        ...state,
        allocate: action.payload,
      };
    case "earning":
      return {
        ...state,
        earning: action.payload,
      };
    case "currveh":
      return {
        ...state,
        currveh: action.payload,
      };
  }
  return state;
};
