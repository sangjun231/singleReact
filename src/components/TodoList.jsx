import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import TodoItem from "./TodoItem";
import { toast } from "react-toastify";
import todoStore from "../zustand/todoStore";
import { deleteTodo, getTodos, toggleTodo } from "../api/todo";
import { useEffect } from "react";

const TodoList = () => {
  const queryClient = useQueryClient();
  const { setTodos } = todoStore();

  const {
    data: todos = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
    onSuccess: (data) => {
      setTodos(data);
    },
  });

  const mutationDelete = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  const mutationToggle = useMutation({
    mutationFn: toggleTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  const handleDelete = (id) => {
    toast.success("삭제가 완료되었습니다.");
    mutationDelete.mutate(id);
  };

  const handleToggle = (id, isDone) => {
    toast.success("상태가 변경되었습니다.");
    mutationToggle.mutate({ id, isDone });
  };

  return (
    <div>
      <div>
        <h2>Working...</h2>
        <div className="section">
          {todos
            .filter((todo) => !todo.isDone)
            .map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                removeTodo={handleDelete}
                changeTodo={() => {
                  handleToggle(todo.id, !todo.isDone);
                }}
              />
            ))}
        </div>
        <h2>Done..!</h2>
        <div className="section">
          {todos
            .filter((todo) => todo.isDone)
            .map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                removeTodo={handleDelete}
                changeTodo={() => {
                  handleToggle(todo.id, !todo.isDone);
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
