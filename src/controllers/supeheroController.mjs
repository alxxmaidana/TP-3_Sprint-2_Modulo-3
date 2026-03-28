import superheroes from "../data/nuevosSuperhéroes.js";
import Superhero from "../models/superhero.mjs";
import {
	agregarNuevoSuperheroe,
	buscarSuperheoresPorAtributo,
	eliminarSuperheroePorNombre,
	obtenerSuperheroePorId,
	obtenerSuperheroesMayoresDe30,
	obtenerTodosLosSuperheroes,
} from "../services/superheroService.mjs";
import {
	renderizarlistaSuperheroes,
	renderizarSuperheroe,
} from "../views/responseView.mjs";

// OBTENER SUPERHÉROE POR ID
export async function obtenerSuperheroePorIdController(req, res) {
	try {
		const { id } = req.params;
		const superheroe = await obtenerSuperheroePorId(id);
		if (!superheroe) {
			return res.status(404).send({ mensaje: "Superhéroe no encontrado" });
		} else {
			const superheroeFormateado = renderizarSuperheroe(superheroe);
			res.status(200).json(superheroeFormateado);
		}
	} catch (err) {
		res.status(500).send({
			mensaje: "Error al buscar el superhéroe",
			err: err.mensaje,
		});
		throw err;
	}
}

// OBTNER TODOS LOS SUPERHÉROES
export async function obtenerTodosLosSuperheroesController(_req, res) {
	try {
		const superheroes = await obtenerTodosLosSuperheroes();
		const superheroesFormateados = renderizarlistaSuperheroes(superheroes);
		res.status(200).json(superheroesFormateados);
	} catch (err) {
		res.status(500).send({
			mensaje: "Error al obtener todos los superhéroes",
			err: err.mensaje,
		});
	}
}

// BUSCAR SUPERHÉROE POR ATRIBUTO Y VALOR
export async function buscarSuperheoresPorAtributoController(req, res) {
	try {
		const { atributo, valor } = req.params;
		const superheroes = await buscarSuperheoresPorAtributo(atributo, valor);
		if (superheroes.length === 0) {
			res.status(404).send({
				mensaje: "No se encontraros superhéroes con ese atributo",
			});
		} else {
			const superheroesFormateados = renderizarlistaSuperheroes(superheroes);
			res.status(200).json(superheroesFormateados);
		}
	} catch (err) {
		res.status(500).send({
			mensaje: "Error al buscar sueperhéroes por atributo",
			err: err.mensaje,
		});
	}
}

// OBTENER SUEPERHÉROES MAYORES DE 30
export async function obtenerSuperheroesMayoresDe30Controller(_req, res) {
	try {
		const superheroes = await obtenerSuperheroesMayoresDe30();
		if (superheroes.length === 0) {
			return res.status(404).send({
				mensaje: "No se encontraron superhéroes mayores a 30 años",
			});
		} else {
			const superheroesFormateados = renderizarlistaSuperheroes(superheroes);
			res.status(200).json(superheroesFormateados);
		}
	} catch (err) {
		res.status(500).send({
			mensaje: "Error al buscar superhéros mayores a 30 años",
			err: err.mansaje,
		});
	}
}

// AGREGAR NUEVO SUPERHÉROE
export async function agregarNuevoSuperheroeController(_req, res) {
	try {
		// Agregar el primer superhéroe del array superheores
		const nuevoSuperheroe = new Superhero(superheroes[0]);
		await agregarNuevoSuperheroe(nuevoSuperheroe);
		console.log("Superheroe agragado");
		const nuevoSuperheroeFormateado = renderizarSuperheroe(nuevoSuperheroe);
		res.status(200).json(nuevoSuperheroeFormateado);
	} catch (err) {
		res.status(500).send({
			mensaje: "Error al agregar el nuevo superheroe",
			err: err.mensaje,
		});
	}
}

// ALIMINAR SUPERHÉROE POR NOMBRE
export async function eliminarSueperheroePorNombreController(req, res) {
	try {
		const { nombreSuperheroe } = req.params;
		const resultado = await eliminarSuperheroePorNombre(nombreSuperheroe);
		if (resultado.deletedCount === 0) {
			res.status(404).send({
				mensaje: `No se encotró el superhéroe ${nombreSuperheroe}, no se puede eliminar`,
			});
		} else {
			res.status(200).send({
				mensaje: `Se eliminó correctamente el superhéroe ${nombreSuperheroe}`,
			});
		}
	} catch (err) {
		res.status(500).send({
			mensaje: "Error al eliminar el superheroe",
			err: err.mensaje,
		});
	}
}
