import mongoose from "mongoose";
const { Schema } = mongoose;
const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  body: String,
  status: {
    type: String,
    enum: ["active", "inActive"],
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});

export const Todo = mongoose.model("Todo", todoSchema);
