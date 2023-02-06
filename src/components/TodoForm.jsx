import React, { useRef, useState } from "react";
const TodoForm = (props) => {
  const [data, setData] = useState(props.edit ? props.edit.value : "");
  const inputRef = useRef(null);
  const handleChange = (e) => {
    setData(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: data,
    });
  };

  return (
    <>
      <form className="todo_form">
        {props.edit ? (
          <>
            <input
              name="text"
              placeholder="Add your task..."
              value={data}
              ref={inputRef}
              onChange={handleChange}
              className="input-edit"
            />
            <button onClick={handleSubmit} className="edit-button">
              Update
            </button>
          </>
        ) : (
          <>
            <input
              name="text"
              placeholder="Add your task..."
              value={data}
              ref={inputRef}
              onChange={handleChange}
              className="input-add"
            />
            <button onClick={handleSubmit} className="add-button">
              Add
            </button>
          </>
        )}
      </form>
    </>
  );
};

export default TodoForm;
