import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-slate-900">
      <nav className="bg-purple-900 text-violet-100 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Recetas Deliciosas</h1>
          <div className="flex space-x-4">
            <Link to="/" className="hover:text-pink-200 transition-colors">Inicio</Link>
            <Link to="/favorites" className="hover:text-pink-200 transition-colors">Mis Favoritas</Link>
          </div>
        </div>
      </nav>
      <main className="container mx-auto p-4 text-pink-100">{children}</main>
      <footer className="bg-slate-800 text-violet-200 p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>© 2025 Catálogo de Recetas - Desarrollado por Marcos Bonilla</p>
          <p>Código de estudiante: BN22I04001</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;