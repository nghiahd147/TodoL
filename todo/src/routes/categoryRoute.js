import express from "express";
import Category from "../models/categories.js";
import {
  createCategory,
  deleteCategory,
  getListCategory,
  updateCategory,
} from "../controllers/categoryController.js";

const router = express.Router();

router.get("/categories", getListCategory);
router.post("/categories", createCategory);
router.put("/categories/:id", updateCategory);
router.delete("/categories/:id", deleteCategory);

export default router;
