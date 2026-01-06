import axios from "axios";
import { create } from "zustand";
import { API_ENDPOINTS } from "../config/api";

const useTodoStore = create((set) => ({
  isLoading: false,
  todos: [],
  idTodo: null,
  todoDetail: null,
  notification: "",

  setIdTodo: (id) => {
    set({ idTodo: id });
  },

  getAllTodos: async (params) => {
    set({ isLoading: true });
    console.log(params);
    try {
      const res = await axios.get(API_ENDPOINTS.TODOS.getListTodos, { params });
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

  getTodoDetail: async (id) => {
    set({ isLoading: true });
    try {
      const res = await axios.get(API_ENDPOINTS.TODOS.getTodoDetail(id));
      if (res.status === 200) {
        set({ isLoading: false, todoDetail: res?.data?.data });
      } else {
        set({ isLoading: false, todoDetail: null });
      }
    } catch (error) {
      console.log("error", error);
      set({ isLoading: false });
    }
  },

  createTodo: async (data) => {
    set({ isLoading: true });
    try {
      const res = await axios.post(API_ENDPOINTS.TODOS.createTodo, data);
      if (res.status === 200) {
        set({ isLoading: false, notification: res.data?.message });
      } else {
        set({ isLoading: false, notification: res.data?.message });
      }
    } catch (error) {
      console.log("error", error);
      set({ isLoading: false, notification: error });
    }
  },

  updateTodo: async (id, payload) => {
    set({ isLoading: true });
    try {
      const res = await axios.put(API_ENDPOINTS.TODOS.updateTodo(id), payload);
      if (res.status === 200) {
        set({ isLoading: false, notification: res?.data?.message });
      } else {
        set({ isLoading: false, notification: res?.data?.message });
      }
    } catch (error) {
      console.log("error", error);
      set({ isLoading: false, notification: error });
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

  deleteTodo: async (id) => {
    set({ isLoading: true });
    try {
      await axios.delete(API_ENDPOINTS.TODOS.deleteTodo(id));
      set({ isLoading: false });
    } catch (error) {
      console.log("error", error);
      set({ isLoading: false });
    }
  },
}));

export default useTodoStore;
