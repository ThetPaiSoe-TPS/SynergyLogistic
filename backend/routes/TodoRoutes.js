// backend/routes/todoRoutes.js
const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// Get all todos
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    console.log('Retrieved todos:', todos);
    res.json(todos);
  } catch (err) {
    console.error('Error getting todos:', err);
    res.status(500).json({ message: err.message });
  }
});

// Add a new todo
router.post('/', async (req, res) => {
  const todo = new Todo({
    task: req.body.task,
    completed: false,
  });

  try {
    const newTodo = await todo.save();
    console.log('Created new todo:', newTodo);
    res.status(201).json(newTodo);
  } catch (err) {
    console.error('Error creating todo:', err);
    res.status(400).json({ message: err.message });
  }
});

// Update a todo
router.put('/:id', async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedTodo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a todo
router.delete('/:id', async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Todo deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
