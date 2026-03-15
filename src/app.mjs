import express from "express";
import { connectToDatabase } from "./config/dbConfig.mjs";
import router from "./routes/superheroRoutes.mjs"
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT;

// Middleware para parsear JSON
app.use(express.json());

// Conección a MongoDB
connectToDatabase();

// Configuración de rutas
app.use("/api", router);

// Manejo de errores para rutas no encontradas
app.use((req, res) => {
    res.status(404).send({ mensaje: "Ruta no encontrada" });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchado en puerto ${PORT}`);
});