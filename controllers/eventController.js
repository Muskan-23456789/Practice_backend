import Event from '../models/event.js';

export const createEvent = async (req, res) => {
    try {
        const newEvent = await Event.create(req.body);
        res.status(201).json(newEvent);
    }
    catch(err) {
        res.status(400).json({message: err.message});
    }
};

export const getEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateEvent = async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json(updatedEvent);
  } 
  catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    if (!deletedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}; 