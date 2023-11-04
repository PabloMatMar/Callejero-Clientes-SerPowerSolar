const express = require('express');
const clientsOfEmployeControllers = require('../controllers/clientsOfEmployeControllers');
const userClientsRouter = express.Router();

userClientsRouter.get('/?', clientsOfEmployeControllers.getAllClients);

module.exports = userClientsRouter