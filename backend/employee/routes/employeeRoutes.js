const express = require('express');
const router = express.Router();
const { createEmployee, getAllEmployees } = require('../controllers/employeeController');

router.route('/').post(createEmployee).get(getAllEmployees);

module.exports = router;
