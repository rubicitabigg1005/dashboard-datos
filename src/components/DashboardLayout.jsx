
import Navbar from '../componentes/navbar';
import PanelAnalitico from './PanelAnalitico';
import PanelFiltros from './PanelFiltros';

function DashboardLayout({ children, filtros, setFiltros }) {
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

        <PanelAnalitico />
      </main>
    </div>
  );
}

export default DashboardLayout;
