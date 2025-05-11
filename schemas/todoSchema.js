import mongoose from "mongoose";
const { Schema } = mongoose;
const todoSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number,
  },
});

const Todos = mongoose.model("Todos", todoSchema);
