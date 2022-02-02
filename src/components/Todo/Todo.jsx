import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../../store/actions/indexActions';

const Todo = ({id,title}) => {

    const dispatch=useDispatch()
  return <div>
      id: {id}, title: {title}
      <button onClick={()=>dispatch(removeTodo(id))}>🗑️</button>
  </div>;
};

export default Todo;
