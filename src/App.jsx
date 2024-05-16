import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList.jsx";
import TodoForm from "./components/TodoForm.jsx";

function App() {
  const initialState = [
    { id: 1, title: "John", body: "hi", isDone: false },
    { id: 2, title: "Doe", body: "hello", isDone: true },
  ];
  // 자식이 상태 관리를 기본으로하되, 자식끼리 공유시에만 부모가 해야함
  const [todo, setTodo] = useState(initialState);

  return (
    <div id="wrappingBody">
      <TodoForm todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
