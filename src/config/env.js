import "dotenv/config";

const PORT = Number(process.env.PORT ?? 8080);

if (!Number.isInteger(PORT) || PORT < 1 || PORT > 65535) {
  throw new Error("PORT debe ser un puerto válido");
}

if (!process.env.MONGO_URL) {
  throw new Error("MONGO_URL no está configurado");
}

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET no está configurado");
}

export const env = Object.freeze({
  port: PORT,
  nodeEnv: process.env.NODE_ENV ?? "development",
  mongoUrl: process.env.MONGO_URL,
  jwtSecret: process.env.JWT_SECRET
});