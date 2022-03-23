import { combineReducers } from "redux";

import counter from "./counter"
import todos from "./todos"

const RootReducer = combineReducers({
    todos,
    counter
})

export default RootReducer;