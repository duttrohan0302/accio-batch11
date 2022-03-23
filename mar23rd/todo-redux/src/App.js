import React from "react";
import {Provider} from "react-redux";
import {createStore} from "redux";

import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import Counter from "./components/Counter";
import RootReducer from "./redux/reducers/index"

import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";

const store = createStore(RootReducer)
function App() {
  return (
    <Provider store={store} >
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <Counter />
            <TodoInput />
            <TodoList />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;