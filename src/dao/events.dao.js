import Event from "../models/Event.js";

class EventsDAO {
  async findAll() {
    return await Event.find({}).lean();
  }

  async create(eventData) {
    return await Event.create(eventData);
  }
}

export default new EventsDAO();