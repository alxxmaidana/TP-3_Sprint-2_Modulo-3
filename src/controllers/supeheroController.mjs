import {
    buscarSuperheoresPorAtributo,
    obtenerSuperheroePorId,
    obtenerSuperheroesMayoresDe30,
    obtenerTodosLosSuperheroes,
} from "../services/superheroService.mjs";
import {
    renderizarlistaSuperheroes,
    renderizarSuperheroe,
} from "../views/responseView.mjs";

export async function obtenerSuperheroePorIdController(req, res) {
    try {
        const { id } = req.params;
        const superheroe = await obtenerSuperheroePorId(id);
        if (!superheroe) {
            return res
                .status(404)
                .send({ mensaje: "Superhéroe no encontrado" });
        } else {
            const superheroeFormateado = renderizarSuperheroe(superheroe);
            res.status(200).json(superheroeFormateado);
        }
    } catch (err) {
        res.status(500).send({
            mensaje: "Error al buscar el superhéroe",
            err: err.mensaje,
        });
    }
}

export async function obtenerTodosLosSuperheroesController(req, res) {
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

export async function buscarSuperheoresPorAtributoController(req, res) {
    try {
        const { atributo, valor } = req.params;
        const superheroes = await buscarSuperheoresPorAtributo(atributo, valor);
        if (superheroes.length === 0) {
            return res.status(400).send({
                mensaje: "No se encontraros superhéroes con ese atributo",
            });
        } else {
            const superheroesFormateados =
                renderizarlistaSuperheroes(superheroes);
            res.status(200).json(superheroesFormateados);
        }
    } catch (err) {
        res.status(500).send({
            mensaje: "Error al buscar sueperhéroes por atributo",
            err: err.mensaje,
        });
    }
}

export async function obtenerSuperheroesMayoresDe30Controller(req, res) {
    try {
        const superheroes = await obtenerSuperheroesMayoresDe30();
        if (superheroes.length === 0) {
            return res.status(404).send({
                mensaje: "No se encontraron superhéroes mayores a 30 años",
            });
        } else {
            const superheroesFormateados =
                renderizarlistaSuperheroes(superheroes);
            res.status(200).json(superheroesFormateados);
        }
    } catch (err) {
        res.status(500).send({
            mensaje: "Error al buscar superhéros mayores a 30 años",
            err: err.mansaje,
        });
    }
}
