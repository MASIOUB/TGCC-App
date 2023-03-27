const Employee = require('../models/employeeModel');

// @route POST /employees
const createEmployee = async (req, res) => {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
        res.status(400).json({ message: 'Enter all fields please'});
        // throw new Error('Enter name of category')
    };

    const employee = await Employee.create({
        name: name,
        email: email,
        phone: phone,
    });

    res.status(200).json(employee);
}

// @route GET /employees
const getAllEmployees = async (req, res) => {
    const employees = await Employee.find();

    res.status(200).json(employees);
}

module.exports = {
    createEmployee,
    getAllEmployees,
}