
function GraficoDatos({ datos }) {
  const maximo = Math.max(...datos.map((item) => item.cantidad), 1);

  return (
    <section className="grafico-contenedor">
      <h2>Unidades por producto</h2>

      {datos.length === 0 ? (
        <p>No hay datos para mostrar.</p>
      ) : (
        <div className="grafico-barras">
          {datos.map((item) => (
            <div className="barra-item" key={item.id}>
              <span>{item.producto}</span>
              <div className="barra-fondo">
                <div
                  className="barra-valor"
                  style={{
                    width: `${(item.cantidad / maximo) * 100}%`
                  }}
                />
              </div>
              <strong>{item.cantidad}</strong>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default GraficoDatos;
