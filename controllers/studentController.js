import Student from '../models/student.js';

export const createStudent = async (req, res) => {
  try {
    const newStudent = await Student.create(req.body);
    res.status(201).json(newStudent);
  } 
  catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } 
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json(student);
  } 
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateStudent = async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json(updatedStudent);
  } 
  catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    if (!deletedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json({ message: "Student deleted successfully" });
  } 
  catch (error) {
    res.status(500).json({ message: error.message });
  }
}; 