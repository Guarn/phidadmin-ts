import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
import { TodoClass } from "../components/Classes";
import { VisibilityFiltersTypes } from "../actions";

export interface GlobalState {
  todos: TodoClass[];
  visibilityFilter: VisibilityFiltersTypes;
}

export default combineReducers({
  todos,
  visibilityFilter,
});
