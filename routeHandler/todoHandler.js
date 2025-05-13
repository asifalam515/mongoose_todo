import express, { Router } from "express";
import { Todo } from "../schemas/todoSchema.js";
const app = express();
const router = Router();
// get all todos
router.get("/", async (req, res) => {});

// get a todo by id
router.get("/:id", async (req, res) => {});
// post a todo
router.post("/", async (req, res) => {
  try {
    const newTodo = new Todo(req.body); // Create Todo instance
    const result = await newTodo.save(); // Save to DB
    res.status(201).json({
      message: "Todo inserted successfully",
      todo: result,
    });
  } catch (err) {
    res.status(500).json({
      error: "Server error",
      details: err.message,
    });
  }
});

// post multiple todo
router.post("/all", async (req, res) => {
  try {
    const result = await Todo.insertMany(req.body);
    res.status(201).json({
      message: "todos were created",
      todo: result,
    });
  } catch (err) {
    res.status(500).json({
      error: "Server error",
      details: err.message,
    });
  }
});

// put todo

router.put("/:id", async (req, res) => {});

// delete
router.delete("/:id", async (req, res) => {});
export default router;
