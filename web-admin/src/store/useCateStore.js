import { create } from "zustand";
import axios from "axios";

const useCateStore = create((set) => ({
  listCategories: [],
  isLoading: false,

  getListCategory: async () => {
    set({ isLoading: true });
    try {
      const response = await axios.get("http://localhost:3001/api/categories");
      if (response.status === 200) {
        set({ isLoading: false, listCategories: response?.data?.data });
      } else {
        error();
        set({ isLoading: false, listCategories: [] });
      }
    } catch (error) {
      set({ isLoading: false, listCategories: [] });
      console.log(error);
    }
  },

  createCategory: async (payload) => {
    set({ isLoading: true });
    try {
      const response = await axios.post(
        "http://localhost:3001/api/categories",
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
}));

export default useCateStore;
