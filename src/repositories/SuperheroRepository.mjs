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
        return await Superhero.find({
            $and: [
                { edad: { $gt: 30 } },
                { planetaOrigen: "Tierra" },
                { $expr: { $gte: [{ $size: "$poderes" }, 2] } },
                // 			└── operador de agregación ──┘
            ],
        });
        /* El operardor $gt es un operador de consulta de MongoDB que significa "mayor que".
		Selecciona los documentos en los que el valor del atributo es mayor que el valor especificado (en este caso, 30).
		El operador $gte: significa "mayor o igual que". Selecciona documentos en los los que el valor del atributo en "mayor o igual" que el valor especificado" */

        /* El operador $size filtra los documentos donde un campo de tipo array
		tiene un longitud exáctamente igual al número especificado.

		/* ¿Por qué no usar { poderes: { $size: 2 } } directamente?
		Porque $size solo acepta un valor exácto, no rangos */

        /* El operador $expr permite usar operadores de agregación dentro de una consulta find() 
		
		Normalmente en un find() solo se pueden comparar un campo contra un valor fijo:
		Pero $size en modo agregación devuelve un valor calculado, no un valor fijo. Entonces necesitamos $expr para poder comparar ese resultado:

		// Sin $expr, MongoDB no puede evaluar esto ❌
		{ poderes: { $size: { $gte: 2 } } }

		// 	Con $expr, le decimos: "evaluá esta expresión de agregación" ✅
		{ $expr: { $gte: [{ $size: "$poderes" }, 2] } } */
    }

    // AGREGAR SUPERHÉROE
    async agregarSuperheroe(superheroe) {
        return await superheroe.save();
    }

    // ELIMINAR SUPERHÉROE
    async eliminarSuperheroe(nombreSuperheroe) {
        return await Superhero.deleteOne({
            nombreSuperheroe: nombreSuperheroe,
        });
    }

    // ACTUALIZAR SUPERHÉROE
    async actualizarSuperheroe(id, operacion) {
        return await Superhero.findByIdAndUpdate(id, operacion, { new: true });
        // { new: true } => retorna el documento actualizado
    }
}

export default new SuperheroRepository();
