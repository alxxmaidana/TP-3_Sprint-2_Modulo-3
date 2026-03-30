import superheroes from "../data/nuevosSuperhéroes.js";
import Superhero from "../models/superhero.mjs";
import {
	actualizarSuperheroePorId,
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
		if (superheroe === null) {
			res.status(404).send({ mensaje: "Superhéroe no encontrado" });
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
			res.status(404).send({
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

// ACTUALIZAR SUPERHÉROE POR ID (con el método findByIdAndUpdate())
export async function actualizarSuperheroePorIdController(req, res) {
	try {
		const { id } = req.params;
		console.log(id);
		const superheoreActualizado = await actualizarSuperheroePorId(id, {
			$set: { edad: 300 },
		});
		/* El método findByIdAndUpdate() cuando se resuelve la promesa retorna el documento que se actualizó,
		si pasamos como parámetro { new: true } nos retorna el documento actualizado,
		si no pudo encontrar el documento nos devuelve null */
		if (superheoreActualizado === null) {
			res.status(404).send({
				mensaje: "No se encontró el superhéroe, no se pudo actualizar",
			});
		} else {
			const superheroeFormateado = renderizarSuperheroe(superheoreActualizado);
			res.status(200).json(superheroeFormateado);
		}
	} catch (err) {
		res.status(500).send({
			mensaje: "Error al actualizar el superhéroe",
			err: err.mensaje,
		});
	}
}

// ACTUALIZAR SUPERHÉROE POR ID DE OTRA FORMA (usando findById() y save())
export async function actualizarSuperheroePorIdController2(req, res) {
	try {
		const { id } = req.params;
		// buscar documento por id y comprobar si éxiste
		const superheroe = await obtenerSuperheroePorId(id);
		if (superheroe === null) {
			res.status(404).send({
				mensaje: "No se encontró el superhéroe, no se pudo actalizar",
			});
		} else {
			// actualizar atributos
			superheroe.edad = 555;
			superheroe.creador = "Alexander Maidana";
			// guardarcambios
			await agregarNuevoSuperheroe(superheroe);
			const superheroeFormateado = renderizarSuperheroe(superheroe);
			res.status(200).json(superheroeFormateado);
		}
	} catch (err) {
		res.status(500).send({
			mensaje: "Error al actualizar el superhéroe",
			err: err.mensaje,
		});
	}
}
