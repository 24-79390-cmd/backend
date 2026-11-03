
import * as studentService from '../services/studentServices.js';

// GET - Fetch all students
export const fetchAllStudents = async (req, res) => {
    try {
        const students = await studentService.fetchAllStudents();

        res.status(200).json(students);

    } catch (e) {
        console.error('Fetch Students Error:', e);

        res.status(500).json({
            success: false,
            message: 'Failed to fetch students'
        });
    }
};

// POST - Create a student
export const createStudent = async (req, res) => {
    const { name, srcode, program } = req.body;

    const student = { name, srcode, program };

    try {
        const studentId = await studentService.createStudent(student);

        res.status(201).json({
            success: true,
            message: studentId
        });

    } catch (e) {
        console.error('Create Student Error:', e);

        res.status(500).json({
            success: false,
            error: 'Internal Server Error'
        });
    }
};

// PUT - Update a student
export const editStudent = async (req, res) => {
    const { name, srcode, program } = req.body;
    const { id } = req.params;

    const studentId = Number(id);

    if (!Number.isInteger(studentId) || studentId <= 0) {
        return res.status(400).json({
            success: false,
            message: 'Invalid student ID'
        });
    }

    const student = {
        id: studentId,
        name,
        srcode,
        program
    };

    try {
        const updatedStudent = await studentService.updateStudent(student);

        res.status(200).json({
            success: true,
            message: updatedStudent
        });

    } catch (e) {
        console.error('Update Student Error:', e);

        res.status(500).json({
            success: false,
            error: 'Internal Server Error'
        });
    }
};

// DELETE - Delete a student
export const deleteStudent = async (req, res) => {
    const studentId = Number(req.params.id);

    if (!Number.isInteger(studentId) || studentId <= 0) {
        return res.status(400).json({
            success: false,
            message: 'Invalid student ID'
        });
    }

    try {
        const deletedStudent = await studentService.deleteStudent(studentId);

        res.status(200).json({
            success: true,
            message: deletedStudent
        });

    } catch (e) {
        console.error('Delete Student Error:', e);

        res.status(500).json({
            success: false,
            error: 'Internal Server Error'
        });
    }
};