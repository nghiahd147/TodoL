import express from "express";
import {
  createCategory,
  deleteCategory,
  getCategoryById,
  getListCategory,
  updateCategory,
} from "../controllers/categoryController.js";

const router = express.Router();

router.get("/categories", getListCategory);
router.post("/categories", createCategory);
router.get("/categories/:id", getCategoryById);
router.put("/categories/:id", updateCategory);
router.delete("/categories/:id", deleteCategory);

export default router;
