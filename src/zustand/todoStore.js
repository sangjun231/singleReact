import { create } from "zustand";

const todoStore = create((set) => ({
  todos: [],
  setTodos: (todos) => set({ todos }),
}));

export default todoStore;
