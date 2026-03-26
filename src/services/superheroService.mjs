import SuperheroRepository from "../repositories/superheroRepository.mjs";

export async function obtenerSuperheroePorId(id) {
	return await SuperheroRepository.buscarPorId(id);
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
