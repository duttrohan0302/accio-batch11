import React from "react";

import { useDispatch } from "react-redux";

import { deleteTodo,toggleTodo } from "../redux/actions";

const TodoItem = ({id,text,completed}) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteTodo(id))
    }
    const handleToggle = () => {
        dispatch(toggleTodo(id))
    }

    const styled = {
        textDecoration: completed ? "line-through" : "none",
      };

      return (
        <li
            style={styled}
          className="list-group-item text-capitalize d-flex justify-content-between my-2"
        >
          <h6>
            {/* {id} : {text} */}
            {text}
    
          </h6>
          <div className="todo-icon">
            <span className="mx-2 text-success">
              <i
                className="fas fa-check-circle"
                onClick={handleToggle}
              />
            </span>
            <span className="mx-2 text-danger">
              <i
                className="fas fa-trash"
                onClick={handleDelete}
              />
            </span>
          </div>
        </li>
      );
}

export default TodoItem;