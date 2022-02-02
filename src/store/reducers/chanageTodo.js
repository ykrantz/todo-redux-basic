const chanageTodoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: action.id, title: action.title }];

    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);

    case "REMOVE_LAST":
      const stateLength = state.length;
      if (stateLength > 0) {
        return state.slice(0, stateLength - 1);
      } else {
        console.log("no item to remove");
        return [];
      }

    default:
      return state;
  }
};

export default chanageTodoReducer;
