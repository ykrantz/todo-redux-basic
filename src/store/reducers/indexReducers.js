import chanageTodoReducer from "./chanageTodo";
import { combineReducers } from "redux";
import InputTodoReducer from "./InputTodoReducer";

const allReducers = combineReducers({
  todo: chanageTodoReducer,
  input: InputTodoReducer,
});

export default allReducers;
