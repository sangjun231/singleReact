import React from "react";

const TodoItem = ({ todo, removeTodo, changeTodo }) => {
  return (
    <div>
      <div id="list" key={todo.id}>
        <div>
          <div className="title">{todo.title}</div>
          <div>{todo.body}</div>
        </div>
        <div id="button">
          <button
            onClick={() => {
              removeTodo(todo.id);
            }}
          >
            삭제하기
          </button>
          <button
            onClick={() => {
              changeTodo(todo.id);
            }}
          >
            {!todo.isDone ? "완료" : "취소"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
