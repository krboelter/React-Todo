import React from 'react';
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants';

const TodoList = (props) => {
    return(
        <div
            key={props.todoList.id}
            className={`todo${props.todoList.completed ? ' completed' : ""}`}
            onClick={props.onClick}
        >{props.todoList.task}
        </div>
    )
}   

export default TodoList