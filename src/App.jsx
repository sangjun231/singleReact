import { useState } from "react";
import "./App.css";

function App() {
  const initialState = [
    { id: 1, title: "John", body: 20, isDone: false },
    { id: 2, title: "Doe", body: 21, isDone: true },
  ];
  const [todo, setTodo] = useState(initialState);
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
    <div id="wrappingBody">
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
      <div>
        <h1>Working...</h1>
        <div className="section">
          {todo.map((todo) =>
            !todo.isDone ? (
              <div id="card" key={todo.id}>
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
                    완료
                  </button>
                </div>
              </div>
            ) : null
          )}
        </div>
        <h1>Done..!</h1>
        <div className="section">
          {todo.map((todo) =>
            todo.isDone ? (
              <div id="card" key={todo.id}>
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
                    취소
                  </button>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
