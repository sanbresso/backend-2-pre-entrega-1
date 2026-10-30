import app from "./app.js";
import { connectDatabase } from "./config/database.js";
import { env } from "./config/env.js";

async function startServer() {
  try {
    await connectDatabase();

    app.listen(env.port, () => {
      console.log(
        `Servidor activo en http://localhost:${env.port}`
      );

      console.log(`Entorno: ${env.nodeEnv}`);
    });
  } catch (error) {
    console.error(
      "Error al iniciar el servidor:",
      error.message
    );

    process.exit(1);
  }
}

startServer();