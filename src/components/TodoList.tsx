import React from "react";
import Todo from "./Todo";
import { TodoClass } from "./Classes";

export interface TodoListProps {
  todos: TodoClass[];
  onTodoClick: (id: number) => void;
}

const TodoList = ({ todos, onTodoClick }: TodoListProps) => (
  <ul>
    {todos.map((todo) => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
);

export default TodoList;
