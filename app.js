const express = require('express');
const connectDB = require('./config/db');
const taskRoutes = require('./src/routes/taskRoutes');

const app = express();

connectDB();

app.use(express.json());

app.use('/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app;