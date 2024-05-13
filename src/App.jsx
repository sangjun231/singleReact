import { useState } from "react";
import "./App.css";

function App() {
  const initialState = [
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Doe", age: 21 },
  ];
  const [users, setUsers] = useState(initialState);
  const [id, name, age] = users;
  // TODO: 이름과 나이를 각각 상태로 정의하세요. 초기값은 빈문자열("")입니다.
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");

  const addUser = (event) => {
    event.preventDefault();
    // TODO: 이름과 나이가 모두 입력되지 않았을 때는 alert 처리하고 함수를 종료하세요. 논리합연산자 (||) 를 이용하세요.
    if (newName === "" || newAge === "") {
      alert("이름과 나이를 입력하세요.");
      setNewName("");
      setNewAge("");
      return;
    }
    // TODO: 사용자 리스트 상태를 업데이트 하세요. spread operator 를 사용하고, 추가되는 id는 현재 시간을 밀리초 단위로 반환하는 Date.now() 를 사용하세요.
    setUsers([...users, { id: Date.now(), name: newName, age: newAge }]);
    setNewName("");
    setNewAge("");
  };

  const removeUser = (id) => {
    // TODO: filter 메소드를 사용해서 사용자 삭제 로직을 구현해 보세요.
    alert("삭제되었습니다.");
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <>
      <h1>사용자 리스트</h1>
      <form onSubmit={addUser}>
        {/* TODO: input 태그에 value, onChange 속성을 추가해서 이름과 나이의 상태와 상태변경 로직을 연결하세요 */}
        <input
          type="text"
          placeholder="이름"
          value={newName}
          onChange={(event) => setNewName(event.target.value)}
        />
        <input
          type="number"
          placeholder="나이"
          value={newAge}
          onChange={(event) => setNewAge(event.target.value)}
        />
        <button type="submit">사용자 추가</button>
      </form>
      <ul>
        {/* TODO: map 메소드를 이용해서 user 리스트를 렌더링하세요.  */}
        {/* 이름: John, 나이: 20 [삭제] 버튼이 하나의 행에 나올 수 있도록 해보세요. (hint: flex) */}
        {users.map((user) => (
          <li key={user.id} style={{ display: "flex" }}>
            {user.name}, {user.age}
            <button
              onClick={() => {
                removeUser(user.id);
              }}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
