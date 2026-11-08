
function TablaDatos({ datos }) {
  return (
    <div className="tabla-contenedor">
      <h2>Datos del Dashboard</h2>

      <table className="tabla-datos">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
        </thead>

        <tbody>
          {datos.map((item) => (
            <tr key={item.id}>
              <td>{item.producto}</td>
              <td>{item.cantidad}</td>
              <td>${item.precio.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaDatos;
