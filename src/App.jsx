
import { useState, useEffect } from 'react';

import DashboardLayout from './components/DashboardLayout';
import TarjetaMetrica from './components/TarjetaMetrica';
import TablaDatos from './components/TablaDatos';
import GraficoDatos from './components/GraficoDatos';

import {
  obtenerDatosVisualizacion,
  procesarDatos,
  formatearParaGrafico
} from './services/dataService';

import './App.css';

function App() {
  const [datosOriginales, setDatosOriginales] = useState([]);
  const [datos, setDatos] = useState([]);
  const [metricas, setMetricas] = useState(null);

  const [filtros, setFiltros] = useState({
    categoria: 'todas',
    fecha: ''
  });

  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  // Cargar los datos iniciales
  useEffect(() => {
    async function cargarDatos() {
      try {
        const resultado = await obtenerDatosVisualizacion();
        setDatosOriginales(resultado);
      } catch (err) {
        console.error(err);
        setError('No fue posible cargar los datos.');
      } finally {
        setCargando(false);
      }
    }

    cargarDatos();
  }, []);

  // Aplicar filtros
  useEffect(() => {
    let filtrados = [...datosOriginales];

    if (filtros.categoria !== 'todas') {
      filtrados = filtrados.filter(
        (item) => item.categoria === filtros.categoria
      );
    }

    if (filtros.fecha) {
      filtrados = filtrados.filter(
        (item) => item.fecha === filtros.fecha
      );
    }

    const resultado = procesarDatos(filtrados);

    setDatos(resultado.filas);
    setMetricas(resultado.metricas);
  }, [filtros, datosOriginales]);

  // Preparar los datos para Chart.js
  const datosGrafico = formatearParaGrafico(datos);

  if (cargando) {
    return <p>Cargando información...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <DashboardLayout
      filtros={filtros}
      setFiltros={setFiltros}
      datosGrafico={datosGrafico}
    >
      {metricas && (
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
      )}

      <GraficoDatos datos={datos} />

      <TablaDatos datos={datos} />
    </DashboardLayout>
  );
}

export default App;
