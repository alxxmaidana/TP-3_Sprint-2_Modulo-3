import express from "express";

import {
	buscarSuperheoresPorAtributoController,
	obtenerSuperheroePorIdController,
	obtenerSuperheroesMayoresDe30Controller,
	obtenerTodosLosSuperheroesController,
} from "../controllers/supeheroController.mjs";

/* Instanciar un enrutador modular dentro de Express, devolviendo un objeto tipo
 middleware router que nos permite definir rutas HTTP de forma aislada y modular.
 Nos sirve para serparar y organizar las rutas de nuestra aplicación en modulos, en lugar de difinir todo en app */
const router = express.Router();

router.get("/heroes", obtenerTodosLosSuperheroesController);
router.get("heroes/:id", obtenerSuperheroePorIdController);
router.get(
	"/heroes/buscar/:atributo/:valor",
	buscarSuperheoresPorAtributoController,
);

router.get("/heroes/mayores-30", obtenerSuperheroesMayoresDe30Controller);

export default router;
