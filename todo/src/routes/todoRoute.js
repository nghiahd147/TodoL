import express from "express";
const router = express.Router();

router.get("/todos", (req, res) => {
  res.send("Get all todos");
});

router.post("/todos", (req, res) => {
  res.json({ message: "Create a new todo" });
});

router.put("/todos/:id", (req, res) => {
  res.json({ message: `Update todo with id ${req.params.id}` });
});

router.delete("/todos/:id", (req, res) => {
  res.json({ message: `Delete todo with id ${req.params.id}` });
});

export default router;
