import React from 'react';
import { useSelector } from 'react-redux';
import Todo from '../Todo/Todo';

const Todos = () => {
    const toDoList= useSelector(state=>state.todo)
  return <div>
{toDoList.map(todo=>(
    <Todo key= {todo.id} id= {todo.id} title= {todo.title}/>
))}

  </div>;
};

export default Todos;
