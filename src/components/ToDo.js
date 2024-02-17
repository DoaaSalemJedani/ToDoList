import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

export const ToDo = ({ task, toggleComplete, deleteTodo, editTodo, importantTodo }) => {
  return (
    <div className='Todo' style={task.important ? { background: 'orange' } : {}}>
      <p onClick={() => toggleComplete(task.id)} className={` ${task.completed ? 'completed' : ''}`}>
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
        <FontAwesomeIcon icon={faExclamationTriangle} className='fa-exclamation-triangle' onClick={importantTodo} />
      </div>
    </div>
  );
};
