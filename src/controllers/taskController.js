// controllers/taskController.js
const Task = require('../models/Task');

// Create a new task
async function createTask(req, res) {
    try {
        const task = new Task(req.body);
            if(!task.title ||!task.description){
                return res.status(400).json({ message: 'Title and description are required' });
            }
        await task.save();
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

// Retrieve all tasks
async function getAllTasks(req, res) {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// Retrieve a single task by its ID
async function getTaskById(req, res) {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json(task);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// Update a task by its ID
async function updateTaskById(req, res) {
    try {
        let task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        if (req.body.title != null) {
            task.title = req.body.title;
        }
        if (req.body.description != null) {
            task.description = req.body.description;
        }
        if (req.body.status != null) {
            task.status = req.body.status;
        }
        task = await task.save();
        res.json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


// Delete a task by its ID
async function deleteTaskById(req, res) {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: 'Task deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTaskById,
    deleteTaskById
};
