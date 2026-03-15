import express from "express";
import {
    obtenerSuperheroePorIdController,
    obtenerTodosLosSuperheroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayoresDe30Controller
} from "../controllers/supeheroController.mjs";

// Creación del Router
const router = express.Router();

/* Definimos las rutas HTTP */
router.get("/heroes", obtenerTodosLosSuperheroesController);
router.get("/heroes/mayores-30", obtenerSuperheroesMayoresDe30Controller);
router.get("/heroes/buscar/:atributo/:valor", buscarSuperheroesPorAtributoController);
router.get("/heroes/id/:id", obtenerSuperheroePorIdController);

export default router;