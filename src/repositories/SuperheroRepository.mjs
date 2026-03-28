// Implementación de la interfáz
import Superhero from "../models/superhero.mjs";
import IRepository from "./IRepository.mjs";

class SuperheroRepository extends IRepository {
	// OBTENER POR ID
	async obtenerPorId(id) {
		return await Superhero.findById(id);
	}

	// OBTENTER TODOS
	async obtenerTodos() {
		return await Superhero.find();
	}

	// BUSCAR POR ATRIBUTO Y VALOR
	async buscarPorAtributo(atributo, valor) {
		return await Superhero.find({ [atributo]: valor });
		// El uso de corchetes permite acceder a la propiedad del objeto utilizando el valor de la variable "atributo".
	}

	// OBTENER MAYORES DE 30
	async obtenerMayoresDe30() {
		return await Superhero.find({ edad: { $gt: 30 } });
		/* El operardor $gt es un operador de consulta de MongoDB que significa "mayor que". Selecciona los documentos en los que el valor del atributo es mayor que el valor especificado (en este caso, 30). */
	}

	// AGREGAR SUPERHÉROE
	async agregarSuperheroe(superheroe) {
		return await superheroe.save();
	}

	// ELIMINAR SUPERHÉROE
	async eliminarSuperheroe(nombreSuperheroe) {
		return await Superhero.deleteOne({ nombreSuperheroe: nombreSuperheroe });
	}
}

export default new SuperheroRepository();
