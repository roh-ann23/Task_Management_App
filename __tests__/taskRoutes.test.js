

const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const Task = require('../src/models/Task');
require('dotenv').config();

describe('Task API Endpoints', () => {
    beforeAll(async () => {
        // Connect to a test MongoDB database
        await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    });

    afterAll(async () => {
        // Disconnect from the MongoDB database after all tests
        await mongoose.connection.close();
    });

    afterEach(async () => {
        // Clear the Task collection after each test
        await Task.deleteMany({});
    });

    it('should create a new task', async () => {
        const res = await request(app)
            .post('/tasks')
            .send({
                title: 'Test Task',
                description: 'This is a test task'
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body.title).toBe('Test Task');
    });

    it('should get all tasks', async () => {
        // Create a sample task
        await Task.create({ title: 'Task 1', description: 'Description 1' });

        const res = await request(app).get('/tasks');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toBe(1);
        expect(res.body[0].title).toBe('Task 1');
    });

    it('should get a task by ID', async () => {
        // Create a sample task
        const task = await Task.create({ title: 'Task 2', description: 'Description 2' });

        const res = await request(app).get(`/tasks/${task._id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.title).toBe('Task 2');
    });

    it('should update a task by ID', async () => {
        // Create a sample task
        const task = await Task.create({ title: 'Task 3', description: 'Description 3' });

        const res = await request(app)
            .patch(`/tasks/${task._id}`)
            .send({ title: 'Updated Task', description: 'Updated Description' });

        expect(res.statusCode).toEqual(200);
        expect(res.body.title).toBe('Updated Task');
        expect(res.body.description).toBe('Updated Description');
    });

    it('should delete a task by ID', async () => {
        // Create a sample task
        const task = await Task.create({ title: 'Task 4', description: 'Description 4' });

        const res = await request(app).delete(`/tasks/${task._id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toBe('Task deleted');
    });
});
