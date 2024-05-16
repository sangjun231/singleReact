import React from "react";
import { useState } from "react";

const TodoForm = ({ todo, setTodo }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");

  const addTodo = (event) => {
    event.preventDefault();
    if (newTitle === "" || newBody === "") {
      alert("제목과 내용를 입력하세요.");
      setNewTitle("");
      setNewBody("");
      return;
    }

    setTodo([
      ...todo,
      { id: Date.now(), title: newTitle, body: newBody, isDone: false },
    ]);
    setNewTitle("");
    setNewBody("");
  };

  return (
    <div>
      <h2>My Todo List</h2>
      <form id="submit" onSubmit={addTodo}>
        제목
        <input
          className="input"
          type="text"
          placeholder="제목"
          value={newTitle}
          onChange={(event) => setNewTitle(event.target.value)}
        />
        내용
        <input
          className="input"
          type="text"
          placeholder="내용"
          value={newBody}
          onChange={(event) => setNewBody(event.target.value)}
        />
        <button type="submit">사용자 추가</button>
      </form>
    </div>
  );
};

export default TodoForm;
