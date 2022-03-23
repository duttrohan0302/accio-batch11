import {
  ADD_TODO,
  CLEAR_TODO_LIST,
  DELETE_TODO,
  TOGGLE_TODO,
} from "../actions/actions.types";

const initialState = {
    list: [{ id: 0, text: "Happy Hacking", completed: false }],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
          ...state,
          list:[
              ...state.list,{
                  id:state.list.length,text:action.text,completed:false
              }
          ]
      };
    case CLEAR_TODO_LIST:
      return {
          ...state,
          list:[]
      };
    case DELETE_TODO:
      return {
          ...state,
          list: state.list.filter(item=>item.id!==action.id)
      };
    case TOGGLE_TODO:
      return {
          ...state,
        //   list:state.list.map(todo=>
        //     todo.id===action.id ? {...todo,completed:!todo.completed}: todo)
          list: state.list.map(todo=>{
            if(todo.id===action.id){
                todo.completed = !todo.completed
            }
            return todo;
          })
      };
    default:
      return state;
  }
};

export default todos;
