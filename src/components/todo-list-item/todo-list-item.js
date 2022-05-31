import React from 'react';
import './todo-list-item.css';

const  TodoListItem = ({label, done, important, onToggleDone, onDelete }) => {        
  

    let className = "todo-list-item"

    if(done) {
      className += " done "
    }
  
      if(important) {
      className += " important "
    };

  return (
    <span className={className}>
      <span
        className="todo-list-item-label"
        onClick={onToggleDone}
        >
        {label}
      </span>

      

      <div className='iconcs'>
      <button type="button"
              className="btn btn-outline-success btn-sm float-right" onClick={onToggleDone}>
        <i className="fa fa-exclamation" />
        
    </button>

      <button type="button"
      onClick={onDelete}
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-alt" />
      </button>
    </div> 

    </span>
  );
  }

 
export default  TodoListItem;



