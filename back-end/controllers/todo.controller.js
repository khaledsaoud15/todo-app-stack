const {
  postTodo,
  getAllTodos,
  deletTodo,
  updateTodo,
} = require("../routes/todo.route");

const router = require("express").Router();

router.post("/todos", postTodo);
router.get("/allTodos", getAllTodos);
router.delete("/todos/:id", deletTodo);
router.put("/todos/update/:id", updateTodo);

module.exports = router;
