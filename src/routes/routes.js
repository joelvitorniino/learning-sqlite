const express = require('express');
const routes = express.Router();
const db = require('../database/index');
const RegisterController = require('../controllers/RegisterController');
const Register = new RegisterController();

routes.get('/register', (req, res) => Register.index(db, req, res));
routes.get('/register/:id', (req, res) => Register.findById(db, req, res));
routes.post('/register', (req, res) => Register.store(db, req, res));
routes.put('/register/:id', (req, res) => Register.update(db, req, res));
routes.delete('/register/:id', (req, res) => Register.delete(db, req, res));

module.exports = routes;