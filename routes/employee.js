import express from "express";

import * as employeeController from '../controllers/Employee.js'

const router = express.Router();


router.get('/',employeeController.getEmployees)
router.post('/',employeeController.addEmployee)
router.put('/:id',employeeController.updateEmployee)
router.delete('/:id',employeeController.deleteEmployee)

export default router;
