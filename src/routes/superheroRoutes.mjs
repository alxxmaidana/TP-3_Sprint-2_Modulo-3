import express from "express";

import {
	actualizarSuperheroePorIdController,
	actualizarSuperheroePorIdController2,
	agregarNuevoSuperheroeController,
	buscarSuperheoresPorAtributoController,
	eliminarSueperheroePorNombreController,
	obtenerSuperheroePorIdController,
	obtenerSuperheroesMayoresDe30Controller,
	obtenerTodosLosSuperheroesController,
} from "../controllers/superheroController.mjs";

const router = express.Router();

// Ruta para obtener todos los superhéroes de la colección
router.get("/heroes", obtenerTodosLosSuperheroesController);
// Ruta para buscar y leer un superhéroe de la colección
router.get("/heroes/id/:id", obtenerSuperheroePorIdController);

// Ruta para buscar superhéroes mayores de 30 años
router.get("/heroes/mayores-30", obtenerSuperheroesMayoresDe30Controller);

// Ruta para buscar superhéroes por atributo y valor
router.get(
	"/heroes/buscar/:atributo/:valor",
	buscarSuperheoresPorAtributoController,
);

// Ruta para Intertar un nuevo superheroe
router.post("/heroes", agregarNuevoSuperheroeController);

// Ruta para eliminar un sueperheroe por su nombre de superhéroe
router.delete(
	"/heroes/eliminar/:nombreSuperheroe",
	eliminarSueperheroePorNombreController,
);

// Rutas para actualizar un docuemento por su id
router.put("/heroes/actualizar/:id", actualizarSuperheroePorIdController);
router.put(
	"/heroes/actualizarOtraForma/:id",
	actualizarSuperheroePorIdController2,
);

export default router;
