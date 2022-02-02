import React, { useContext, useRef } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addTodo, removeLastTodo, removeTodo, updateInput } from '../../store/actions/indexActions';
import Todos from '../Todos/Todos';

const Body = () => {
    const id=useRef(0)
    const toDoList=useSelector(state=>state.todo)
    const dispatch=useDispatch()
    const inputTodo=useSelector(state=>state.input)
  return <div>
    <input type="text" value={inputTodo} onChange={(e)=>dispatch(updateInput(e.target.value))} />
        <button onClick={()=>{
            id.current=id.current+1
            dispatch(addTodo(inputTodo,id.current))}
        }
            >add to do</button>
      <button onClick={()=>dispatch(removeLastTodo())}>remove last to do</button>
      <Todos/>
  </div>;
};

export default Body;
