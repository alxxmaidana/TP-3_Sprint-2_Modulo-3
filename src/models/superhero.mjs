import mongoose from "mongoose";

const superheroSchema = new mongoose.Schema(
    {
        nombreSuperheroe: { type: String, required: true },
        nombreReal: { type: String, required: true },
        edad: { type: Number, min: 0 },
        planetaOrigen: { type: String, default: "Desconocido" },
        debilidad: { type: String },
        poderes: [ { type: String} ],
        aliados: [ { type: String} ],
        enemigos: [ { type: String} ],
        creador: { type: String },
        createdAt: { type: Date, default: Date.now }
    }
);

/* Primer parámetro es el nombre del modelo, segundo el esquema y tercero el nombre de la colección en la base de datos */
const superhero = mongoose.model("Supehero", superheroSchema, "Grupo-30");
export default superhero;
