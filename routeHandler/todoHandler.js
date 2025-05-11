import express, { Router } from "express";
const app = express();
const router = Router();
// get all todos
router.get("/", async (req, res) => {});

// get a todo by id
router.get("/:id", async (req, res) => {});
// post todo
router.post("/", async (req, res) => {});
// post multiple todo
router.post("/all", async (req, res) => {});

// put todo

router.put("/:id", async (req, res) => {});

// delete
router.delete("/:id", async (req, res) => {});
export default router;
