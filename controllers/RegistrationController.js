import Registration from "../models/registration.js";
import Student from "../models/student.js";
import Event from "../models/event.js";

export const registerStudentForEvent = async (req, res) => {
  try {
    const { studentId, eventId } = req.body;
    
    // Validate input
    if (!studentId || !eventId) {
      return res.status(400).json({ message: "Student ID and Event ID are required" });
    }

    // Check if student and event exist
    const student = await Student.findById(studentId);
    const event = await Event.findById(eventId);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    // Check if registration already exists
    const existingRegistration = await Registration.findOne({
      student: studentId,
      event: eventId
    });

    if (existingRegistration) {
      return res.status(400).json({ message: "Student is already registered for this event" });
    }
    
    const newRegistration = await Registration.create({
      student: studentId,
      event: eventId,
    });

    res.status(201).json({
      message: "Registration successful",
      registration: newRegistration
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getEventRegistrations = async (req, res) => {
  try {
    const { eventId } = req.params;
    
    if (!eventId) {
      return res.status(400).json({ message: "Event ID is required" });
    }

    const registrations = await Registration.find({ event: eventId })
      .populate("student", "name email year")
      .populate("event", "title date venue");
      
    res.json(registrations);
  } 
  catch (error) {
    console.error("Get registrations error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}; 