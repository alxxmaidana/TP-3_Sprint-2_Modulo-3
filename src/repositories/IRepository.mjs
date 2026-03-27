class IRepository {
	obtenerPorId(_id) {
		throw new Error("Método 'obtenerPorId()' no implementado");
	}

	obtenerTodos() {
		throw new Error("Método 'obtenerTodos()' no implementado");
	}

	buscarPorAtributo(_atributo, _valor) {
		throw new Error("Método 'buscarPorAtributo()' no implementado");
	}
}

export default IRepository;

/* Parámetro no utilizado (Unused Variable): Anteponer un guió bajo a un parámetro es una convención de nomeclatura
que indica a otros desarolladores y linters, que el parámetro es necesario para cumplir con la firma de una interfaz o función, pero no se utilíza
dentro del cuerpo de la misma  */
