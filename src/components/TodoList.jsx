import React from "react";
import TodoItem from "./TodoItem";
import { toast } from "react-toastify";

const TodoList = ({ todo, setTodo }) => {
  const removeTodo = (id) => {
    toast.success("삭제되었습니다.");
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  const changeTodo = (id) => {
    toast.success("상태가 변경되었습니다.");
    setTodo(
      todo.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div>
      <div>
        <h2>Working...</h2>
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
        <h2>Done..!</h2>
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
