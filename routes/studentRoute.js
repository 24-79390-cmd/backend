
import express from 'express';
import * as studentController from '../controllers/studentControllers.js';

const studentRoutes = express.Router();

// GET - Fetch all students
studentRoutes.get('/', studentController.fetchAllStudents);

// POST - Create a student
studentRoutes.post('/', studentController.createStudent);

// PUT - Update a student
studentRoutes.put('/:id', studentController.editStudent);

// DELETE - Delete a student
studentRoutes.delete('/:id', studentController.deleteStudent);

export default studentRoutes;
