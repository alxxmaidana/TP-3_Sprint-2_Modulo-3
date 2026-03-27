import SuperheroRepository from "../repositories/SuperheroRepository.mjs";

export async function obtenerSuperheroePorId(id) {
	return await SuperheroRepository.obtenerPorId(id);
}

export async function obtenerTodosLosSuperheroes() {
	return await SuperheroRepository.obtenerTodos();
}

export async function buscarSuperheoresPorAtributo(atributo, valor) {
	return await SuperheroRepository.buscarPorAtributo(atributo, valor);
}

export async function obtenerSuperheroesMayoresDe30() {
	return await SuperheroRepository.obtenerMayoresDe30();
}

export async function agregarNuevoSuperheroe(superheroe) {
	return await SuperheroRepository.agregarSuperheroe(superheroe);
}

export async function eliminarSueperheroePorNombre(nombreSuperheroe) {
	return await SuperheroRepository.eliminarSuperheroe(nombreSuperheroe);
}
