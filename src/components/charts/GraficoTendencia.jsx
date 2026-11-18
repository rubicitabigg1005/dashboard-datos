
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function GraficoTendencia({ labels = [], values = [] }) {
  const datos = {
    labels,
    datasets: [
      {
        label: 'Unidades por fecha',
        data: values,
        borderColor: '#d7193f',
        backgroundColor: 'rgba(215, 25, 63, 0.15)',
        tension: 0.4,
        fill: true,
        pointRadius: 5,
        pointHoverRadius: 8
      }
    ]
  };

  const opciones = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Tendencia de productos'
      },
      legend: {
        display: true
      },
      tooltip: {
        enabled: true
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <section className="grafico-contenedor">
      {labels.length === 0 || values.length === 0 ? (
        <p>No hay datos disponibles para mostrar.</p>
      ) : (
        <div style={{ height: '320px' }}>
          <Line data={datos} options={opciones} />
        </div>
      )}
    </section>
  );
}

export default GraficoTendencia;
