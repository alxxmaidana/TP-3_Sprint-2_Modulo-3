import mongoose from "mongoose";
import { config } from "dotenv"
config();

export async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conexión exitosa a la base de datos");
    } catch (error) {
        console.error("Error al conectarse a la base de datos", error)
        process.exit(1);
    }
}
