import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

import { postTodo } from "../api/todo";
import { v4 as uuidv4 } from "uuid";
import todoStore from "../zustand/todoStore";

const TodoForm = () => {
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");
  const queryClient = useQueryClient();
  const { todos } = todoStore();

  const { mutate } = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTitle || !newBody) {
      if (!toast.isActive("formError")) {
        toast.error("제목과 내용을 입력해주세요.", {
          toastId: "formError",
        });
      }
      return;
    }

    const newTodo = {
      id: uuidv4(),
      title: newTitle,
      body: newBody,
      isDone: false,
    };
    mutate(newTodo);
    setNewTitle("");
    setNewBody("");
    toast.success("추가가 완료되었습니다.");
  };

  return (
    <div>
      <h1>My Todo List</h1>
      <form id="submit" onSubmit={handleSubmit}>
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
