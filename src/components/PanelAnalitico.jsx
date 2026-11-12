
import { useState } from 'react';
import { obtenerPrediccion } from '../services/dataService';

function PanelAnalitico() {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState('');

  async function consultarDatos() {
    setCargando(true);
    setError('');
    setDatos(null);

    try {
      const resultado = await obtenerPrediccion();
      setDatos(resultado);
    } catch (err) {
      setError('No fue posible obtener los datos meteorológicos. Verifica tu conexión.');
      console.error(err);
    } finally {
      setCargando(false);
    }
  }

  return (
    <section className="panel-analitico">
      <h2>Análisis meteorológico</h2>
      <p>Consulta información actual de la Ciudad de México.</p>

      <button onClick={consultarDatos} disabled={cargando}>
        {cargando ? 'Analizando datos...' : 'Consultar API'}
      </button>

      {cargando && <p>Conectando con Open-Meteo...</p>}

      {error && <p className="mensaje-error">{error}</p>}

      {datos && (
        <div className="metricas">
          <div className="tarjeta-metrica">
            <h3>Temperatura</h3>
            <p>{datos.temperature_2m} °C</p>
          </div>

          <div className="tarjeta-metrica">
            <h3>Humedad relativa</h3>
            <p>{datos.relative_humidity_2m} %</p>
          </div>

          <div className="tarjeta-metrica">
            <h3>Sensación térmica</h3>
            <p>{datos.apparent_temperature} °C</p>
          </div>

          <div className="tarjeta-metrica">
            <h3>Velocidad del viento</h3>
            <p>{datos.wind_speed_10m} km/h</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default PanelAnalitico;
