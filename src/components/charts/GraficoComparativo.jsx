
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function GraficoComparativo({ labels = [], values = [] }) {
  const datos = {
    labels,
    datasets: [
      {
        label: 'Unidades por producto',
        data: values,
        backgroundColor: [
          '#d7193f',
          '#ed6a84',
          '#f29aae',
          '#b81738',
          '#f5b6c4'
        ],
        borderRadius: 8
      }
    ]
  };

  const opciones = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Comparación de productos'
      },
      tooltip: {
        enabled: true
      },
      legend: {
        display: true
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
          <Bar data={datos} options={opciones} />
        </div>
      )}
    </section>
  );
}

export default GraficoComparativo;
