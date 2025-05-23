import express, { Router } from "express";
import { Todo } from "../schemas/todoSchema.js";
const app = express();
const router = Router();
// get all todos
router.get("/", async (req, res) => {
  const result = await Todo.find();
  if (result.length == 0) {
    return res.status(500).json({ message: "no data found" });
  }
  res.json({
    data: result,
    message: "all todos found",
  });
});

// get a todo by id
router.get("/:id", async (req, res) => {
  const result = await Todo.findById(req.params.id);

  if (result.length == 0) {
    return res.status(500).json({ message: "no data found" });
  }
  console.log(result.getTitleName());
  res.json({
    data: result,
    message: "single data found",
  });
});
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

router.put("/:id", async (req, res) => {
  const updatedDoc = req.body;
  try {
    const result = await Todo.findByIdAndUpdate(
      { _id: req.params.id },
      updatedDoc,
      { new: true }
    );
    if (result.modifiedCount === 0) {
      return res
        .status(404)
        .json({ message: "No document updated. ID might be invalid." });
    }
    res.status(200).json({
      message: "Todo updated successfully",
      result,
    });
  } catch (err) {
    res.status(500).json({
      error: "Server error during update",
      details: err.message,
    });
  }
});

// delete
router.delete("/:id", async (req, res) => {
  const result = await Todo.deleteOne({ _id: req.params.id });
  res.json({
    message: "Deleted ",
  });
});

export default router;
