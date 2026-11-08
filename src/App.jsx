
import { useState, useEffect } from 'react';

import Navbar from './componentes/navbar';
import TarjetaMetrica from './components/TarjetaMetrica';
import TablaDatos from './components/TablaDatos';

import {
  obtenerDatosVisualizacion,
  procesarDatos
} from './services/dataService';

import './App.css';

function App() {
  const [datos, setDatos] = useState([]);
  const [metricas, setMetricas] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function cargarDatos() {
      try {
        const resultado = await obtenerDatosVisualizacion();
        const datosProcesados = procesarDatos(resultado);

        setDatos(datosProcesados.filas);
        setMetricas(datosProcesados.metricas);
      } catch (error) {
        setError('No fue posible cargar los datos.');
        console.error(error);
      } finally {
        setCargando(false);
      }
    }

    cargarDatos();
  }, []);

  if (cargando) {
    return <p>Cargando información...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <Navbar />

      <main className="dashboard">
        <h2>Panel de Ciencia de Datos</h2>
        <p>Resumen de información del dataset</p>

        <section className="metricas">
          <TarjetaMetrica
            titulo="Total de productos"
            valor={metricas.totalProductos}
          />

          <TarjetaMetrica
            titulo="Unidades disponibles"
            valor={metricas.totalUnidades}
          />

          <TarjetaMetrica
            titulo="Precio promedio"
            valor={`$${metricas.valorPromedio.toFixed(2)}`}
          />
        </section>

        <TablaDatos datos={datos} />
      </main>
    </div>
  );
}

export default App;
