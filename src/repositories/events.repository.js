import eventsDAO from "../dao/events.dao.js";

class EventsRepository {
  constructor(dao) {
    this.dao = dao;
  }

  async getAll() {
    return await this.dao.findAll();
  }

  async create(eventData) {
    return await this.dao.create(eventData);
  }
}

export default new EventsRepository(eventsDAO);