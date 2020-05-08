import React from "react";

export interface TodoProps {
  onClick: (e: React.MouseEvent) => void;
  completed: boolean;
  text: string;
}

const Todo: React.FC<TodoProps> = ({ onClick, completed, text }) => {
  return (
    <li
      onClick={onClick}
      style={{ textDecoration: completed ? "line-through" : "none" }}
    >
      {text}
    </li>
  );
};

export default Todo;
