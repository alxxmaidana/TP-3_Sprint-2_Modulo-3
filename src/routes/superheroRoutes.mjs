import express from "express";

import {
	agregarNuevoSuperheroeController,
	buscarSuperheoresPorAtributoController,
	eliminarSueperheroePorNombreController,
	obtenerSuperheroePorIdController,
	obtenerSuperheroesMayoresDe30Controller,
	obtenerTodosLosSuperheroesController,
} from "../controllers/supeheroController.mjs";

const router = express.Router();

// Ruta para obtener todos los superhéroes de la colección
router.get("/heroes", obtenerTodosLosSuperheroesController);
// Ruta para buscar y leer un superhéroe de la colección
router.get("/heroes/:id", obtenerSuperheroePorIdController);
// Ruta para buscar superhéroes por atributo y valor
router.get(
	"/heroes/buscar/:atributo/:valor",
	buscarSuperheoresPorAtributoController,
);
// Ruta para buscar superhéroes mayores de 30 años
router.get("/heroes/mayores-30", obtenerSuperheroesMayoresDe30Controller);

// Ruta para Intertar un nuevo superheroe
router.post("/heroes", agregarNuevoSuperheroeController);

// Ruta para eliminar un sueperheroe
router.delete(
	"/heroes/eliminar/:nombre",
	eliminarSueperheroePorNombreController,
);

export default router;
