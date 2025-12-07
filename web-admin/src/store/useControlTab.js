import { create } from "zustand";

const useControlTab = create((set) => ({
  isTab: null,
  handleTab: (key) => {
    set({ isTab: key });
  },
}));

export default useControlTab;
