import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todo, setTodo }) => {
  const removeTodo = (id) => {
    alert("삭제되었습니다.");
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  const changeTodo = (id) => {
    alert("상태가 변경되었습니다.");
    setTodo(
      todo.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div>
      <div>
        <h1>Working...</h1>
        <div className="section">
          {todo
            .filter((todo) => !todo.isDone)
            .map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                removeTodo={removeTodo}
                changeTodo={changeTodo}
              />
            ))}
        </div>
        <h1>Done..!</h1>
        <div className="section">
          {todo
            .filter((todo) => todo.isDone)
            .map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                removeTodo={removeTodo}
                changeTodo={changeTodo}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
