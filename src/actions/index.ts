let nextTodoId = 0;
export const addTodo = (text: string) => ({
  type: ActionTypes.ADD_TODO,
  id: nextTodoId++,
  text,
});

export const setVisibilityFilter = (filter: VisibilityFiltersTypes) => ({
  type: ActionTypes.SET_VISIBILITY_FILTER,
  filter,
});

export const toggleTodo = (id: number) => ({
  type: ActionTypes.TOGGLE_TODO,
  id,
});

export enum VisibilityFiltersTypes {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
}

export enum ActionTypes {
  ADD_TODO,
  SET_VISIBILITY_FILTER,
  TOGGLE_TODO,
}
