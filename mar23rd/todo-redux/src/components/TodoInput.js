import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

const TodoInput = () =>{

    const [text,setText] = useState("")

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text!==""){
            dispatch(addTodo(text))
            setText("")
        }
    }
    return (
        <div className="card card-body my-3">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text bg-primary text-white">
                  <i className="fas fa-book" />
                </div>
              </div>
              <input
                type="text"
                className="form-control text-capitalize"
                placeholder="add a todo item"
                name="todo"
                value={text}
                onChange={event => setText(event.target.value)}
              />
            </div>
            <button
              className="btn btn-block btn-primary mt-3"
              onClick={handleSubmit}
            >
              add item
            </button>
          </form>
        </div>
      );
}

export default TodoInput;