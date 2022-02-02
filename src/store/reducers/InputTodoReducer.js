const InputTodoReducer = (state = "", action) => {
  switch (action.type) {
    case "INPUT":
      return action.input;
    default:
      return state;
  }
  // if (action.type === "INPUT") {
  //   return action.input;
  // }
};
export default InputTodoReducer;
