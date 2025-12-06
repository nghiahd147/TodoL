import express from "express";
import {
  getAllTags,
  createTag,
  updateTag,
  deleteTag,
} from "../controllers/tagController.js";

const router = express.Router();

router.get("/tags", getAllTags);
router.post("/tag", createTag);
router.put("/tag/:id", updateTag);
router.delete("/tag/:id", deleteTag);

export default router;
