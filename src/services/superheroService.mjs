import superheroRepository from "../repositories/superheroRepository.mjs";

export async function obtenerSuperheroePorId(id) {
    return await superheroRepository.obtenerPorId(id);
}

export async function obtenerTodosLosSuperheroes() {
    return await superheroRepository.obtenerTodos();
}

export async function buscarSuperheroesPorAtributo(atributo, valor) {
    return await superheroRepository.buscarPorAtributo(atributo, valor);
}

export async function obtenerSuperheroesMayoresDe30() {
    return await superheroRepository.obtenerMayoresDe30();
}