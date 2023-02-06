import React, { useState } from "react";
import { GrEdit } from "react-icons/gr";
import TodoForm from "./TodoForm";
import { RiDeleteBin6Fill } from "react-icons/ri";
const TodoList = ({ todos, updateTodo, removeTodo, completeTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  return (
    <div>
      {todos.map((todo, i) => (
        <>
          <div
            key={i}
            className={todo.isComplete ? "todo-complete" : "todo-container"}
          >
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
              {todo.text}
            </div>
            <div className="icons">
              <GrEdit
                onClick={() => setEdit({ id: todo.id, value: todo.text })}
                className="edit-icon"
              />
              <RiDeleteBin6Fill
                onClick={() => removeTodo(todo.id)}
                className="delete-icon"
              />
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default TodoList;
