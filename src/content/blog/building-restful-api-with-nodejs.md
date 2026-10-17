---
title: 'Building a RESTful API with Node.js and Express'
description: 'Learn how to build a scalable RESTful API from scratch using Node.js, Express, and best practices for production-ready applications.'
date: 2024-01-15
tags: ['Node.js', 'Express', 'API', 'Backend']
published: true
---

In this tutorial, we'll build a production-ready RESTful API using Node.js and Express. We'll cover everything from project setup to deployment.

## Prerequisites

Before we begin, make sure you have:
- Node.js installed (v18 or higher)
- npm or yarn package manager
- Basic knowledge of JavaScript

## Project Setup

Let's start by initializing a new Node.js project:

```bash
mkdir my-api
cd my-api
npm init -y
```

Install the necessary dependencies:

```bash
npm install express dotenv cors helmet morgan
npm install --save-dev nodemon typescript @types/node @types/express
```

## Basic Server Setup

Create an `index.js` file and set up a basic Express server:

```javascript
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

## Creating Routes

Let's create a simple CRUD API for managing users. First, create a routes folder:

```javascript
// routes/users.js
const express = require('express');
const router = express.Router();

// Mock data
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

// GET all users
router.get('/', (req, res) => {
  res.json(users);
});

// GET single user
router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
});

// POST new user
router.post('/', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT update user
router.put('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  res.json(user);
});

// DELETE user
router.delete('/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  users.splice(userIndex, 1);
  res.json({ message: 'User deleted' });
});

module.exports = router;
```

## Error Handling

Implement proper error handling middleware:

```javascript
// middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
};

module.exports = errorHandler;
```

## Best Practices

1. **Use environment variables** for sensitive data
2. **Implement proper authentication** (JWT, OAuth)
3. **Add input validation** using libraries like Joi or Zod
4. **Write tests** for your API endpoints
5. **Use rate limiting** to prevent abuse
6. **Implement logging** for debugging and monitoring

## Conclusion

This is just the beginning of building a production-ready API. You can extend it with database integration, authentication, caching, and much more. Check out the [GitHub repository](https://github.com/yourusername/nodejs-rest-api) for the complete code.

Happy coding!
