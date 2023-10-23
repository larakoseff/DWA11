const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return Math.min(state + STEP_AMOUNT, MAX_NUMBER);
    case "SUBTRACT":
      return Math.max(state - STEP_AMOUNT, MIN_NUMBER);
    case "RESET":
      return 0;
    default:
      return state;
  }
};

export default reducer;
