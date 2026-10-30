import eventsRepository from "../repositories/events.repository.js";

export async function listEvents() {
  return await eventsRepository.getAll();
}