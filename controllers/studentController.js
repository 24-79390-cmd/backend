import * as studentService from '../services/studentServices.js';

export const fetchAllStudents = async (req, res) => {
  const students = await studentService.fetchAllStudents();
  res.status(200).json(students);
};