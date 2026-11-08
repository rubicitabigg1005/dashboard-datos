
import dataset from '../data/dataset.json';

// Función asíncrona para obtener los datos simulando una petición HTTP
export async function obtenerDatosVisualizacion() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dataset);
    }, 500);
  });
}

// Función para procesar y preparar los datos
export function procesarDatos(datos) {
  const datosFiltrados = datos.filter(
    (item) => item.producto && item.cantidad >= 0 && item.precio >= 0
  );

  const totalProductos = datosFiltrados.length;

  const totalUnidades = datosFiltrados.reduce(
    (total, item) => total + item.cantidad,
    0
  );

  const valorPromedio = totalProductos > 0
    ? datosFiltrados.reduce(
        (total, item) => total + item.precio,
        0
      ) / totalProductos
    : 0;

  return {
    filas: datosFiltrados,
    metricas: {
      totalProductos,
      totalUnidades,
      valorPromedio
    }
  };
}
