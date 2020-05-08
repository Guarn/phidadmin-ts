import { connect } from "react-redux";
import {
  toggleTodo,
  VisibilityFiltersTypes,
  ActionTypes,
} from "../actions/index";
import TodoList from "../components/TodoList";
import { TodoClass } from "../components/Classes";
import { GlobalState } from "../reducers";

const getVisibleTodos = (
  todos: TodoClass[],
  filter: VisibilityFiltersTypes
) => {
  switch (filter) {
    case VisibilityFiltersTypes.SHOW_ALL:
      return todos;
    case VisibilityFiltersTypes.SHOW_COMPLETED:
      return todos.filter((t) => t.completed);
    case VisibilityFiltersTypes.SHOW_ACTIVE:
      return todos.filter((t) => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = (state: GlobalState) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = (
  dispatch: (val: { id: number; type: ActionTypes }) => void
) => ({
  onTodoClick: (id: number) => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
