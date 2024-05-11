# Task Management System API

This RESTful API allows users to manage tasks. It supports creating, retrieving, updating, and deleting tasks.

## Table of Contents
1. [Setup](#setup)
2. [API Endpoints](#api-endpoints)
    - [1. Add a New Task](#1-add-a-new-task)
    - [2. Retrieve All Tasks](#2-retrieve-all-tasks)
    - [3. Retrieve a Single Task by ID](#3-retrieve-a-single-task-by-id)
    - [4. Update a Task by ID](#4-update-a-task-by-id)
    - [5. Delete a Task by ID](#5-delete-a-task-by-id)
3. [Testing](#testing)
4. [Documentation](#documentation)
5. [Evaluation Criteria](#evaluation-criteria)

## Setup

1. **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd task-management-api
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the root directory of the project and add the following:
    ```dotenv
    MONGO_URL=mongodb://localhost:27017/task_management_db
    ```

4. **Start the server:**
    ```bash
    npm start
    ```
5. **Check/run test:**
    ```bash
    npx jest
    ```

## API Endpoints

### 1. Add a New Task

- **Endpoint:** `/tasks`
- **Method:** `POST`
- **Description:** Add a new task to the database.
- **Required Parameters:**
    - `title`: Title of the task (string)
    - `description`: Description of the task (string)
    - `status`: Status of the task (string: 'pending', 'in progress', 'completed')
- **Example Request:**
    ```json
    {
        "title": "Complete project report",
        "description": "Write a detailed report on the project progress",
        "status": "pending"
    }
    ```
- **Example Response:**
    ```json
    {
        "_id": "6108d87862f37519368f0bd7",
        "title": "Complete project report",
        "description": "Write a detailed report on the project progress",
        "creationDate": "2024-08-03T12:00:00.000Z",
        "status": "pending"
    }
    ```

### 2. Retrieve All Tasks

- **Endpoint:** `/tasks`
- **Method:** `GET`
- **Description:** Retrieve all tasks from the database.
- **Example Response:**
    ```json
    [
        {
            "_id": "6108d87862f37519368f0bd7",
            "title": "Complete project report",
            "description": "Write a detailed report on the project progress",
            "creationDate": "2024-08-03T12:00:00.000Z",
            "status": "pending"
        },
        {
            "_id": "6108d8a862f37519368f0bd8",
            "title": "Review code changes",
            "description": "Review and merge the latest code changes",
            "creationDate": "2024-08-03T13:00:00.000Z",
            "status": "in progress"
        }
    ]
    ```

### 3. Retrieve a Single Task by ID

- **Endpoint:** `/tasks/:taskId`
- **Method:** `GET`
- **Description:** Retrieve a single task by its ID from the database.
- **Example Response:**
    ```json
    {
        "_id": "6108d87862f37519368f0bd7",
        "title": "Complete project report",
        "description": "Write a detailed report on the project progress",
        "creationDate": "2024-08-03T12:00:00.000Z",
        "status": "pending"
    }
    ```

### 4. Update a Task by ID

- **Endpoint:** `/tasks/:taskId`
- **Method:** `PUT`
- **Description:** Update a task by its ID in the database.
- **Required Parameters:**
    - `title`: Updated title of the task (string)
    - `description`: Updated description of the task (string)
    - `status`: Updated status of the task (string: 'pending', 'in progress', 'completed')
- **Example Request:**
    ```json
    {
        "title": "Complete project report",
        "description": "Write a detailed report on the project progress",
        "status": "completed"
    }
    ```
- **Example Response:**
    ```json
    {
        "_id": "6108d87862f37519368f0bd7",
        "title": "Complete project report",
        "description": "Write a detailed report on the project progress",
        "creationDate": "2024-08-03T12:00:00.000Z",
        "status": "completed"
    }
    ```

### 5. Delete a Task by ID

- **Endpoint:** `/tasks/:taskId`
- **Method:** `DELETE`
- **Description:** Delete a task by its ID from the database.
- **Example Request:**
    - **URL:** `/tasks/6108d87862f37519368f0bd7`
    - **Method:** `DELETE`
- **Example Response:** `200 OK`
  

## Testing

The API endpoints are thoroughly tested to ensure reliability and correctness. This includes both unit tests and integration tests.

### Unit Tests

Unit tests are used to verify the functionality of individual units or components of the application, such as functions, modules, or classes. In the context of this API, unit tests are written to test the business logic and utility functions independently of external dependencies like the database.

### Integration Tests

Integration tests ensure that different parts of the system work together correctly. In the case of this API, integration tests are used to verify the interaction between the API endpoints and the database. These tests validate the end-to-end functionality of the API, including data retrieval, manipulation, and persistence.

### Running Tests

To run the tests, execute the following command in the terminal:

```bash
npx jest
  ```

---

Thank you for using the Task Management System API! We hope it helps you effectively manage your tasks and improve productivity.
