const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Create a new task
router.post('/', taskController.createTask);

// Retrieve all tasks
router.get('/', taskController.getAllTasks);

// Retrieve a single task by its ID
router.get('/:id', taskController.getTaskById);

// Update a task by its ID
router.patch('/:id', taskController.updateTaskById);

// Delete a task by its ID
router.delete('/:id', taskController.deleteTaskById);


module.exports = router;