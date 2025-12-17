import { create } from "zustand";
import { API_ENDPOINTS } from "../config/api";
import axios from "axios";

const useTagStore = create((set) => ({
  isLoading: false,
  listTags: [],

  getListTags: async () => {
    set({ isLoading: true });
    try {
      const response = await axios.get(API_ENDPOINTS.TAG.getListTags);
      if (response.status === 200) {
        set({ isLoading: false, listTags: response.data.data });
      } else {
        set({ isLoading: false, listTags: [] });
      }
    } catch (error) {
      console.log("error", error.message);
      set({ isLoading: false });
    }
  },

  createTag: async (value) => {
    set({ isLoading: true });
    try {
      const response = await axios.post(API_ENDPOINTS.TAG.createTag, value);
      if (response.status === 200) {
        set({ isLoading: false });
      } else {
        set({ isLoading: false });
      }
    } catch (error) {
      console.log("error", error.message);
      set({ isLoading: false });
    }
  },

  deleteTag: async (id) => {
    set({ isLoading: true });
    try {
      await axios.delete(API_ENDPOINTS.TAG.deleteTag(id));
      set({ isLoading: false });
    } catch (error) {
      console.log("error", error.message);
      set({ isLoading: false });
    }
  },
}));

export default useTagStore;
