import { create } from "zustand";
import { API_ENDPOINTS } from "../config/api";
import axios from "axios";

const useCateStore = create((set) => ({
  listCategories: [],
  idCategory: null,
  categoryDetail: null,
  isLoading: false,

  setCategoryId: (id) => {
    set({ idCategory: id });
  },

  getListCategory: async () => {
    set({ isLoading: true });
    try {
      const response = await axios.get(
        API_ENDPOINTS.CATEGORIES.getListCategories
      );
      if (response.status === 200) {
        set({ isLoading: false, listCategories: response?.data?.data });
      } else {
        set({ isLoading: false });
        return null;
      }
    } catch (error) {
      set({ isLoading: false });
      console.log(error);
    }
  },

  getCategoryById: async (id) => {
    set({ isLoading: true });
    try {
      const response = await axios.get(
        API_ENDPOINTS.CATEGORIES.getCategoryById(id)
      );
      if (response.status === 200) {
        set({ isLoading: false, categoryDetail: response?.data?.data });
      } else {
        set({ isLoading: false });
        return null;
      }
    } catch (error) {
      set({ isLoading: false });
      console.log(error);
    }
  },

  createCategory: async (payload) => {
    set({ isLoading: true });
    try {
      const response = await axios.post(
        API_ENDPOINTS.CATEGORIES.createCategory,
        payload
      );
      if (response.status === 200) {
        set({ isLoading: false });
      } else {
        set({ isLoading: false });
      }
    } catch (error) {
      set({ isLoading: false });
      console.log(error);
    }
  },

  updateCategory: async (id, payload) => {
    set({ isLoading: true });
    try {
      const response = await axios.put(
        API_ENDPOINTS.CATEGORIES.updateCategory(id),
        payload
      );
      if (response.status === 200) {
        set({ isLoading: false });
      } else {
        set({ isLoading: false });
      }
    } catch (error) {
      console.log(error);
      set({ isLoading: false });
    }
  },

  deleteCategory: async (id) => {
    set({ isLoading: true });
    try {
      const response = await axios.delete(
        API_ENDPOINTS.CATEGORIES.deleteCategory(id)
      );
      if (response.status === 200) {
        set({ isLoading: false });
      } else {
        set({ isLoading: false });
      }
    } catch (error) {
      console.log(error);
      set({ isLoading: false });
    }
  },
}));

export default useCateStore;
