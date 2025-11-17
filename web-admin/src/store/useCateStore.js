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
        set({ isLoading: false, listCategories: [] });
      }
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useCateStore;
