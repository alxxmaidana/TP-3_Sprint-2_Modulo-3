import express from "express";
import { connectDB } from "./config/dbConfig.mjs";
import routes from "./routes/superheroRoutes.mjs";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;

// middleware para parsear JSON
app.use(express.json());

await connectDB();

// Configuración de las rutas
app.use("/api", routes);

// Manejo de errores para rutas no encontradas
app.use((_req, res) => {
	res.status(404).send({ mensaje: "Ruta no encontrada" });
});

app.listen(PORT, () => {
	console.log("Servidor escuchado en el puerto:", PORT);
});
