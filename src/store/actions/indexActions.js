export const addTodo = (title, id) => {
  return {
    type: "ADD",
    title: title,
    id: id,
  };
};

export const removeLastTodo = () => {
  return {
    type: "REMOVE_LAST",
  };
};

export const updateInput = (input) => {
  return {
    type: "INPUT",
    input: input,
  };
};
export const removeTodo = (id) => {
  return {
    type: "REMOVE",
    id: id,
  };
};
