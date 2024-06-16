import axios from "axios";
import { toast } from "react-toastify";

const JSON_SERVER_HOST = "http://localhost:3001/todos";

export const getTodos = async () => {
  try {
    const { data } = await axios.get(`${JSON_SERVER_HOST}`);
    return data;
  } catch (error) {
    toast.error(error);
  }
};

export const postTodo = async (newtodo) => {
  try {
    const { data } = await axios.post(`${JSON_SERVER_HOST}`, newtodo);
    return data;
  } catch (error) {
    toast.error(error);
  }
};

export const deleteTodo = async (id) => {
  try {
    const { data } = await axios.delete(`${JSON_SERVER_HOST}/${id}`);
    return data;
  } catch (error) {
    toast.error(error);
  }
};

export const toggleTodo = async (id, isDone) => {
  try {
    const { data } = await axios.patch(`${JSON_SERVER_HOST}/${id}`, {
      isDone,
    });
    return data;
  } catch (error) {
    toast.error(error);
  }
};
