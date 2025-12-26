import axios from "axios";
import { create } from "zustand";
import { API_ENDPOINTS } from "../config/api";

const useTodoStore = create((set) => ({
  isLoading: false,
  todos: [],
  notification: "",

  getAllTodos: async () => {
    set({ isLoading: true });
    try {
      const res = await axios.get(API_ENDPOINTS.TODOS.getListTodos);
      if (res.status === 200) {
        set({ isLoading: false, todos: res.data?.data });
      } else {
        set({ isLoading: false, todos: [] });
      }
    } catch (error) {
      console.log("error", error);
      set({ isLoading: false });
    }
  },

  changeStatusTodo: async (id, status) => {
    set({ isLoading: true });
    try {
      const res = await axios.put(API_ENDPOINTS.TODOS.updateStatusTodo(id), {
        status,
      });
      if (res.status === 200) {
        set({ isLoading: false, notification: res.data.message });
      } else {
        set({ isLoading: false, notification: res.data.message });
      }
    } catch (error) {
      console.log("error", error);
      set({ isLoading: false });
    }
  },
}));

export default useTodoStore;
