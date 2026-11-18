
import Navbar from '../componentes/navbar';
import PanelAnalitico from './PanelAnalitico';
import PanelFiltros from './PanelFiltros';

import GraficoTendencia from './charts/GraficoTendencia';
import GraficoComparativo from './charts/GraficoComparativo';

function DashboardLayout({ children, filtros, setFiltros, datosGrafico }) {
  return (
    <div className="dashboard-layout">
      <Navbar />

      <main className="dashboard-contenido">
        <header className="dashboard-encabezado">
          <h1>Dashboard Interactivo</h1>
          <p>Panel de análisis y visualización de datos</p>
        </header>

        <PanelFiltros
          filtros={filtros}
          setFiltros={setFiltros}
        />

        {children}

        <section className="graficos-avanzados">
          <GraficoTendencia
            labels={datosGrafico.tendencia.labels}
            values={datosGrafico.tendencia.values}
          />

          <GraficoComparativo
            labels={datosGrafico.comparativo.labels}
            values={datosGrafico.comparativo.values}
          />
        </section>

        <PanelAnalitico />
      </main>
    </div>
  );
}

export default DashboardLayout;
