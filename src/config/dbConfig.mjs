import mongoose from "mongoose";
import { setServers } from "node:dns";
import "dotenv/config";
setServers(["1.1.1.1", "8.8.8.8"]);

export async function connectDB() {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		console.log("Conexión éxitosa a la base de datos");
	} catch (err) {
		console.error("Error al conectar a la base de datos MongoDB", err);
		throw Error;
	}
}
