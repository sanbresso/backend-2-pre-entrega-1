import mongoose from "mongoose";
import { env } from "../config/env.js";
import eventsRepository from "../repositories/events.repository.js";

const testDatabase = "pbe_ii_preentrega1_pruebas";

const connectionOptions = {
  dbName: testDatabase,
  serverSelectionTimeoutMS: 10000
};

async function verifyPersistence() {
  try {
    await mongoose.connect(
      env.mongoUrl,
      connectionOptions
    );

    console.log("Conectado a la base de pruebas");

    const eventData = {
      title: `Prueba de persistencia PE1 ${Date.now()}`,
      description: "Prueba de DAO y Repository",
      date: new Date("2030-12-15T18:00:00Z"),
      capacity: 10,
      status: "draft"
    };

    const created = await eventsRepository.create(eventData);

    console.log("Evento guardado:", created._id.toString());

    await mongoose.disconnect();

    await mongoose.connect(
      env.mongoUrl,
      connectionOptions
    );

    const events = await eventsRepository.getAll();

    const found = events.find(
      (event) =>
        event._id.toString() === created._id.toString()
    );

    if (!found) {
      throw new Error(
        "El evento no se recuperó de MongoDB"
      );
    }

    console.log("Evento recuperado:", found.title);
    console.log("Prueba de persistencia exitosa");
  } catch (error) {
    console.error("Error en la prueba:", error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

await verifyPersistence();