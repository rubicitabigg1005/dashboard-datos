
function PanelFiltros({ filtros, setFiltros }) {
  const manejarCambio = (evento) => {
    const { name, value } = evento.target;

    setFiltros((actuales) => ({
      ...actuales,
      [name]: value
    }));
  };

  return (
    <section className="panel-filtros">
      <h2>Filtros del Dashboard</h2>

      <div className="filtros-controles">
        <div>
          <label htmlFor="categoria">Categoría:</label>
          <select
            id="categoria"
            name="categoria"
            value={filtros.categoria}
            onChange={manejarCambio}
          >
            <option value="todas">Todas las categorías</option>
            <option value="bebidas">Bebidas</option>
            <option value="chocolate">Chocolate</option>
          </select>
        </div>

        <div>
          <label htmlFor="fecha">Fecha:</label>
          <input
            id="fecha"
            type="date"
            name="fecha"
            value={filtros.fecha}
            onChange={manejarCambio}
          />
        </div>
      </div>
    </section>
  );
}

export default PanelFiltros;
