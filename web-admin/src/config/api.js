const API_BASE_URL = "http://localhost:3001/api";

export const API_ENDPOINTS = {
  CATEGORIES: {
    getListCategories: `${API_BASE_URL}/categories`,
    createCategory: `${API_BASE_URL}/categories`,
    getCategoryById: (id) => `${API_BASE_URL}/categories/${id}`,
    updateCategory: (id) => `${API_BASE_URL}/categories/${id}`,
    deleteCategory: (id) => `${API_BASE_URL}/categories/${id}`,
  },
  TODOS: {
    getListTodos: `${API_BASE_URL}/todos`,
    createTodo: `${API_BASE_URL}/todos`,
    updateTodo: (id) => `${API_BASE_URL}/todos/${id}`,
    deleteTodo: (id) => `${API_BASE_URL}/todos/${id}`,
  },
};
