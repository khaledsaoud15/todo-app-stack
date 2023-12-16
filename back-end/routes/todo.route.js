const Todo = require("../models/todo.model");

const postTodo = async (req, res) => {
  const addTodo = new Todo(req.body);
  const savedTodo = await addTodo.save();

  try {
    res.status(200).json(savedTodo);
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET ALL DATA
const getAllTodos = async (req, res) => {
  const allData = await Todo.find();
  try {
    res.status(200).json(allData);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

// DELETE TODO
const deletTodo = async (req, res) => {
  const id = req.params.id;
  await Todo.findByIdAndDelete(id);
  try {
    res.status(200).json({ message: "deleted TODO" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
const updateTodo = async (req, res) => {
  const id = req.params.id;
  await Todo.findByIdAndUpdate(id, { $set: req.body });
  try {
    res.status(200).json({ message: "updatedTodo TODO" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

module.exports = { postTodo, getAllTodos, deletTodo, updateTodo };
