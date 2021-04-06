import { combineReducers } from "redux";
import ideasReducer from "./ideasReducer";
import todosReducer from "./todosReducer";

export default combineReducers({ todosReducer, ideasReducer });
