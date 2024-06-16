import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList.jsx";
import TodoForm from "./components/TodoForm.jsx";
import Layout from "./components/Layout.jsx";

function App() {
  return (
    <Layout>
      <TodoForm />
      <TodoList />
    </Layout>
  );
}

export default App;
