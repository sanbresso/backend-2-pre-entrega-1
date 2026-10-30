import mongoose from "mongoose";
import { env } from "./env.js";

export async function connectDatabase() {
  await mongoose.connect(env.mongoUrl, {
    serverSelectionTimeoutMS: 10000
  });

  console.log("MongoDB conectado correctamente");
}